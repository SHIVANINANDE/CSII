import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">CSII</span>
          <span className="logo-sub">India</span>
        </div>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#platform">Platform</a>
          <a href="#contact" className="btn btn-primary btn-sm">Contact Us</a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#platform" onClick={() => setIsMobileMenuOpen(false)}>Platform</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
