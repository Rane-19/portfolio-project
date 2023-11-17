import React, { useState } from 'react';
import "./about.css";
import Image from "../../assets/ME.JPG";

const About = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isDesignAccordionOpen, setIsDesignAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleDesignAccordion = () => {
    setIsDesignAccordionOpen(!isDesignAccordionOpen);
  };

  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__info">
          <img src={Image} alt="" className="about__img" />
          <p className="about__description">I'm Lourane, blah blah blah</p>
        </div>

        <div className="about__data grid">
          <div className={`about__skills ${isAccordionOpen ? 'open' : ''}`}>
            <div className="skills__titles" onClick={toggleAccordion}>
              <button className="skills__subject">Development</button>
            </div>

            <div className="skills__content">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
              </div>
              {/* Add or remove as needed */}
            </div>
          </div>

          <div className={`about__skills ${isDesignAccordionOpen ? 'open' : ''}`}>
            <div className="skills__titles" onClick={toggleDesignAccordion}>
              <button className="skills__subject">Design</button>
            </div>

            <div className="skills__content">
              <div className="skills__titles">
                <h3 className="skills__name">Adobe Photoshop</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">Adobe XD</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">Adobe Illustrator</h3>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">Figma</h3>
              </div>
              {/* Add or remove as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
