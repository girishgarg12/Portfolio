import React, { useEffect, useState, useRef } from "react";
import "./ProblemSolving.css";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTimestamp = null;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        // using easeOutQuad for smooth ending
                        const easeProgress = progress * (2 - progress);
                        setCount(Math.floor(easeProgress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) observer.observe(countRef.current);

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="section-container" style={{ backgroundColor: "#0a0a0a" }}>
            <div className="section-header">
                <h4 className="section-subtitle">LOGIC & ALGORITHMS</h4>
                <h2 className="section-title">
                    Problem <span className="highlight-blue">Solving</span>
                </h2>
                <p className="section-desc">
                    Passionate about competitive programming and algorithmic optimization.
                    Actively solving problems, participating in contests, and maintaining consistent coding activity.
                </p>
            </div>

            <div className="ps-grid">
                {/* CARD 1 — LEETCODE */}
                <div className="ps-flip-card group theme-leetcode">
                    <div className="ps-flip-card-inner">
                        {/* FRONT */}
                        <div className="ps-card-front">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <div className="ps-icon-wrapper">
                                    <img
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                                        alt="LeetCode Logo"
                                        className="ps-icon"
                                    />
                                </div>

                                <div className="ps-main-metric">
                                    <div className="ps-number"><CountUp end={435} /></div>
                                    <div className="ps-metric-label">Problems Solved</div>
                                </div>

                                <ul className="ps-stats-list">
                                    <li><span className="ps-stat-icon">⚡</span> Contest Rating — 1525</li>
                                    <li><span className="ps-stat-icon">🔥</span> Max Streak — 221 days</li>
                                    <li><span className="ps-stat-icon">📊</span> Medium / Hard — 286</li>
                                </ul>

                                <div className="ps-bottom-label">Competitive Programming</div>
                            </div>
                        </div>

                        {/* BACK */}
                        <div className="ps-card-back">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <h4 className="ps-back-title">Detailed Stats</h4>

                                <div className="ps-detailed-stats">
                                    <div className="ps-stat-row"><span>Easy</span> <span className="text-easy">149</span></div>
                                    <div className="ps-stat-row"><span>Medium</span> <span className="text-medium">252</span></div>
                                    <div className="ps-stat-row"><span>Hard</span> <span className="text-hard">34</span></div>
                                    <div className="ps-divider"></div>
                                    <div className="ps-stat-row"><span>Contests Attended</span> <span>6</span></div>
                                    <div className="ps-stat-row"><span>Top Percentile</span> <span>37.28%</span></div>
                                </div>

                                <a href="https://leetcode.com/u/GirishGarg/" target="_blank" rel="noopener noreferrer" className="ps-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    View LeetCode Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 2 — CODECHEF */}
                <div className="ps-flip-card group theme-codechef">
                    <div className="ps-flip-card-inner">
                        {/* FRONT */}
                        <div className="ps-card-front">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <div className="ps-icon-wrapper">
                                    <span className="ps-icon-text">CC</span>
                                </div>

                                <div className="ps-main-metric">
                                    <div className="ps-number"><CountUp end={1442} /></div>
                                    <div className="ps-metric-label">CodeChef Rating</div>
                                </div>

                                <ul className="ps-stats-list">
                                    <li><span className="ps-stat-icon">⭐</span> 2★ Coder</li>
                                    <li><span className="ps-stat-icon">🏆</span> Highest Rating — 1469</li>
                                    <li><span className="ps-stat-icon">🧠</span> DSA Java Skill Test — 93%</li>
                                </ul>

                                <div className="ps-bottom-label">Division 3</div>
                            </div>
                        </div>

                        {/* BACK */}
                        <div className="ps-card-back">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <h4 className="ps-back-title">Rankings & Progression</h4>

                                <div className="ps-detailed-stats">
                                    <div className="ps-stat-row"><span>Global Rank</span> <span>35,945</span></div>
                                    <div className="ps-stat-row"><span>Country Rank</span> <span>33,306</span></div>
                                </div>

                                <div className="ps-back-graph-placeholder">
                                    <img src="https://img.shields.io/badge/CodeChef-1425%20Rating-brown?style=for-the-badge&logo=codechef" alt="CodeChef Badge" style={{ transform: "scale(1.2)" }} />
                                </div>

                                <a href="https://www.codechef.com/users/girish_garg77" target="_blank" rel="noopener noreferrer" className="ps-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    View CodeChef Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 3 — GITHUB */}
                <div className="ps-flip-card group theme-github">
                    <div className="ps-flip-card-inner">
                        {/* FRONT */}
                        <div className="ps-card-front">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <div className="ps-icon-wrapper">
                                    <svg className="ps-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                    </svg>
                                </div>

                                <div className="ps-main-metric">
                                    <div className="ps-number">GitHub</div>
                                    <div className="ps-metric-label">Activity</div>
                                </div>

                                <ul className="ps-stats-list">
                                    <li><span className="ps-stat-icon">📦</span> Repositories — <CountUp end={10} suffix="+" /></li>
                                    <li><span className="ps-stat-icon">⚡</span> Contributions — <CountUp end={70} suffix="+" /></li>
                                    <li><span className="ps-stat-icon">💻</span> DSA Solutions — <CountUp end={50} suffix="+" /></li>
                                </ul>

                                <div className="ps-bottom-label">Open Source & Coding Activity</div>
                            </div>
                        </div>

                        {/* BACK */}
                        <div className="ps-card-back">
                            <div className="ps-card-glass"></div>
                            <div className="ps-card-content">
                                <h4 className="ps-back-title">Developer Activity</h4>

                                <div className="ps-focus-areas">
                                    <div className="ps-focus-group">
                                        <h5>Primary Languages</h5>
                                        <p>Java • C++ • JavaScript</p>
                                    </div>
                                    <div className="ps-focus-group">
                                        <h5>Focus Areas</h5>
                                        <p>Algorithms • Backend • DevSecOps</p>
                                    </div>
                                </div>

                                <div className="ps-back-image-wrapper">
                                    <img src="https://ghchart.rshah.org/girishgarg12" alt="GitHub Contributions chart" className="ps-invert-if-dark" />
                                </div>

                                <a href="https://github.com/girishgarg12" target="_blank" rel="noopener noreferrer" className="ps-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    Explore Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSolving;