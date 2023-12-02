import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav } from '../../data/Data';

const Header = () => {
    // Sticky Header Code
    const [isActiveSticky, setIsActiveSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setIsActiveSticky(true): setIsActiveSticky(false); 
        }); 
    }); 
    return (
        <>
            <header className={`header ${isActiveSticky ? 'fixed-header' : ""}`} id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand logo" to="/"><img src="./images/logo.png" alt=""/></Link>
                        <button className="navbar-toggler header-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span id="hiddenNav"><i className="las la-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-menu ms-auto align-items-lg-center">
                                {
                                    nav.map((list, index) => (
                                        <li key={index} className="nav-item">
                                            <NavLink to={list.path} 
                                            className={`nav-link ${list.isActive ? 'active' : ''}`} aria-current="page">{list.text}</NavLink>
                              
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>  
        </>
    );
};

export default Header;

