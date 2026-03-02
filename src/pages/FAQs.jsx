import React from 'react';

const FAQs = () => {
    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
            <h1 className="page-title">FAQs</h1>
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
        </div>
    );
};

export default FAQs;
