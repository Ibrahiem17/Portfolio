import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PhoneGallery from './PhoneGallery';
import { projects } from '../data/portfolioData';

function Panel({ project }) {
  return (
    <div className="proj__inner">
      {project.meta && (
        <dl className="case__meta">
          {project.meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {project.description?.map((para, i) => (
        <p className="proj__para" key={i}>
          {para}
        </p>
      ))}

      {project.screens && <PhoneGallery screens={project.screens} />}

      {project.stats && (
        <div className={`case__stats case__stats--${project.stats.length}`}>
          {project.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {project.flow && (
        <div className="case__block">
          <h4 className="case__block-title">How it works</h4>
          <ol className="flow">
            {project.flow.map((s, i) => (
              <li key={s.title} className="flow__step">
                <span className="flow__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h5>{s.title}</h5>
                  <p>{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {project.stack && (
        <div className="case__block">
          <h4 className="case__block-title">Built with</h4>
          <div className="stack">
            {project.stack.map((group) => (
              <div key={group.group} className="stack__group">
                <span className="stack__label">{group.group}</span>
                <div className="stack__items">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.features && (
        <div className="case__block">
          <h4 className="case__block-title">Key features</h4>
          <div className="features">
            {project.features.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature__dot" />
                <h5>{f.title}</h5>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(project.links?.repo || project.links?.demo) && (
        <div className="proj__links">
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn btn--accent">
              view code ↗
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn--ghost">
              live demo ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, position, isOpen, onToggle }) {
  const panelId = `panel-${project.id}`;

  return (
    <motion.article
      className={`proj ${isOpen ? 'proj--open' : ''}`}
      style={{ '--p-accent': project.accent }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <button className="proj__head" onClick={onToggle} aria-expanded={isOpen} aria-controls={panelId}>
        <span className="proj__num">{position}</span>

        <span className="proj__titles">
          <h3>{project.title}</h3>
          <span className="proj__subtitle">{project.subtitle}</span>
        </span>

        <span className="proj__preview-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag tag--accent">
              {tag}
            </span>
          ))}
        </span>

        <span className="proj__toggle" aria-hidden="true">
          <span className="proj__chev" />
        </span>
      </button>

      <p className="proj__summary">{project.summary}</p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            className="proj__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Panel project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  const [openIds, setOpenIds] = useState(() =>
    projects.filter((p) => p.defaultOpen).map((p) => p.id),
  );

  const toggle = (id) =>
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]));

  return (
    <section className="section" id="projects">
      <div className="section__inner section__inner--wide">
        <p className="eyebrow">selected work</p>
        <h2 className="section__title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={String(i + 1).padStart(2, '0')}
              isOpen={openIds.includes(project.id)}
              onToggle={() => toggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
