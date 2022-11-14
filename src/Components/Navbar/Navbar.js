import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import engLogo from '../../Images/united-kingdom.png';
import czeLogo from '../../Images/czech-republic.png';

function Navbar({ language, setLanguage }) {
    let content = {
        cs: {
            item1: "Úvod",
            item2: "Kdy&Kde",
            item3: "Dary",
            item4: "Registrace"
        },
        en: {
            item1: "About",
            item2: "When&Where",
            item3: "Gifts",
            item4: "RSVP"
        }
    };
    language === "cs" ? content = content.cs : content = content.en;

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const handleLangClick = () => setLanguage(() => language === "cs" ? "en" : "cs");
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        HLAVA2023
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/uvod' className='nav-links' onClick={closeMobileMenu}>
                                {content.item1}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/kdy&kde' className='nav-links' onClick={closeMobileMenu}>
                            {content.item2}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dary' className='nav-links' onClick={closeMobileMenu}>
                            {content.item3}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/rsvp' className='nav-links' onClick={closeMobileMenu}>
                            {content.item4}
                            </Link>
                        </li>
                        <li>
                            <div onClick={handleLangClick}>
                                <img className='lang-logo' src={language === "cs" ? engLogo : czeLogo} alt="flag" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;