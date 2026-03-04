import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="category-icon-svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            skills: [
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="category-icon-svg">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
            ),
            skills: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
            ]
        },
        {
            title: "Databases & Tools",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="category-icon-svg">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            ),
            skills: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
            ]
        }
    ];

    const proofOfSkills = [
        {
            title: "Highlights",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            proofs: [
                "Achieved 3★ in Java on HackerRank",
                "Solved 500+ DSA problems using Java and C++",
                "Implemented JavaScript across multiple full-stack projects"
            ]
        },
        {
            title: "Practical Implementation",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
            ),
            proofs: [
                "Completed 2-month Spring Boot backend training from Programming Pathshala (certificate link)",
                "Built full-stack applications using React, Node.js, Express, MongoDB, and Spring Boot",
                "Implemented these technologies in projects such as SkillCerts Learning Platform and Config Scanner DevSecOps Tool",
                "Used Git, Docker, and Postman for version control, containerization, and API testing"
            ]
        }
    ];

    return (
        <section id="skills" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">EXPERTISE</h4>
                <h2 className="section-title">Technical <span className="highlight-blue">Skills</span></h2>
                <p className="section-desc">
                    These skills are backed by real projects, extensive coding practice, and proven problem-solving achievements rather than just being a list of technologies.
                </p>
            </div>

            <div className="skills-main-layout">
                {/* Part 1: Tech Stack Grid */}
                <div className="skills-left-panel">
                    <h3 className="panel-heading">Tech Stack</h3>
                    <div className="tech-stack-container">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="tech-category-card">
                                <div className="tech-category-header">
                                    <div className="icon-box">
                                        {category.icon}
                                    </div>
                                    <h4 className="category-title">{category.title}</h4>
                                </div>
                                <div className="skills-chip-group">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="skill-chip">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className={`skill-icon-img ${skill.invertDark ? 'invert-dark' : ''}`}
                                            />
                                            <span className="skill-chip-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Part 2: Skills in Action */}
                <div className="skills-right-panel">
                    <h3 className="panel-heading">Skills in Action</h3>
                    <div className="proof-cards-container">
                        {proofOfSkills.map((proof, idx) => (
                            <div key={idx} className="proof-card">
                                <div className="proof-card-header">
                                    <div className="proof-icon-box">
                                        {proof.icon}
                                    </div>
                                    <h4 className="proof-card-title">{proof.title}</h4>
                                </div>
                                <ul className="proof-list">
                                    {proof.proofs.map((item, pIdx) => (
                                        <li key={pIdx} className="proof-list-item">
                                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="proof-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="global-cta-container">
                <a href="https://github.com/girishgarg12" target="_blank" rel="noopener noreferrer" className="proof-cta-link">
                    Explore real implementations
                    <span className="cta-highlight">
                        <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        GitHub
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Skills;
