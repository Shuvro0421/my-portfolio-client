import React, { useEffect } from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import Skills from './Skills';
import AOS from 'aos'
import 'aos/dist/aos.css'
const SkillsMerged = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div data-aos="fade-down" data-aos-duration='3500'>
                <HeaderTitle heading={'Skills'}></HeaderTitle>
            </div>
            {/* main skill div */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {/* programming skills */}
                <div className='shadow-2xl p-5 rounded-lg space-y-3'>
                    <div>
                        <h1>Programming Skills</h1>
                    </div>
                    <div className='space-y-2'>
                        <Skills bar={90} skillName='Python'></Skills>
                        <Skills bar={100} skillName='React'></Skills>
                        <Skills bar={60} skillName='Java'></Skills>
                        <Skills bar={70} skillName='C++'></Skills>
                        <Skills bar={100} skillName='HTML'></Skills>
                        <Skills bar={90} skillName='CSS'></Skills>
                        <Skills bar={95} skillName='JavaScript'></Skills>
                        <Skills bar={79} skillName='MongoDB'></Skills>
                        <Skills bar={75} skillName='Nodejs'></Skills>
                        <Skills bar={79} skillName='Express'></Skills>
                        <Skills bar={80} skillName='Strapi'></Skills>
                    </div>
                </div>
                {/* Designing skills */}
                <div className='shadow-2xl p-5 rounded-lg space-y-3'>
                    <div>
                        <h1>Designing Skills</h1>
                    </div>
                    <div className='space-y-2'>
                        <Skills bar={100} skillName='Adobe Illustrator'></Skills>
                        <Skills bar={90} skillName='Adobe Photoshop'></Skills>
                        <Skills bar={85} skillName='Shotcut'></Skills>
                    </div>
                </div>
                {/* Software skills */}
                <div className='shadow-2xl p-5 rounded-lg space-y-3'>
                    <div>
                        <h1>Software Skills</h1>
                    </div>
                    <div className='space-y-2'>
                        <Skills bar={90} skillName='MS Word'></Skills>
                        <Skills bar={85} skillName='MS Excel'></Skills>
                        <Skills bar={100} skillName='MS PowerPoint'></Skills>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsMerged;