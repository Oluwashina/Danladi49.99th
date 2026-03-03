import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <>
            <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src={logo} alt="DV 49.99th Barcelona" style={{ height: 'auto', width: '60px',}} />
                </Link>
                <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
                    <span className="hamburger-line" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                    <span className="hamburger-line" style={{ opacity: isOpen ? 0 : 1 }}></span>
                    <span className="hamburger-line" style={{ transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
                </button>
            </header>

            <nav className={`nav-overlay ${isOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/itinerary" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Itinerary</NavLink>
                    </li>
                    <li>
                        <NavLink to="/travel" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Travel &amp; Stay</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faqs" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>FAQs</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
