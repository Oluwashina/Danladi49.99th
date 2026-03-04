import React from 'react';

const Itinerary = () => {
    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem' }}>
            <h1 className="page-title">Weekend Schedule</h1>

            <div className="timeline">
                {/* Thursday */}
                <div className="timeline-item animate-fade-in delay-100">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Thursday, May 7<sup>th</sup></span>
                    <h3 className="timeline-title">Arrivals & Welcome Party</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Arrivals</h4>
                            <p><strong>Suggested arrival before:</strong> 15:00</p>
                        </div>
                        <div className="event-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray)' }}>
                            <h4>Flamenco Welcome Party</h4>
                            <p><strong>Time:</strong> 17:00</p>
                            <p><strong>Venue:</strong> Palauet d'Orsà, Barcelona Spain</p>
                            <p><strong>Dress Code:</strong> All Black</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Shuttle buses will be provided from the hotel to the venue and back.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Friday */}
                <div className="timeline-item animate-fade-in delay-200">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Friday, May 8<sup>th</sup></span>
                    <h3 className="timeline-title">Barcelona Adventures</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Morning: Barcelona at Your Pace</h4>
                            <p>Explore Barcelona at your own pace or join optional private tours.</p>
                            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Private transfers available upon request from the hotel.
                            </p>
                        </div>
                        <div className="event-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray)' }}>
                            <h4>Evening: Barcelona by Sea</h4>
                            <p><strong>Time:</strong> 16:20</p>
                            <p><strong>Venue:</strong> The Catamaran, Barcelona</p>
                            <p><strong>Dress Code:</strong> Shades of Blue</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Shuttle buses will be provided from the hotel to the port and back.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Saturday */}
                <div className="timeline-item animate-fade-in delay-300">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Saturday, May 9<sup>th</sup></span>
                    <h3 className="timeline-title">The Grand Finale</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Morning: 49.99 Minutes of Wellness</h4>
                            <p><strong>Time:</strong> TBC</p>
                            <p><strong>Venue:</strong> Hotel's Beachfront Area</p>
                        </div>
                        <div className="event-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray)' }}>
                            <h4>Evening: Birthday Dinner and Celebration</h4>
                            <p><strong>Time:</strong> 17:00</p>
                            <p><strong>Venue:</strong> The Sea Garden, Ciutat Vella, Barcelona</p>
                            <p><strong>Dress Code:</strong> Cocktail Elegant (No tie required)</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Shuttle buses will be provided from the hotel to the venue and back.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sunday */}
                <div className="timeline-item animate-fade-in delay-400">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Sunday, May 10<sup>th</sup></span>
                    <h3 className="timeline-title">Farewells and Departure</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Departure</h4>
                            <p>Safe travels! We recommend arranging transportation to the airport in advance based on your flight schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itinerary;
