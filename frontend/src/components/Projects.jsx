import React from 'react';
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

            <div className="projects-grid">
                {/* Project 1 */}
                <div className="project-card modern-card">
                    <div className="project-image-placeholder">
                        <span>🏷️ SkillCerts</span>
                    </div>
                    <div className="project-info">
                        <h3>SkillCerts – Role-Based Learning</h3>
                        <p>
                            MERN-based learning platform with JWT authentication and Role-Based Access Control (RBAC).
                            Features dedicated Learner/Instructor dashboards, secure two-step Razorpay payment integration,
                            and automated PDF certificate generation.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-pill">Node.js</span>
                            <span className="tech-pill">React</span>
                            <span className="tech-pill">MongoDB</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="#" className="btn-sm">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card modern-card">
                    <div className="project-image-placeholder">
                        <span>🛡️ Config Scanner</span>
                    </div>
                    <div className="project-info">
                        <h3>Config Scanner & Secrets Detector</h3>
                        <p>
                            A Spring Boot DevOps security tool to detect exposed secrets and insecure configurations via static analysis.
                            Supports multiple file types with recursive regex-based JSON/YAML validation and runs seamlessly via Docker containers.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-pill">Java</span>
                            <span className="tech-pill">Spring Boot</span>
                            <span className="tech-pill">Docker</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="#" className="btn-sm">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card modern-card">
                    <div className="project-image-placeholder">
                        <span>🛒 NexaMart</span>
                    </div>
                    <div className="project-info">
                        <h3>NexaMart – Marketing Platform</h3>
                        <p>
                            Full-stack market directory supporting multi-category listings, seller onboarding,
                            and bulk CRUD operations. Implements strict session-based authentication with
                            inactivity timeouts and responsive Tailwind CSS layout.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-pill">PHP</span>
                            <span className="tech-pill">MySQL</span>
                            <span className="tech-pill">Tailwind</span>
                        </div>
                        <div className="project-links mt-4">
                            <a href="#" className="btn-sm">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
