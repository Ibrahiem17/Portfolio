import { motion } from 'framer-motion';
import { about, profile } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="section__inner about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">{about.heading}</p>
        <div className="about__grid">
          <div className="about__avatar">
            <div className="about__avatar-ring">
              <span>{profile.avatarInitials}</span>
            </div>
          </div>
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="about__location">📍 {profile.location}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
