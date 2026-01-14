import React, { useState } from 'react';
import './Solutions.css';

const Solutions = () => {
    const [activeTab, setActiveTab] = useState('citizen');

    const citizenSolutions = [
        "Building Plan Approval", "Property Tax Management", "Birth & Death Certificates",
        "Marriage Registration", "Public Grievance Redressal", "Water Tax Management",
        "Trade License System", "RTI Management", "Court Case Management (CCMS)",
        "Property Mutation", "Lease Property", "Unauthorized Construction"
    ];

    const erpSolutions = [
        "Human Resource Management (HRMS)", "Finance & Payroll", "Project Management",
        "Inventory & Purchase", "Asset Management", "File Tracking System",
        "Tender Management", "Vehicle Management", "Audit & Inspection",
        "Legal Case Management", "Vigilance Management", "Meeting Management"
    ];

    return (
        <section id="solutions" className="section solutions-section">
            <div className="container">
                <div className="quote-container text-center">
                    <p className="quote">"Technology is best when it brings people together."</p>
                </div>

                <h2 className="section-title">Our Solutions</h2>

                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'citizen' ? 'active' : ''}`}
                        onClick={() => setActiveTab('citizen')}
                    >
                        Citizen Services
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'erp' ? 'active' : ''}`}
                        onClick={() => setActiveTab('erp')}
                    >
                        Enterprise ERP
                    </button>
                </div>

                <div className="solutions-grid grid-3 animate-fade-in">
                    {(activeTab === 'citizen' ? citizenSolutions : erpSolutions).map((item, index) => (
                        <div key={index} className="solution-card">
                            <div className="card-indicator"></div>
                            <h4>{item}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
