import React from 'react';
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Featured Works</h2>

      <div className="work__filters">
        <span className="work__item">HTML</span>
        <span className="work__item">Javascript</span>
        <span className="work__item">PHP</span>
        <span className="work__item">React</span>

      </div>

      <div className="work__container"></div>
    </section>
  )
}

export default Portfolio