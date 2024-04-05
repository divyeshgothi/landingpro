"use client"
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    // Function to toggle submenu
    const toggleSubmenu = (event) => {
        const submenu = event.currentTarget.querySelector('.subnav');
        submenu.classList.toggle('subnav-open');
    };

    return (
        <header className={`header-scn ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <div className="hdr-inner">
                <a href="#" className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </a>
                    <nav className={`menu ${isMenuOpen ? 'show' : ''}`}>
                        <ul>
                            <li className="dropdown">
                                {/* Call toggleSubmenu when clicking on the Services link */}
                                <a href="#" onClick={toggleSubmenu}>Demo</a>
                                <ul className="subnav"> {/* Initially hidden */}
                                    <li><a href="#">Services 1</a></li>
                                    <li><a href="#">Services 2</a></li>
                                    <li><a href="#">Services 3</a></li>
                                    <li><a href="#">Services 4</a></li>
                                    <li><a href="#">Services 5</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                {/* Call toggleSubmenu when clicking on the Services link */}
                                <a href="#" onClick={toggleSubmenu}>Pages</a>
                                <ul className="subnav"> {/* Initially hidden */}
                                    <li><a href="#">Services 1</a></li>
                                    <li><a href="#">Services 2</a></li>
                                    <li><a href="#">Services 3</a></li>
                                    <li><a href="#">Services 4</a></li>
                                    <li><a href="#">Services 5</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                {/* Call toggleSubmenu when clicking on the Services link */}
                                <a href="#" onClick={toggleSubmenu}>Shop</a>
                                <ul className="subnav"> {/* Initially hidden */}
                                    <li><a href="#">Services 1</a></li>
                                    <li><a href="#">Services 2</a></li>
                                    <li><a href="#">Services 3</a></li>
                                    <li><a href="#">Services 4</a></li>
                                    <li><a href="#">Services 5</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Portfolio</a>
                                <ul>
                                    <li><a href="#">Company 1</a></li>
                                    <li><a href="#">Company 2</a></li>
                                    <li><a href="#">Company 3</a></li>
                                    <li><a href="#">Company 4</a></li>
                                    <li><a href="#">Company 5</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Blog</a>
                                <ul>
                                    <li><a href="#">Company 1</a></li>
                                    <li><a href="#">Company 2</a></li>
                                    <li><a href="#">Company 3</a></li>
                                    <li><a href="#">Company 4</a></li>
                                    <li><a href="#">Company 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Doc</a></li>
                        </ul>
                    </nav>
                    <div className="hdr-right">
                        <a href="#" className="btn">Buy now</a>
                        <span className="mobile-toggle" onClick={toggleMenu}>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
