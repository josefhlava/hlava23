import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import engLogo from '../../Images/united-kingdom.png';
import czeLogo from '../../Images/czech-republic.png';

function Navbar({ language, setLanguage }) {
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
                                Uvod
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/kdy&kde' className='nav-links' onClick={closeMobileMenu}>
                                Kdy & Kde
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/foto' className='nav-links' onClick={closeMobileMenu}>
                                Foto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dary' className='nav-links' onClick={closeMobileMenu}>
                                Dary
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/rsvp' className='nav-links' onClick={closeMobileMenu}>
                                RSVP
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