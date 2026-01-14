import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--secondary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid-4" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>CSII</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                            Empowering governments and enterprises with world-class automation solutions for over 31 years.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#about" style={{ color: 'rgba(255,255,255,0.6)' }}>About Us</a></li>
                            <li><a href="#platform" style={{ color: 'rgba(255,255,255,0.6)' }}>TUBA Platform</a></li>
                            <li><a href="#contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Solutions</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Enterprise ERP</a></li>
                            <li><a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Citizen Services</a></li>
                            <li><a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Smart City</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Locations</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li style={{ color: 'rgba(255,255,255,0.6)' }}>India (Noida)</li>
                            <li style={{ color: 'rgba(255,255,255,0.6)' }}>Canada (Toronto)</li>
                            <li style={{ color: 'rgba(255,255,255,0.6)' }}>UAE (Dubai)</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    <p>&copy; {new Date().getFullYear()} Canadian Systems International Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
