import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-container" style={{ backgroundColor: '#0c0c0c' }}>
            <div className="section-header">
                <h4 className="section-subtitle">LET'S CONNECT</h4>
                <h2 className="section-title">Get In <span className="highlight-blue">Touch</span></h2>
            </div>

            <div className="section-content contact-container">
                <div className="contact-info">
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        I am actively exploring new full-stack opportunities.
                        Whether you have a question or just want to say hi, I will get back to you!
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> girishgarg52612@gmail.com</p>
                        <p><strong>Mobile:</strong> +91-9466854145</p>
                        <div className="social-links" style={{ marginTop: '2rem' }}>
                            <a href="https://www.linkedin.com/in/girish77" target="_blank" rel="noopener noreferrer" className="btn-sm" style={{ textDecoration: 'none' }}>LinkedIn</a>
                            <a href="https://github.com/girishgarg12" target="_blank" rel="noopener noreferrer" className="btn-sm" style={{ textDecoration: 'none' }}>GitHub</a>
                            <a href="https://leetcode.com/u/girish77/" target="_blank" rel="noopener noreferrer" className="btn-sm" style={{ textDecoration: 'none' }}>LeetCode</a>
                        </div>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Say Hello</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
