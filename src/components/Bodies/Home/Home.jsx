
import Typewriter from 'typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import MyPdf from './Md-Adib-Arman-Shuvro.pdf'; // Import your PDF file
import { Link } from 'react-router-dom';

const Home = () => {

    const downloadResume = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = MyPdf; // Set the href to your PDF file
        link.download = 'myResume.pdf'; // Change the file name as needed

        // Append the link to the document body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='overflow-hidden flex lg:flex-row flex-col gap-5 lg:pt-20 pt-0 items-center justify-around'>
            <div data-aos="fade-down" data-aos-duration='3500' className='lg:w-1/2 '>

                <h1 className="text-2xl">This is , <br /> <span className="text-4xl font-bold text-purple-500">Md. Adib Arman Shuvro</span> </h1>

                <h1 className="text-2xl flex gap-2  ">I am <span className='text-purple-500 font-bold'> <Typewriter
                    options={{
                        strings: ['an Engineer', 'a Developer', 'a Designer', 'a Leader'],
                        autoStart: true,
                        loop: true,
                        delay: 30
                    }}
                /> </span></h1>
                <h1 className='text-justify mt-5'>Dynamic and dedicated web developer proficient in front-end and back-end technologies, adept at creating robust, user-friendly websites. Experienced in HTML, CSS, JavaScript, and various frameworks such as React and Angular. Skilled in database management with MySQL and MongoDB. Possess a strong understanding of UI/UX principles and responsive design. Proven track record of collaborating effectively with cross-functional teams to deliver projects on time and within budget. Continuously learning and adapting to emerging technologies and industry trends. Committed to producing high-quality code that meets both client requirements and industry standards. Eager to contribute to innovative projects and drive impactful results.</h1>
                <div data-aos="fade-down" data-aos-duration='2000' className='flex flex-col'>
                    <div className='flex gap-3 my-5'>
                        <Link to="https://github.com/Shuvro0421">
                            <FaGithub className='text-2xl text-purple-500'></FaGithub>
                        </Link>
                        <Link to={`https://linkedin.com/in/adib-arman-shuvro-085a701b9`}>
                            <FaLinkedin className='text-2xl text-purple-500'></FaLinkedin>
                        </Link>

                    </div>
                    <div className='flex md:flex-row flex-col  md:items-center items-start gap-5 justify-between'>
                        <button className='bg-purple-500 text-white text-center p-3 rounded-lg' onClick={downloadResume}>
                            Download Resume
                        </button>
                        <Link to={'tel:+8801767739907'}>Contact: +8801767739907</Link>

                    </div>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-duration='2000' className='effect lg:w-96  lg:h-96 md:w-80 md:h-80 w-60 h-60 relative rounded-full  '>
                <img className='m-auto rounded-full' src="https://i.ibb.co/72gsdv4/potrait-adib3.png" alt="" />
            </div>


        </div>
    );
};

export default Home;