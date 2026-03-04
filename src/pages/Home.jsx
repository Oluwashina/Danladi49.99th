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
               <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontStyle: 'normal' }}>DV 49.99<sup>th</sup> Celebration</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    We are thrilled to invite you to celebrate DV's 49.99<sup>th</sup> birthday in the vibrant city of Barcelona, Spain. A weekend of celebration and unforgettable memories awaits.
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
                        <h3>Together</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>With friends and family</p>
                    </div>

                </div>
            </section>

            {/* About Weekend Section */}
            <section className="container section">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontStyle: 'italic' }}>About the Weekend</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '3rem', border: '1px solid var(--gray)' }}>
                
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>Why Barcelona?</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        Barcelona holds a special place in my heart. Years of marathons across Spain brought me back here—where I ran, fell short of my goal by just four seconds, and made a memory I'll never forget.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        I'm not coming back to chase the clock. This time, I'm returning to celebrate a milestone surrounded by the people who make every finish line meaningful—my family and friends.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8',marginBottom: '1.5rem' }}>
                        Barcelona gave me a reason to push harder. Now I want it to be the place where we celebrate together.
                    </p>
                     <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        Join us for an unforgettable weekend celebrating DV's milestone birthday. This isn't just a party—it's three days of carefully planned experiences designed to create lasting memories with friends and family in one of Europe's most enchanting cities.
                    </p>
                </div>
            </section>


            {/* The Weekend Section */}
            <section style={{ backgroundColor: '#f9f7f3', padding: '5rem 5%' }}>
                <div className="container">

                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>Weekend Highlights</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Thursday */}
                    <div className="animate-fade-in" style={{ 
                        backgroundColor: 'white', 
                        padding: '2.5rem', 
                        border: '1px solid var(--gray)', 
                        borderRadius: '0',
                        borderTop: '4px solid var(--gold)'
                    }}>
                        <h3 style={{ 
                            fontSize: '1.3rem', 
                            marginBottom: '2rem', 
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>Thursday</h3>
                        
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'var(--gold)', 
                                fontWeight: 600, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                            }}>Evening</p>
                            <h4 style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '0.75rem', 
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>Flamenco Welcome Party</h4>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>An evening of music, tapas, and reunion.</p>
                        </div>
                    </div>

                    {/* Friday */}
                    <div className="animate-fade-in delay-100" style={{ 
                        backgroundColor: 'white', 
                        padding: '2.5rem', 
                        border: '1px solid var(--gray)', 
                        borderRadius: '0',
                        borderTop: '4px solid var(--gold)'
                    }}>
                        <h3 style={{ 
                            fontSize: '1.3rem', 
                            marginBottom: '2rem', 
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>Friday</h3>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'var(--gold)', 
                                fontWeight: 600, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                            }}>Morning</p>
                            <h4 style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '0.75rem', 
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>Barcelona at Your Pace</h4>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>Explore the city or join curated experiences.</p>
                        </div>

                        <div style={{ borderTop: '1px solid var(--gray)', paddingTop: '2rem' }}>
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'var(--gold)', 
                                fontWeight: 600, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                            }}>Evening</p>
                            <h4 style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '0.75rem', 
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>Barcelona by Sea</h4>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>An enchanting evening on the Mediterranean.</p>
                        </div>
                    </div>

                    {/* Saturday */}
                    <div className="animate-fade-in delay-200" style={{ 
                        backgroundColor: 'white', 
                        padding: '2.5rem', 
                        border: '1px solid var(--gray)', 
                        borderRadius: '0',
                        borderTop: '4px solid var(--gold)'
                    }}>
                        <h3 style={{ 
                            fontSize: '1.3rem', 
                            marginBottom: '2rem', 
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>Saturday</h3>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'var(--gold)', 
                                fontWeight: 600, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                            }}>Morning</p>
                            <h4 style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '0.75rem', 
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>49.99 Minutes of Wellness</h4>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>Rejuvenate with wellness and relaxation.</p>
                        </div>

                        <div style={{ borderTop: '1px solid var(--gray)', paddingTop: '2rem' }}>
                            <p style={{ 
                                fontSize: '0.85rem', 
                                color: 'var(--gold)', 
                                fontWeight: 600, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                            }}>Evening</p>
                            <h4 style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '0.75rem', 
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>Birthday Dinner & Celebration</h4>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>An elegant evening to close the weekend.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Personal Note Section */}
            <section className="container section" style={{ backgroundColor: '#f9f7f3', padding: '6rem 5%', textAlign: 'center' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        This weekend is about celebration and the people who have shaped the journey.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Thank you for being part of it.
                    </p>
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
