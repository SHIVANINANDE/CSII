import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <span className="hero-badge">CSII India</span>
                    <h1>Empowering Governance with <span className="highlight">Total Universal Automation</span></h1>
                    <p>
                        Experience the power of TUBA — The rapid application development platform delivering Zero Code, Zero Defect solutions for Governments and Enterprises globally.
                    </p>
                    <div className="hero-btns">
                        <a href="#platform" className="btn btn-primary">Explore Platform</a>
                        <a href="#contact" className="btn btn-outline">Book a Demo</a>
                    </div>
                </div>
                <div className="hero-image animate-fade-in delay-200">
                    {/* Placeholder for abstract tech visual or screenshot if available */}
                    <div className="abstract-shape">
                        <div className="circle c1"></div>
                        <div className="circle c2"></div>
                        <div className="glass-card">
                            <h3>3000+</h3>
                            <p>Global Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
