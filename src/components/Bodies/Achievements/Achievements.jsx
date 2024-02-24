import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import './Achievements.css'

const Achievements = () => {

    const [achievements, setAchievements] = useState([])
    useEffect(() => {
        fetch('/achievement.json')
            .then(res => res.json())
            .then(data => setAchievements(data))
    }, [])

    return (
        <div>
            <div>
                <HeaderTitle heading={'Achievements'}></HeaderTitle>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4    grid-cols-1 items-center justify-center gap-5'>
                {
                    achievements?.map(achievement => (
                        <div key={achievement?.id} className="card cursor-default">
                            <div className="card__side card__side--front text-2xl text-center">
                                <p>{achievement?.contest_name}</p>
                            </div>
                            <div className="card__side card__side--back text-2xl text-center">
                                <p>{achievement?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Achievements;
