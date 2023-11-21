import React from 'react';
import "./contact.css";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Email from "../../assets/email.svg";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">
        Let's work together!</h2>

        <div className="contact__container grid">
          <div className="contact__link">
          {/* linkedin */}
          <a href="https://www.linkedin.com/in/louranesobrepena" >
          <img src={LinkedIn} alt="LinkedIn" id="linkedin" />
          </a>     

          {/* github */}
          <a href="https://github.com/Rane-19" >
            <img src={Github} alt="Github" id="github" />
          </a>     

          {/* email */}
          <a href="mailto:n.lourane.sobrepena@gmail.com" >
          <img src={Email} alt="Email" id="mail" />
          </a>        
        </div>
        </div>
    </section>
  )
}

export default Contact