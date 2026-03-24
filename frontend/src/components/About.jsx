import React, { useEffect, useState, useRef } from 'react';
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className={`about-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
            <div className="about-container">
                {/* Visual Area (Left) - NEW DEVELOPER IDENTITY CARD */}
                <div className="about-visual">
                    <div className="id-card-wrapper">
                        <div className="id-card">
                            <div className="card-shine"></div>
                            
                            {/* Top Section */}
                            <div className="card-header">
                                <div className="avatar-placeholder">
                                    <div className="avatar-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="header-info">
                                    <h3 className="card-name">Girish</h3>
                                    <p className="card-role">Backend Developer</p>
                                </div>
                            </div>

                            {/* Middle Section */}
                            <div className="card-body">
                                <p className="card-tagline">"Thinking in systems. Solving with logic. Building with purpose."</p>
                                
                                <div className="id-tech-stack">
                                    {["Java", "Spring Boot", "Node.js", "MongoDB", "REST APIs"].map((tech, i) => (
                                        <span key={i} className="id-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="card-footer">
                                <h5 className="footer-label">DSA</h5>
                                <span className="footer-pipe">|</span>
                                <h5 className="footer-label">System Design</h5>
                                <span className="footer-pipe">|</span>
                                <h5 className="footer-label">Problem Solving</h5>
                            </div>
                        </div>
                        
                        {/* Background Aura for Depth */}
                        <div className="card-aura"></div>
                    </div>
                </div>

                {/* Content Area (Right) */}
                <div className="about-content">
                    <div className="content-header">
                        <h4 className="section-subtitle">WHO AM I?</h4>
                        <h2 className="section-title">About <span className="highlight-blue">Me</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="about-text">
                        <p className="stagger-1 text-focus">
                            I am a passionate <span className="glow-word">Backend Developer</span> and perpetual learner based in Karnal, Haryana.
                            My journey is driven by a deep curiosity for high-performance systems and the artistic side of code.
                        </p>
                        <p className="stagger-2">
                            With specialized expertise in <span className="glow-word">Spring Boot</span> and <span className="glow-word">Node.js</span>,
                            I design robust <span className="glow-word">REST APIs</span> that serve as the backbone for modern web applications.
                            I believe in writing clean, scalable, and secure code that solves real-world engineering challenges.
                        </p>
                        <p className="stagger-3">
                            When I'm not architecting backends, you'll find me practicing <span className="glow-word">Data Structures & Algorithms </span>
                            on LeetCode or exploring the synergies between DevSecOps and modern development cycles.
                        </p>
                    </div>

                    <div className="about-bullets">
                        <div className="bullet-item stagger-4">
                            <span className="bullet-glow"></span>
                            <span className="bullet-text">Backend Development</span>
                        </div>
                        <div className="bullet-item stagger-5">
                            <span className="bullet-glow"></span>
                            <span className="bullet-text">System Design</span>
                        </div>
                        <div className="bullet-item stagger-6">
                            <span className="bullet-glow"></span>
                            <span className="bullet-text">REST APIs</span>
                        </div>
                        <div className="bullet-item stagger-7">
                            <span className="bullet-glow"></span>
                            <span className="bullet-text">Data Structures & Algorithms</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
