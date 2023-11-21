import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/LOGO.svg";


const Sidebar = () => {
    return (
        <>
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="icon-envelope-open"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="footer"></span>
            </div>
        </aside>

        <div className="nav__toggle">
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar