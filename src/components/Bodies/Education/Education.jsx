import React, { useEffect } from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Education data as JSON
    const educationData = [
        {
            degree: 'B.Sc in CSE',
            institution: 'Bangladesh Army University of Engineering and Technology',
            duration: '2018-2022',
            result: 'CGPA: 3.00 out of 4.00'
        },
        {
            degree: 'H.S.C in Science',
            institution: 'Rajshahi Govt. City Collage, Rajshahi',
            duration: '2016-2018',
            result: 'GPA: 3.75 out of 5.00'
        },
        {
            degree: 'S.S.C in Science',
            institution: 'Shiroil Government High School, Rajshahi',
            duration: '2008-2016',
            result: 'GPA: 5.00 out of 5.00'
        },
        // Add more entries if needed
    ];

    return (
        <div>
            <div data-aos="fade-down" data-aos-duration='3500'>
                <HeaderTitle heading={'Education'}></HeaderTitle>
            </div>
            <div data-aos="fade-down" data-aos-duration='2000' className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {educationData.map((education, index) => (
                    <div key={index} className='relative mx-5 my-5'>
                        <div className='flex bg-white  md:h-56 translate-x-3 -translate-y-3 hover:-translate-x-0 hover:-translate-y-0 ease-in-out duration-200 flex-col gap-2 shadow-2xl p-5 rounded-lg'>
                            <div>
                                <h1 className='text-2xl effect-text'>{education.degree}</h1>
                            </div>
                            <div className='flex justify-between mt-5 flex-col'>
                                <h1 className='text-xl'>{education.institution}</h1>
                                <h1 className='text-md'>{education.duration}</h1>
                            </div>
                            <div>
                                <h1 className='text-md'>{education.result}</h1>
                            </div>
                        </div>
                        <div className='w-full h-full drop-shadow-2xl effect absolute top-0 rounded-lg -z-10'></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
