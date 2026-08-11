import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { asset } from '../lib/asset';

const reveal = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay: index * 0.07 },
});

function Phone({ screen, onClick, index, total }) {
  // Fan the devices out from the centre: outer phones tilt further away.
  const mid = (total - 1) / 2;
  const offset = index - mid;

  return (
    <motion.button
      type="button"
      className="phone"
      onClick={onClick}
      style={{ '--fan': offset }}
      {...reveal(index)}
      aria-label={`View ${screen.label} screenshot`}
    >
      <span className="phone__frame">
        <span className="phone__notch" />
        <img src={asset(screen.src)} alt={screen.label} loading="lazy" />
      </span>
      <span className="phone__meta">
        <span className="phone__label">{screen.label}</span>
        <span className="phone__caption">{screen.caption}</span>
      </span>
    </motion.button>
  );
}

function BrowserShot({ screen, onClick, index }) {
  return (
    <motion.button
      type="button"
      className="shot"
      onClick={onClick}
      {...reveal(index)}
      aria-label={`View ${screen.label} screenshot`}
    >
      <span className="shot__frame">
        <span className="shot__bar">
          <i />
          <i />
          <i />
        </span>
        <span className="shot__viewport">
          <img src={asset(screen.src)} alt={screen.label} loading="lazy" />
        </span>
      </span>
      <span className="shot__meta">
        <span className="shot__label">{screen.label}</span>
        <span className="shot__caption">{screen.caption}</span>
      </span>
    </motion.button>
  );
}

export default function ScreenGallery({ screens, device = 'phone' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const closeRef = useRef(null);
  const lastFocused = useRef(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (delta) => setActiveIndex((i) => (i === null ? i : (i + delta + screens.length) % screens.length)),
    [screens.length],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
      }
    };

    // Pull focus into the dialog so keys land here, not on the gallery behind it.
    lastFocused.current = document.activeElement;
    closeRef.current?.focus();

    document.addEventListener('keydown', onKey);

    // The <html> element is what scrolls, so lock it there rather than on body.
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      root.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [isOpen, close, step]);

  const active = isOpen ? screens[activeIndex] : null;
  const isBrowser = device === 'browser';
  const Item = isBrowser ? BrowserShot : Phone;

  return (
    <>
      <div
        className={`shots shots--${device}`}
        style={{ '--count': screens.length }}
      >
        {screens.map((screen, i) => (
          <Item
            key={screen.src}
            screen={screen}
            index={i}
            total={screens.length}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button ref={closeRef} className="lightbox__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous screenshot"
          >
            ‹
          </button>

          <figure
            className={`lightbox__figure lightbox__figure--${device}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={asset(active.src)} alt={active.label} />
            <figcaption>
              <strong>{active.label}</strong>
              <span>{active.caption}</span>
            </figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next screenshot"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
