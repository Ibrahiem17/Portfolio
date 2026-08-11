import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';

// Three.js is heavy — keep it out of the initial bundle so text paints first.
const Scene3D = lazy(() => import('./Scene3D'));

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__canvas">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="badge">✦ open to work</span>
        <h1 className="hero__name">
          {profile.name.split(' ')[0]}
          <br />
          <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            see my work
          </a>
          <a
            href="#contact"
            className="btn btn--ghost"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            let's talk
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="btn btn--ghost"
              download={profile.resumeFileName || true}
            >
              download CV ↓
            </a>
          )}
        </div>
      </motion.div>

      <div className="hero__scroll">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
