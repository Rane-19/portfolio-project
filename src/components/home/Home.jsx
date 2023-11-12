import React from 'react';
import "./home.css";
import Me from "../../assets/logo.svg";
import ScrollDown from "./scrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="{Me" alt="" className="home__img" />
        <h1 className="home__name">Lourane Sobrepeña</h1>
        <span className="home__education">I'm a Front-End Developer</span>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
