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
            <div className="bg-fixed overflow-hidden"
                style={{
                    backgroundImage: `url(https://i.ibb.co/0DS2kLs/8840b8d2c07bf805cdab22c0e4b54f59.gif)`,
                    
                    backgroundPosition: '50% 0%'

                }}>
                <div className='md:pt-16 w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0 pt-10'>
                    <HeaderTitle heading={'Achievements'} white={true}></HeaderTitle>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4  md:pb-20 w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0 pb-10  grid-cols-1 items-center justify-center gap-5'>
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
        </div>
    );
}

export default Achievements;
