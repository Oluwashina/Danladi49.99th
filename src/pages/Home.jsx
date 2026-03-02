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
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontStyle: 'italic', display: 'none' }}>DV 49.99th Celebration</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    We are thrilled to invite you to celebrate DV's spectacular 49.99th birthday in the vibrant city of Barcelona, Spain. A weekend of luxury, celebration, and unforgettable memories awaits.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <Link to="/itinerary" className="btn">View Itinerary</Link>
                    <Link to="/travel" className="btn btn-gold">Travel & Accommodation</Link>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="container section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <h2 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>FAQs</h2>
                <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

                    <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                        <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Can I attend the party with my kids(s)?</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>Yes.</p>
                    </div>

                    <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                        <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Can I bring a plus-one (partner, parent, etc.)?</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>Yes.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
