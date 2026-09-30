import React from "react";
import { featuredWork } from "../../portfolio";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  return (
    <section className="featured-work" aria-labelledby="featured-heading">
      <div className="featured-heading">
        <div>
          <p className="section-eyebrow">Selected work</p>
          <h2 id="featured-heading">
            From the mine plan to the working system
          </h2>
        </div>
        <a className="featured-all" href="#/projects">
          Explore my projects <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="featured-grid">
        {featuredWork.map((project, i) => (
          <article className="featured-card" key={project.id}>
            <div className="featured-card-top">
              <span>0{i + 1}</span>
              <span>{project.context}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="featured-result">{project.result}</p>
            <dl>
              <dt>The challenge</dt>
              <dd>{project.problem}</dd>
              <dt>My responsibility</dt>
              <dd>{project.role}</dd>
              <dt>What I delivered</dt>
              <dd>{project.delivery}</dd>
            </dl>
            <p className="featured-stack">{project.stack}</p>
            <a href={project.href} className="featured-link">
              {project.linkLabel}
              <span aria-hidden="true"> ↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
