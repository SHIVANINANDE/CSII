import React from 'react';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';

const WhyUs = () => {
    const reasons = [
        { icon: <Clock size={40} />, title: "Rapid Deployment", desc: "Our Zero Code platform cuts development time by up to 80%." },
        { icon: <Shield size={40} />, title: "Bank-Grade Security", desc: "ISO 27001 certified and CMMI Level 5 standards ensure your data is safe." },
        { icon: <Users size={40} />, title: "30+ Years Trust", desc: "Three decades of experience working with governments worldwide." },
        { icon: <CheckCircle size={40} />, title: "Proven Reliability", desc: "Zero Defect delivery record across thousands of implementations." }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Why Choose CSII?</h2>
                <div className="grid-4">
                    {reasons.map((reason, index) => (
                        <div key={index} style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {reason.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{reason.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
