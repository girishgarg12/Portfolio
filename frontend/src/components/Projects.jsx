import React from 'react';
import skillCertsImg from '../assets/images/skillcerts_image.png';
import nexaMartImg from '../assets/images/nexamart_image.png';
import configScannerImg from '../assets/images/ConfigScanner_image.png';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">PORTFOLIO</h4>
                <h2 className="section-title">My <span className="highlight-blue">Projects</span></h2>
                <p className="section-desc">
                    A selection of my recent full-stack applications and technical projects.
                    Built with modern frameworks and robust backend architectures.
                </p>
            </div>

            <div className="projects-container">
                {/* Project 1: SkillCerts */}
                <div className="project-row">
                    <div className="project-image-wrapper">
                        <img src={skillCertsImg} alt="SkillCerts Preview" className="project-image-img" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">SkillCerts – Role-Based Learning</h3>
                        <p className="project-description">
                            MERN-based learning platform with JWT authentication and Role-Based Access Control (RBAC).
                        </p>
                        <ul className="project-features">
                            <li>Dedicated Learner/Instructor dashboards</li>
                            <li>Secure two-step Razorpay payment integration</li>
                            <li>Automated PDF certificate generation</li>
                        </ul>
                        <div className="tech-stack">
                            <span className="tech-pill">Node.js</span>
                            <span className="tech-pill">React</span>
                            <span className="tech-pill">MongoDB</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="https://skillcerts.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
                            <a href="https://github.com/girishgarg12/SkillCerts" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub <span className="arrow-icon">→</span></a>
                        </div>
                    </div>
                </div>

                {/* Project 2: Config Scanner */}
                <div className="project-row reverse-row">
                    <div className="project-image-wrapper">
                        <img src={configScannerImg} alt="Config Scanner Preview" className="project-image-img" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Config Scanner & Secrets Detector</h3>
                        <p className="project-description">
                            A Spring Boot DevOps security tool to detect exposed secrets and insecure configurations via static analysis.
                        </p>
                        <ul className="project-features">
                            <li>Supports multiple file types (JSON, YAML, etc.)</li>
                            <li>Recursive regex-based structure validation</li>
                            <li>Runs seamlessly via Docker containers</li>
                        </ul>
                        <div className="tech-stack">
                            <span className="tech-pill">Java</span>
                            <span className="tech-pill">Spring Boot</span>
                            <span className="tech-pill">Docker</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="https://github.com/girishgarg12/Config-and-Secret-Scanner" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub <span className="arrow-icon">→</span></a>
                        </div>
                    </div>
                </div>

                {/* Project 3: NexaMart */}
                <div className="project-row">
                    <div className="project-image-wrapper">
                        <img src={nexaMartImg} alt="NexaMart Preview" className="project-image-img" />
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">NexaMart – Marketing Platform</h3>
                        <p className="project-description">
                            Full-stack market directory supporting multi-category listings, seller onboarding,
                            and bulk CRUD operations.
                        </p>
                        <ul className="project-features">
                            <li>Strict session-based authentication with inactivity timeouts</li>
                            <li>Responsive modern UI structured with Tailwind CSS</li>
                            <li>Dynamic admin dashboards for streamlined control</li>
                        </ul>
                        <div className="tech-stack">
                            <span className="tech-pill">PHP</span>
                            <span className="tech-pill">MySQL</span>
                            <span className="tech-pill">Tailwind</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="https://nexamartstore.wuaze.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
                            <a href="https://github.com/girishgarg12/NexaMart" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub <span className="arrow-icon">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
