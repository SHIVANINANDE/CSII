import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="quote-container">
                    <blockquote>
                        "Innovation is the ability to see change as an opportunity - not a threat."
                    </blockquote>
                </div>

                <h2 className="section-title">About CSII</h2>

                <div className="about-grid">
                    <div className="about-content">
                        <h3>Pioneering e-Governance Since 1993</h3>
                        <p>
                            Canadian Systems International Inc (CSII) is a global leader in providing High-End e-Governance and Enterprise Resource Planning (ERP) solutions. With over 31 years of trusted experience, we bridge the gap between complex government processes and citizen convenience.
                        </p>
                        <p>
                            Our mission is simple: To provide "Near Zero Code" technologies that empower organizations to deploy robust, scalable, and secure applications in record time. From our headquarters in Noida to our global offices in Toronto and Dubai, we are shaping the future of digital governance.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <h4>31+</h4>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <h4>3000+</h4>
                                <span>Happy Clients</span>
                            </div>
                            <div className="stat-item">
                                <h4>5</h4>
                                <span>Global Offices</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" className="rounded-img" />
                        <div className="pattern-dots"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
