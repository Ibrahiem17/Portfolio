import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      aria-label={`View ${screen.label} screenshot`}
    >
      <span className="phone__frame">
        <span className="phone__notch" />
        <img src={screen.src} alt={screen.label} loading="lazy" />
      </span>
      <span className="phone__meta">
        <span className="phone__label">{screen.label}</span>
        <span className="phone__caption">{screen.caption}</span>
      </span>
    </motion.button>
  );
}

export default function PhoneGallery({ screens }) {
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

  return (
    <>
      <div className="phones" style={{ '--count': screens.length }}>
        {screens.map((screen, i) => (
          <Phone
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

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.label} />
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
