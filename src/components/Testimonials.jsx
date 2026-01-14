import React from 'react';

const Testimonials = () => {
    return (
        <section className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '1rem' }}>"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>

                <div className="grid-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', lineHeight: 1 }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ddd' }}></div>
                                <div>
                                    <strong style={{ display: 'block', color: 'var(--secondary)' }}>John Doe</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Director, Smart City Project</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
