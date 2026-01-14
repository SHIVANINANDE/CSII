import React from 'react';
import { Server, Shield, Users, Globe, Database, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Server size={32} />,
        title: "ERP Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
        icon: <Shield size={32} />,
        title: "Governance Services",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
        icon: <Users size={32} />,
        title: "Citizen Services",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        icon: <Globe size={32} />,
        title: "Digital Transformation",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
    },
    {
        icon: <Database size={32} />,
        title: "Data Automation",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile Solutions",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Our Solutions</h2>
                    <p className="section-desc">Innovative platforms designed for modern enterprises.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
