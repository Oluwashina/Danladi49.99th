import React from 'react';

const FAQs = () => {
    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(184, 154, 91, 0.2)' }}>
            <h1 className="page-title">FAQs</h1>
            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Are children welcome?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Yes.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>May I bring a guest?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Yes. Please indicate in your RSVP.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>What are the evening dress codes?</h4>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Thursday</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>All Black</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Friday</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Shades of Blue</p>
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Saturday</p>
                        <p style={{ color: 'var(--text-secondary)' }}>Cocktail Elegant</p>
                    </div>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Will transportation be provided?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Yes. Shuttle details will be confirmed closer to the weekend.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>What will the weather be like?</h4>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Barcelona in May typically ranges between 16–23°C (60–73°F).</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Evenings near the water can be cool, so a light jacket is recommended.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>When is the RSVP deadline?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>March 20, 2026.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--gray)', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>What airport should I fly into?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Barcelona–El Prat Airport (BCN) is the city's main international airport and is approximately 20 minutes from the primary hotel.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Who can I contact with questions?</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        <a href="mailto:hello@dv4999.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>hello@dv4999.com</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FAQs;
