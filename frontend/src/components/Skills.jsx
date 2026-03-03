import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">EXPERTISE</h4>
                <h2 className="section-title">My <span className="highlight-blue">Technical Skills</span></h2>
                <p className="section-desc">
                    Proficient in a diverse range of modern programming languages, frameworks, and databases.
                    Strong focus on backend architecture, API design, and problem-solving.
                </p>
            </div>

            <div className="speciality-grid">
                <div className="speciality-card">
                    <div className="icon-wrapper">
                        <span className="icon">{'</>'}</span>
                    </div>
                    <h3>Languages</h3>
                    <div className="divider"></div>
                    <p>
                        Java, JavaScript, C, C++, PHP
                    </p>
                </div>

                <div className="speciality-card">
                    <div className="icon-wrapper">
                        <span className="icon">⚡</span>
                    </div>
                    <h3>Frameworks & Libraries</h3>
                    <div className="divider"></div>
                    <p>
                        NodeJS, ExpressJS, React, Spring Boot, HTML5, Tailwind CSS, Socket.IO
                    </p>
                </div>

                <div className="speciality-card">
                    <div className="icon-wrapper">
                        <span className="icon">🗄️</span>
                    </div>
                    <h3>Databases & Tools</h3>
                    <div className="divider"></div>
                    <p>
                        MySQL, MongoDB, Git, GitHub, Postman, Maven, Docker
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
