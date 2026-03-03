import React from 'react';
import './Resume.css'; // Just use standard CSS for now if empty

const Resume = () => {
    return (
        <section id="resume" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">HISTORY</h4>
                <h2 className="section-title">Education & <span className="highlight-blue">Experience</span></h2>
            </div>

            <div className="resume-grid">
                {/* Education Timeline */}
                <div className="resume-column">
                    <h3>Education</h3>

                    <div className="resume-item">
                        <div className="resume-date">Aug 2023 – Present</div>
                        <h4>B.Tech – Computer Science</h4>
                        <p>Lovely Professional University</p>
                        <p className="resume-desc">CGPA: 8.27</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-date">Apr 2021 – Jul 2022</div>
                        <h4>Intermediate (12th Grade)</h4>
                        <p>Holy Heart High School, Haryana</p>
                        <p className="resume-desc">Percentage: 81.8%</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-date">Mar 2019 – Jun 2020</div>
                        <h4>Matriculation (10th Grade)</h4>
                        <p>Indus Public School, Haryana</p>
                        <p className="resume-desc">Percentage: 84.4%</p>
                    </div>
                </div>

                {/* Training & Certs Timeline */}
                <div className="resume-column">
                    <h3>Training & Certifications</h3>

                    <div className="resume-item">
                        <div className="resume-date">Jun 2025 – Jul 2025</div>
                        <h4>Java Spring Boot Training</h4>
                        <p>Programming Pathshala</p>
                        <p className="resume-desc">
                            Intensive backend training focused on RESTful APIs, Spring MVC, Spring Security,
                            and building production-ready server-side applications.
                        </p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-date">Certification</div>
                        <h4>Generative AI Apps & Solutions</h4>
                        <p>Infosys Springboard</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-date">Certification</div>
                        <h4>Cloud Computing</h4>
                        <p>NPTEL</p>
                    </div>
                </div>
            </div>

            <div className="resume-download" style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="#" className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '30px' }}>
                    Download Full Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
