import React from 'react';
import './pages.css';
import Sidebar from '../sidebar/sidebar.jsx';
import Image from "../../assets/pokemon-game-page.png";
import Home from "../../components/home/Home.jsx";



const Games = () => {
    return (
        <>
        {/* <Sidebar /> */}
        <button className="page-button">
            <a href="#home">Go back</a>
        </button>
    <section classname="page__container section" id="page">
        <div classname="page__info">
            <h2>Pokemon Matching Game</h2>
                <img src={Image} alt="" className="page_img" />
                <a href="https://louranes.ca/matchthatpokemon/">
                    <button classname="skills_subject" >Go to live site</button>
                </a>

        <p classname="page__description">This is project is called Pokemon Matching Game. This project is made mainy by HTML5, CSS3, and JavaScript. This is also the first project that I have worked with a partner.</p>
        </div>

    </section>
        </>
    );
}

export default Games;
