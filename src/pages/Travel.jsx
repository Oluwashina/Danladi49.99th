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
                        We recommend flying into <strong>Josep Tarradellas Barcelona-El Prat Airport</strong>, which is the only international airport in Barcelona, Spain. Please consider booking your flights early to secure the best rates. Upon arrival, taxis and Ubers are readily available for your convenient transportation to the hotel.
                    </p>
                    <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '0.9rem' }}>
                        <p><strong>Transfer time to hotel:</strong> approximately 20 minutes</p>
                        <p style={{ marginTop: '0.75rem' }}><strong>Recommended arrival:</strong> Thursday before 15:00</p>
                        <p style={{ marginTop: '0.75rem' }}><strong>Recommended departure:</strong> Sunday anytime</p>
                    </div>
                    <a href="https://www.google.com/flights" target="_blank" rel="noreferrer" className="btn">Search Flights</a>
                </div>

                {/* Hotels */}
                <div className="travel-card animate-fade-in delay-200">
                    <Building size={48} strokeWidth={1} />
                    <h3>Accommodation</h3>
                    <p>
                        A room block has been secured at <strong>Hotel Arts Barcelona</strong>, which serves as the primary hotel. Scheduled shuttles will depart from this hotel for all hosted events. Alternative accommodation options are also available.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <a href="https://www.marriott.com/en-gb/event-reservations/reservation-link.mi?id=1768927128258&key=GRP&app=resvlink&_branch_match_id=1554240861956515237&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5mYWlkbmhkYWRqYVadmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqkW1wYlpiUSYA2ADg8WAAAAA%3D" target="_blank" rel="noreferrer" className="btn btn-gold">Book Hotel Arts</a>
                        <a className="btn">Book Optional Hotels</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;
