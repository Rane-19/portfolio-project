import React from 'react';
import './pages.css';
import Sidebar from '../sidebar/sidebar.jsx';



const Games = () => {
    return (
        <>
        <Sidebar />
        

        <section className="portfolio container section" id='portfolio'>
            <h2 className="section__title">JavaScript Pokemon Matching Game</h2>

            <div className="about__container grid">
                <div className="about__info">
                    <p className="about__description">I'm Lourane, blah blah blah</p>
                </div>

                <div className="about__data grid">
                </div>
            </div>
        </section>
        </>
    );
}

export default Games;
