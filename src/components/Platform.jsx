import React from 'react';
import './Platform.css';
import { Layers, Database, Zap, Shield, Smartphone, Globe } from 'lucide-react';

const Platform = () => {
    const features = [
        { icon: <Zap size={32} />, title: "Near Zero Code", desc: "Rapid application development with minimal coding required, ensuring faster time-to-market." },
        { icon: <Database size={32} />, title: "Unified Master Data", desc: "A single, consolidated database for People, Property, and Assets across all modules." },
        { icon: <Layers size={32} />, title: "Configurable Engine", desc: "Rules-based configuration engine allowing flexibility without hard-coding." },
        { icon: <Shield size={32} />, title: "Secure & Scalable", desc: "Built on robust architecture ensuring data security (ISO 27001) and high scalability." },
        { icon: <Smartphone size={32} />, title: "Mobile First", desc: "Fully responsive designs ensuring accessibility for citizens and field staff on any device." },
        { icon: <Globe size={32} />, title: "Citizen Centric", desc: "Seamless public interfaces for application submission, tracking, and payments." },
    ];

    return (
        <section id="platform" className="section platform-section">
            <div className="container">
                <h2 className="section-title">The TUBA Platform</h2>
                <p className="platform-subtitle text-center">
                    Total Universal Business Automation — The Engine Behind the Excellence
                </p>

                <div className="platform-grid grid-3">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass">
                            <div className="icon-wrapper">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platform;
