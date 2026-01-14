import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    <img src="/logo.jpg" alt="CSII Logo" />
                </div>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#platform" onClick={() => setMenuOpen(false)}>TUBA Platform</a>
                    <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-sm">Contact Us</a>
                </div>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
