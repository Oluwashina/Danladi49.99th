import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <img
                    src="/barcelona.png"
                    alt="Sunset over Barcelona"
                    className="hero-bg"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-subtitle animate-fade-in delay-100">JOIN US IN</span>
                    <h1 className="hero-title animate-fade-in delay-200">Barcelona</h1>
                    <p className="hero-date animate-fade-in delay-300">MAY 7–10, 2026</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container section text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>DV 49.99th Celebration</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    We are thrilled to invite you to celebrate DV's spectacular 49.99th birthday in the vibrant city of Barcelona, Spain. A weekend of luxury, celebration, and unforgettable memories awaits.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <Link to="/itinerary" className="btn">View Itinerary</Link>
                    <Link to="/travel" className="btn btn-gold">Travel & Accommodation</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
