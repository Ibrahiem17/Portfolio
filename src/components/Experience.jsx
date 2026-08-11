import { motion } from 'framer-motion';
import { certifications, education, experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <p className="eyebrow">where i've been</p>
        <h2 className="section__title">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              className="timeline__item"
              key={`${job.role}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <ul>
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="edu"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="case__block-title">Education</h4>
          <div className="edu__list">
            {education.map((e) => (
              <div className="edu__item" key={e.degree}>
                <div>
                  <h5>{e.degree}</h5>
                  <p>{e.school}</p>
                </div>
                <span className="timeline__period">{e.period}</span>
              </div>
            ))}
          </div>

          <h4 className="case__block-title edu__certs-title">Certifications</h4>
          <div className="edu__certs">
            {certifications.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
