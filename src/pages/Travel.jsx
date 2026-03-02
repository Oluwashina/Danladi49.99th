import React from 'react';
import { Plane, Building } from 'lucide-react';

const Travel = () => {
    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem' }}>
            <h1 className="page-title">Travel & Accommodation</h1>

            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                We have secured a room block and coordinated details to ensure your journey to Barcelona is as seamless as possible.
            </p>

            <div className="travel-grid">
                {/* Flights */}
                <div className="travel-card animate-fade-in delay-100">
                    <Plane size={48} strokeWidth={1} />
                    <h3>Flights</h3>
                    <p>
                        We recommend flying into <strong>Josep Tarradellas Barcelona-El Prat Airport (BCN)</strong>, which is the only international airport in Barcelona, Spain.
                    </p>
                    <p>
                        Please consider booking your flights early to secure the best rates. Upon arrival, taxis and Ubers are readily available for your convenient transportation to the hotel.
                    </p>
                    <a href="https://www.google.com/flights" target="_blank" rel="noreferrer" className="btn">Search Flights</a>
                </div>

                {/* Hotels */}
                <div className="travel-card animate-fade-in delay-200">
                    <Building size={48} strokeWidth={1} />
                    <h3>Accommodation</h3>
                    <p>
                        All guests are kindly encouraged to book their stay at <strong>Hotel Arts Barcelona</strong>, where a room block has been reserved for our group.
                    </p>
                    <p>
                        Transportation will be provided to and from this hotel for your convenience throughout the celebration weekend.
                    </p>
                    <a href="https://www.hotelartsbarcelona.com/en/" target="_blank" rel="noreferrer" className="btn btn-gold">Book Hotel</a>
                </div>
            </div>
        </div>
    );
};

export default Travel;
