import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Animation holds for 3.2s, then fades out
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 3200);

        // Completely remove from DOM after fade completes
        const unmountTimer = setTimeout(() => {
            onComplete();
        }, 3800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        };
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <svg className="shiva-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    {/* Crescent Moon */}
                    <path pathLength="100" className="draw-path moon" d="M 50 30 A 20 20 0 1 1 70 60 A 25 25 0 0 0 50 30" />
                    
                    {/* Tripundra (Three Lines) */}
                    <path pathLength="100" className="draw-path tripundra" d="M 35 90 L 85 90 M 30 100 L 90 100 M 35 110 L 85 110" />
                    
                    {/* Third Eye */}
                    <path pathLength="100" className="draw-path eye" d="M 60 92 Q 55 100 60 108 Q 65 100 60 92" />
                    
                    {/* Trishul Staff */}
                    <path pathLength="100" className="draw-path trishul-staff" d="M 140 180 L 140 20" />
                    
                    {/* Trishul Prongs */}
                    <path pathLength="100" className="draw-path trishul-prongs" d="M 115 40 Q 115 75 140 75 Q 165 75 165 40 M 140 75 L 140 10" />
                    
                    {/* Damaru (Drum) */}
                    <path pathLength="100" className="draw-path damaru" d="M 130 105 L 150 125 M 150 105 L 130 125 M 130 105 Q 125 115 130 125 M 150 105 Q 155 115 150 125" />
                </svg>
                
                <h1 className="loading-name">गिरीश</h1>
                <p className="loading-tagline">Code. Create. Conquer.</p>
            </div>
            
            {/* Minimal Ambient Glows */}
            <div className="loading-glow glow-1"></div>
            <div className="loading-glow glow-2"></div>
        </div>
    );
};

export default LoadingScreen;
