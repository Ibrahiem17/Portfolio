import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MI<span className="dot">.</span>
        </button>
        <div className="nav__links">
          {LINKS.map((link) => (
            <button key={link.id} className="nav__link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <button key={link.id} className="nav__link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
