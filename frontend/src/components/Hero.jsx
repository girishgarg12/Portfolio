import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/photogg2.jpeg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background decorations */}
            <div className="dec-circle"></div>
            <div className="dec-star">✦</div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="font-light" style={{ fontSize: '2rem' }}>Hi, I’m your Developer.</span><br />
                    <span className="highlight-blue">Girish Garg</span>
                    <span className="font-light" style={{ fontSize: '1.2rem', display: 'block', marginTop: '0.5rem', lineHeight: '1.4' }}>
                        Full-Stack Developer crafting scalable web applications and secure backend systems.
                    </span>
                </h1>
                <p className="hero-subtitle">
                    <Typewriter
                        words={[
                            'I specialize in Java, Spring Boot, Node.js, and React with a strong focus on problem solving and data structures.',
                            'I enjoy designing clean APIs, building secure platforms, and solving complex engineering challenges with efficient, performance-driven solutions.'
                        ]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={25}
                        deleteSpeed={15}
                        delaySpeed={2500}
                    />
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">Get In Touch</a>
                    <a href="#projects" className="btn-link">
                        View Projects <span className="arrow-icon">→</span>
                    </a>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <div className="hero-image-bg-box"></div>
                <div className="hero-image-container">
                    <div className="dec-dots"></div>
                    <div className="image-frame">
                        <img src={profilePic} alt="Girish Garg" className="profile-img" />
                    </div>
                    <div className="mock-badge">✦ Problem Solver & Developer ✦</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
