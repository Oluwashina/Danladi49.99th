import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <img
                    src="/barcelona3.png"
                    alt="Sunset over Barcelona"
                    className="hero-bg"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-subtitle animate-fade-in delay-100">JOIN DV IN</span>
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

            {/* Quick Stats Section */}
            <section className="container section" style={{ backgroundColor: 'white', padding: '6rem 0', borderTop: '1px solid var(--gray)', borderBottom: '1px solid var(--gray)' }}>
                <div className="stats-grid">
                    <div className="stat-card animate-fade-in delay-100">
                        <Calendar size={32} style={{ color: 'var(--gold)', marginBottom: '1rem' }} />
                        <h3>3 Days</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Of celebration & festivities</p>
                    </div>
                    <div className="stat-card animate-fade-in delay-200">
                        <MapPin size={32} style={{ color: 'var(--gold)', marginBottom: '1rem' }} />
                        <h3>Barcelona</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Mediterranean elegance</p>
                    </div>
                    <div className="stat-card animate-fade-in delay-300">
                        <Users size={32} style={{ color: 'var(--gold)', marginBottom: '1rem' }} />
                        <h3>Exclusive</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Curated guest experience</p>
                    </div>
                    <div className="stat-card animate-fade-in delay-400">
                        <Sparkles size={32} style={{ color: 'var(--gold)', marginBottom: '1rem' }} />
                        <h3>Luxury</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>First-class accommodations</p>
                    </div>
                </div>
            </section>

            {/* About Weekend Section */}
            <section className="container section">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontStyle: 'italic' }}>About the Weekend</h2>
                <div className="about-grid">
                    <div className="about-card animate-fade-in" style={{ backgroundColor: 'white', padding: '2.5rem', border: '1px solid var(--gray)', borderRadius: '0' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>A Celebration of Joy</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Join us for an unforgettable weekend celebrating DV's milestone birthday. This isn't just a party—it's three days of carefully planned experiences designed to create lasting memories with friends and family in one of Europe's most enchanting cities.
                        </p>
                    </div>

                    <div className="about-card animate-fade-in delay-200" style={{ backgroundColor: 'white', padding: '2.5rem', border: '1px solid var(--gray)', borderRadius: '0' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>Why Barcelona?</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Barcelona is a city of vibrant culture, stunning architecture, Mediterranean beaches, and world-class cuisine. The perfect backdrop for an extraordinary celebration. From Gaudí's artistic wonders to beachfront dining, every moment in Barcelona is magical.
                        </p>
                    </div>
                </div>
            </section>

            {/* Weekend Highlights Preview */}
            <section style={{ backgroundColor: '#f9f7f3', padding: '6rem 5%' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontStyle: 'italic' }}>Weekend Highlights</h2>
                    <div className="highlights-grid">
                        <div className="highlight-item animate-fade-in delay-100">
                            <div className="highlight-number">01</div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Welcome Celebration</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Kick off the weekend with an elegant welcome reception where guests reunite and the celebration begins.</p>
                        </div>

                        <div className="highlight-item animate-fade-in delay-200">
                            <div className="highlight-number">02</div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Curated Activities</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Experience Barcelona through carefully selected activities and experiences throughout the weekend.</p>
                        </div>

                        <div className="highlight-item animate-fade-in delay-300">
                            <div className="highlight-number">03</div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Gala Dinner</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>An unforgettable evening of fine dining, celebration, and toasts in honor of the guest of honor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container section text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontStyle: 'italic' }}>Ready for an Adventure?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Get all the details about travel, accommodations, itinerary, and everything you need to know.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <Link to="/itinerary" className="btn">Full Itinerary</Link>
                    <Link to="/travel" className="btn btn-gold">Travel Info</Link>
                    <Link to="/faqs" className="btn">FAQs</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
