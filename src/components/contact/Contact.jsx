import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">
        Let's work together!</h2>

        <div className="contact__container grid">
          <div className="contact__info">
          </div>

          <button className="btn">Email</button>
          <button className="btn">Contact</button>
        </div>
    </section>
  )
}

export default Contact