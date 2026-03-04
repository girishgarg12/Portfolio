import React from 'react';
import './Resume.css';
import resumePdf from '../assets/documents/Girish_Garg_Resume.pdf';
import resumeDocx from '../assets/documents/Girish_Garg_Resume.docx';
import resumePreviewImg from '../assets/images/preview_image_resume.png';

const Resume = () => {
    return (
        <section id="resume" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">HISTORY</h4>
                <h2 className="section-title">Education & <span className="highlight-blue">Resume</span></h2>
            </div>

            <div className="resume-grid">
                {/* TIMELINE COLUMN */}
                <div className="resume-timeline-col">
                    {/* Education */}
                    <h3 className="timeline-heading">Education</h3>
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

                    <div className="resume-item" style={{ borderLeftColor: 'transparent', paddingBottom: 0 }}>
                        <div className="resume-date">Mar 2019 – Jun 2020</div>
                        <h4>Matriculation (10th Grade)</h4>
                        <p>Indus Public School, Haryana</p>
                        <p className="resume-desc">Percentage: 84.4%</p>
                    </div>
                </div>

                {/* PREVIEW & DOWNLOAD COLUMN */}
                <div className="resume-preview-col">
                    <div className="resume-card-container">

                        {/* Interactive Document Preview */}
                        <div className="resume-doc-preview">
                            <img src={resumePreviewImg} alt="Resume Preview" className="doc-image-bg" />

                            <div className="preview-overlay">
                                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="preview-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    View Document
                                </a>
                            </div>
                        </div>

                        {/* Download Options */}
                        <div className="resume-download-actions">
                            <h5>Download Resume</h5>
                            <p className="download-hint">Choose your preferred format</p>

                            <div className="download-btn-group">
                                <a href={resumePdf} download="Girish_Garg_Resume.pdf" className="dl-btn dl-pdf">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    PDF Format
                                </a>
                                <a href={resumeDocx} download="Girish_Garg_Resume.docx" className="dl-btn dl-docx">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10 13l4 4"></path><path d="M14 13l-4 4"></path></svg>
                                    DOCX Format
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Resume;
