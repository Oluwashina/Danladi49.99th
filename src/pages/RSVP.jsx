import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RSVP = () => {
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        attendance: '',
        bringGuest: '',
        guestName: '',
        guestDietary: '',
        dietary: '',
        hotelSelection: '',
        arrivalDate: '',
        departureDate: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Map hotel selection to readable name
        const hotelMap = {
            'hotel-arts': 'Hotel Arts Barcelona',
            'other': 'Other Hotel'
        };

        const hotelDisplay = hotelMap[formData.hotelSelection] || formData.hotelSelection;
        
        // Extract first name from full name
        const firstName = formData.fullName.split(' ')[0];

        const templateParams = {
            to_email: 'hello@dv4999.com',
            subject: `New RSVP from ${formData.fullName}`,
            from_email: formData.email,
            from_name: formData.fullName,
            attendance: formData.attendance,
            guest_name: formData.guestName || 'None',
            guest_dietary: formData.guestDietary || 'None',
            bring_guest: formData.bringGuest,
            mobile: formData.mobileNumber,
            dietary: formData.dietary || 'None',
            hotel: hotelDisplay,
            arrival: formData.arrivalDate,
            departure: formData.departureDate
        };

        // Confirmation email template params
        const confirmationParams = {
            to_email: formData.email,
            subject: `Your RSVP Confirmation for DV's 49.99th Birthday Celebration`,
            first_name: firstName,
            reply_to: 'hello@dv4999.com'
        };

        // Send admin email (blocking) - this is the critical one
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                console.log('Admin email sent:', response);
                setLoading(false);
                setSubmitted(true);

                // Fire confirmation email completely detached - don't block UI
                setTimeout(() => {
                    emailjs.send(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID, 
                        confirmationParams
                    ).catch(() => {}); // Silently fail - admin already has the RSVP
                }, 0);

                setTimeout(() => {
                    setFormData({
                        fullName: '',
                        email: '',
                        mobileNumber: '',
                        attendance: '',
                        bringGuest: '',
                        guestName: '',
                        guestDietary: '',
                        dietary: '',
                        hotelSelection: '',
                        arrivalDate: '',
                        departureDate: ''
                    });
                    setSubmitted(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Error sending RSVP email:', error);
                setLoading(false);
                alert('There was an error submitting your RSVP. Please try again.');
            });
    };

    if (submitted) {
        return (
            <div className="container section" style={{ paddingTop: '15rem', paddingBottom: '15rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <CheckCircle size={64} style={{ color: 'var(--gold)', marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Thank you for your RSVP.</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        We look forward to celebrating together in Barcelona.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        You will receive a confirmation email shortly.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container section animate-fade-in" style={{ paddingTop: '10rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(184, 154, 91, 0.2)' }}>
            <h1 className="page-title">RSVP</h1>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
               Please complete the form below to confirm your attendance. Kindly respond by March 20, 2026.
            </p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Full Name */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Full Name <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email Address */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Email Address <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="your.email@example.com"
                    />
                </div>

                {/* Mobile Number */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Mobile Number <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                {/* Will you attend? */}
                <div style={{ marginBottom: '2rem' }}>
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                        <legend style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem', display: 'block' }}>
                            Will you attend? <span style={{ color: 'var(--gold)' }}>*</span>
                        </legend>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="yes"
                                    checked={formData.attendance === 'yes'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                Yes
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="no"
                                    checked={formData.attendance === 'no'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                Regretfully No
                            </label>
                        </div>
                    </fieldset>
                </div>

                {/* Will you bring a guest? */}
                <div style={{ marginBottom: '2rem' }}>
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                        <legend style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem', display: 'block' }}>
                            Will you bring a guest? <span style={{ color: 'var(--gold)' }}>*</span>
                        </legend>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="bringGuest"
                                    value="yes"
                                    checked={formData.bringGuest === 'yes'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                Yes
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="bringGuest"
                                    value="no"
                                    checked={formData.bringGuest === 'no'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                No
                            </label>
                        </div>
                    </fieldset>
                </div>

                {/* Guest Name */}
                {formData.bringGuest === 'yes' && (
                    <>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                                Guest Name
                            </label>
                            <input
                                type="text"
                                name="guestName"
                                value={formData.guestName}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid var(--gold)',
                                    borderRadius: '0',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                                placeholder="Enter guest's full name"
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                                Guest Dietary Requirements
                            </label>
                            <textarea
                                name="guestDietary"
                                value={formData.guestDietary || ''}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid var(--gold)',
                                    borderRadius: '0',
                                    fontSize: '16px',
                                    boxSizing: 'border-box',
                                    minHeight: '80px',
                                    fontFamily: 'inherit'
                                }}
                                placeholder="E.g., vegetarian, vegan, allergies, etc."
                            />
                        </div>
                    </>
                )}

                {/* Dietary Requirements */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Dietary Requirements
                    </label>
                    <textarea
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box',
                            minHeight: '80px',
                            fontFamily: 'inherit'
                        }}
                        placeholder="E.g., vegetarian, vegan, allergies, etc."
                    />
                </div>

                {/* Hotel Selection */}
                <div style={{ marginBottom: '2rem' }}>
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                        <legend style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem', display: 'block' }}>
                            Hotel Selection <span style={{ color: 'var(--gold)' }}>*</span>
                        </legend>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="hotelSelection"
                                    value="hotel-arts"
                                    checked={formData.hotelSelection === 'hotel-arts'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                Hotel Arts Barcelona
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="hotelSelection"
                                    value="other"
                                    checked={formData.hotelSelection === 'other'}
                                    onChange={handleChange}
                                    required
                                    style={{ cursor: 'pointer' }}
                                />
                                Other
                            </label>
                        </div>
                    </fieldset>
                </div>

                {/* Arrival Date */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Arrival Date <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                    />
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'normal' }}>
                        Recommended arrival: Thursday before 15:00
                    </p>
                </div>

                {/* Departure Date */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                        Departure Date <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid var(--gold)',
                            borderRadius: '0',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                    />
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'normal' }}>
                        Recommended departure: Sunday after 12:00
                    </p>
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <button
                        type="submit"
                        className="btn btn-gold"
                        disabled={loading}
                        style={{ 
                            minWidth: '200px',
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Submitting...' : 'Confirm RSVP'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RSVP;
