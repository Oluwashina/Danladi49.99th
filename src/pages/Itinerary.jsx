import React from 'react';

const Itinerary = () => {
    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem' }}>
            <h1 className="page-title">Weekend Schedule</h1>

            <div className="timeline">
                {/* Thursday */}
                <div className="timeline-item animate-fade-in delay-100">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Thursday, May 7th</span>
                    <h3 className="timeline-title">Arrivals & Welcome Party</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>The Welcome Party</h4>
                            <p><strong>Time:</strong> 17:00</p>
                            <p><strong>Venue:</strong> Palauet d'Orsà</p>
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
                    <span className="timeline-date">Friday, May 8th</span>
                    <h3 className="timeline-title">Exploring & Luxury Experience</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Morning: Exploring Barcelona</h4>
                            <p>Explore Barcelona at your own pace or through curated private tours.</p>
                            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Private transfers available upon request from the hotel.
                            </p>
                        </div>
                        <div className="event-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray)' }}>
                            <h4>Evening: The Catamaran Luxury Experience</h4>
                            <p><strong>Time:</strong> 16:20</p>
                            <p><strong>Venue:</strong> The Catamaran</p>
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
                    <span className="timeline-date">Saturday, May 9th</span>
                    <h3 className="timeline-title">The Grand Finale</h3>
                    <div className="event-details">
                        <div className="event-block">
                            <h4>Morning: Wellness Activities</h4>
                            <p><strong>Time:</strong> TBC</p>
                            <p><strong>Venue:</strong> Hotel's BeachFront Area</p>
                        </div>
                        <div className="event-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray)' }}>
                            <h4>Evening: The Grand Celebration</h4>
                            <p><strong>Time:</strong> 17:00</p>
                            <p><strong>Venue:</strong> The Sea Garden</p>
                            <p><strong>Dress Code:</strong> Party Cocktail</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                * Shuttle buses will be provided from the hotel to the venue and back.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sunday */}
                <div className="timeline-item animate-fade-in delay-400">
                    <div className="timeline-dot"></div>
                    <span className="timeline-date">Sunday, May 10th</span>
                    <h3 className="timeline-title">Farewell</h3>
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
