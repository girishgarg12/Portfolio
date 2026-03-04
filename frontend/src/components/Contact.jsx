import React, { useState } from 'react';
import './Contact.css';
import profileImg from '../assets/images/Photo gg1.jpeg';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear the form
        setFormData({ name: '', email: '', message: '' });

        // Show success popup
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3500); // Popup disappears after 3.5 seconds
    };

    return (
        <section id="contact" className="section-container" style={{ backgroundColor: '#0a0a0a' }}>
            <div className="section-header">
                <h4 className="section-subtitle">LET'S CONNECT</h4>
                <h2 className="section-title">Get In <span className="highlight-blue">Touch</span></h2>
            </div>

            <div className="contact-grid">
                {/* Left Side: Profile Image & Info */}
                <div className="contact-left-col">
                    <div className="contact-image-wrapper">
                        <div className="contact-image-inner">
                            <img src={profileImg} alt="Girish Garg" className="contact-profile-img" />
                        </div>
                    </div>

                    <div className="contact-info-block">
                        <div className="contact-info-item">
                            <span className="contact-info-icon">📧</span>
                            <div>
                                <h5>Email</h5>
                                <p>girishgarg52612@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <span className="contact-info-icon">📱</span>
                            <div>
                                <h5>Mobile</h5>
                                <p>+91-9466854145</p>
                            </div>
                        </div>

                        <div className="contact-social-links" style={{ marginTop: '0.8rem' }}>
                            <a href="https://www.linkedin.com/in/girish77" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                LinkedIn
                            </a>
                            <a href="https://github.com/girishgarg12" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-right-col">
                    <div className="contact-form-container">
                        <h3>Send a Message</h3>
                        <p className="contact-desc">
                            Whether you want to collaborate on a project, discuss a DSA problem, or simply say Hello ,
                            I’d be happy to connect and start a conversation.
                        </p>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="contact-submit-btn" disabled={showSuccess}>
                                {showSuccess ? 'Sent Successfully!' : 'Send Message'}
                                {!showSuccess && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', marginLeft: '8px' }}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                            </button>
                        </form>

                        {/* Success Popup */}
                        <div className={`success-popup ${showSuccess ? 'show' : ''}`}>
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="success-text">
                                <h4>Message Received!</h4>
                                <p>Thanks for reaching out! I'll get back to you shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
