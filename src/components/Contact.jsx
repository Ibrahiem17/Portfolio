import { motion } from 'framer-motion';
import { profile, socials } from '../data/portfolioData';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div
        className="section__inner contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">get in touch</p>
        <h2 className="section__title">
          Let's build something <span className="gradient-text">together</span>
        </h2>
        <p className="contact__sub">
          Got an idea, a role, or just want to say hi? My inbox is always open.
        </p>

        <a className="btn btn--primary contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React + Three.js.</p>
      </footer>
    </section>
  );
}
