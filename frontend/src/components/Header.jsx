import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        // Handle Scroll Depth for Sticky Header
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Scrollspy Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -50% 0px',
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sectionIds = ['home', 'about', 'projects', 'skills', 'problem-solving', 'certificates', 'resume', 'contact'];
        
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    // Helper for active link class
    const getActiveLinkClass = (id) => (activeSection === id ? 'active-link' : '');

    return (
        <header className="header-container">
            {/* Top bar with contact & social info */}
            <div className="top-bar">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/girish77" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://github.com/girishgarg12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://leetcode.com/u/GirishGarg/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
                </div>
                <div className="contact-info">
                    <span>✉ girishgarg52612@gmail.com</span>
                    <span>📍 Karnal, Haryana</span>
                </div>
            </div>

            {/* Main navigation */}
            <nav className={`main-nav ${isScrolled ? 'sticky-nav' : ''}`}>
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <span>G</span><span style={{ color: 'var(--primary-color)' }}>G</span>
                </div>

                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#projects" className={getActiveLinkClass('projects')} onClick={closeMenu}>Projects</a></li>
                    <li><a href="#skills" className={getActiveLinkClass('skills')} onClick={closeMenu}>Skills</a></li>
                    <li><a href="#problem-solving" className={getActiveLinkClass('problem-solving')} onClick={closeMenu}>Problem Solving</a></li>
                    <li><a href="#certificates" className={getActiveLinkClass('certificates')} onClick={closeMenu}>Achievements</a></li>
                    <li><a href="#resume" className={getActiveLinkClass('resume')} onClick={closeMenu}>Education</a></li>
                    <li><a href="#resume" className={getActiveLinkClass('resume')} onClick={closeMenu}>Resume</a></li>
                    <li className="mobile-only-link"><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                <a href="#contact" className="btn-discuss" onClick={closeMenu}>Contact</a>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </header>
    );
};

export default Header;
