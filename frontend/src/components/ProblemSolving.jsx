import React from 'react';
import './ProblemSolving.css';

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="section-container" style={{ backgroundColor: '#0a0a0a' }}>
            <div className="section-header">
                <h4 className="section-subtitle">LOGIC & ALGORITHMS</h4>
                <h2 className="section-title">Problem <span className="highlight-blue">Solving</span></h2>
                <p className="section-desc">
                    Passionate about competitive programming and optimizing logic.
                    Constantly challenging myself to improve algorithmic efficiency.
                </p>
            </div>

            <div className="stats-grid modern-stats">
                <div className="stat-card">
                    <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ffa116' }}>LC</div>
                    <div className="stat-value">400+</div>
                    <h3>LeetCode Problems</h3>
                    <p className="stat-label">Earned 200 Days Badge (2025)</p>
                </div>

                <div className="stat-card">
                    <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#5b4638' }}>CC</div>
                    <div className="stat-value">1425</div>
                    <h3>CodeChef Rating</h3>
                    <p className="stat-label">Competitive Programming</p>
                </div>

                <div className="stat-card">
                    <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#10b981' }}>🎯</div>
                    <div className="stat-value">Patent</div>
                    <h3>AI Seed Sowing Robot</h3>
                    <p className="stat-label">Automated sensing & control</p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
