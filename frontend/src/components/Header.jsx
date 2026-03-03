import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Header.css';

const Header = () => {
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
                    <span>📞 +91-9466854145</span>
                    <span>✉ girishgarg52612@gmail.com</span>
                    <span>📍 Karnal, Haryana</span>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="main-nav">
                <div className="logo">
                    <span className="logo-icon">{'<'}</span>Girish<span className="logo-icon">{' />'}</span>
                </div>

                <ul className="nav-list">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#problem-solving">Problem Solving</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>

                <a href="#contact" className="btn-discuss">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
