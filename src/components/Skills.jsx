import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <p className="eyebrow">what i work with</p>
        <h2 className="section__title">
          Skills &amp; <span className="gradient-text">Stack</span>
        </h2>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill"
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="skill__label">
                <span>{skill.name}</span>
                <span className="skill__pct">{skill.level}%</span>
              </div>
              <div className="skill__bar">
                <motion.div
                  className="skill__bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
