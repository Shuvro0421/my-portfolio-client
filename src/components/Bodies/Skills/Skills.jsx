import React, { useState, useEffect, useRef } from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import './Skills.css';

const Skills = ({ bar = 0, skillName = 'None' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const skillRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const top = skillRef.current.getBoundingClientRect().top;
            setIsVisible(top >= 0 && top <= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const skillLevel =
        bar >= 20 && bar < 40 ? 'Bad' :
        bar >= 40 && bar < 60 ? 'Normal' :
        bar >= 60 && bar < 80 ? 'Good' :
        bar >= 80 && bar < 100 ? 'Master' :
        bar === 100 ? 'Professional' :
        '';

    return (
        <div className=''>

            <div
                ref={skillRef}
                className='w-full bg-gray-300 rounded-3xl'
            >
                <div
                    className={`flex justify-between gap-5 effect p-2 text-white rounded-3xl skill-bar ${
                        isVisible ? 'visible' : ''
                    }`}
                    style={{ '--bar-width': `${isVisible ? bar : 0}%` }}
                >
                    <div>
                        <h1>{skillName}</h1>
                    </div>
                    <div>
                        <h1>{skillLevel}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
