import React, { useEffect } from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ExperienceTimeline from './ExperienceTimeline';
import { useState } from 'react';

const Experience = () => {

    const [datas , setDatas] = useState([])
    useEffect(() =>{
        fetch('/timeline.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    } , [])

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div data-aos="fade-down" data-aos-duration='3500'>
                <HeaderTitle heading={'Experience'}></HeaderTitle>
            </div>
            <div>
                <ExperienceTimeline datas={datas} image={'https://i.ibb.co/dJb2LFF/65a2e386c5f42eb0508452d0-intro-purple.gif'} array={datas.length}></ExperienceTimeline>
            </div>
        </div>
    );
};

export default Experience;