import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>

                <div className="contact-container glass">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Have a project in mind? Reach out to our global offices for a consultation.</p>

                        <div className="info-item">
                            <MapPin size={20} />
                            <div>
                                <strong>Global Headquarters (India)</strong>
                                <p>TOWER-C, Noida One, Sector 62, Noida, UP, India</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={20} />
                            <div>
                                <strong>Canada Office</strong>
                                <p>Toronto, Ontario, Canada</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone size={20} />
                            <p>+91-120-1234567</p>
                        </div>
                        <div className="info-item">
                            <Mail size={20} />
                            <p>sales@csii.in</p>
                        </div>
                    </div>

                    <form className="contact-form">
                        <h3>Send us a Message</h3>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Interested In</label>
                            <select>
                                <option>Select a Solution</option>
                                <option>Enterprise ERP</option>
                                <option>Citizen Services</option>
                                <option>TUBA Platform</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
