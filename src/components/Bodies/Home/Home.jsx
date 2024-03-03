
import Typewriter from 'typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Home = () => {

    const downloadResume = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = 'https://indigo-hester-81.tiiny.site'; // Set the href to your PDF file
        link.download = 'Adib_Resume.pdf'; // Change the file name as needed

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

                <h1 className="text-2xl">This is , <br /> <span className="text-4xl font-bold effect-text">Md. Adib Arman Shuvro</span> </h1>

                <h1 className="text-2xl flex gap-2  ">I am <span className='effect-text font-bold'> <Typewriter
                    options={{
                        strings: ['an Engineer', 'a Developer', 'a Designer', 'a Leader'],
                        autoStart: true,
                        loop: true,
                        delay: 30
                    }}
                /> </span></h1>
                <h1 className='text-justify mt-5'>Welcome to my portfolio. TaKe your time to explore and enjoy the aspects of the website. My nickname is Shuvro and I believe the secret ingredients to success are hard work , dedication and the special ingredient is the help from Almighty Allah. I am very passionate to learn and explore new things like techs , games , languages , etc. My main hobby is drawing and playing games. Developing websites open new doors for me to explore and learn new features. I am willing to help through my goal by establishing technological facilities for the betterment of society</h1>
                <div data-aos="fade-down" data-aos-duration='2000' className='flex flex-col'>
                    <div className='flex gap-3 my-5'>
                        <Link target='_blank' className='hover:scale-105 active:scale-95 transition-transform ease-in-out duration-200' to="https://github.com/Shuvro0421">
                            <FaGithub className='text-2xl text-purple-500'></FaGithub>
                        </Link>
                        <Link target='_blank' className='hover:scale-105 active:scale-95 transition-transform ease-in-out duration-200' to={`https://linkedin.com/in/adib-arman-shuvro-085a701b9`}>
                            <FaLinkedin  className='text-2xl text-purple-500'></FaLinkedin>
                        </Link>

                    </div>
                    <div className='flex md:flex-row flex-col  md:items-center items-start gap-5 justify-between'>
                        <button className='effect active:scale-95 hover:scale-105  transition-transform ease-in-out duration-150 text-white text-center p-3 rounded-lg' onClick={downloadResume}>
                            Download Resume
                        </button>
                        <Link className='effect-text active:scale-95 transition-transform font-semibold hover:scale-105 ease-in-out duration-200' to={'tel:+8801767739907'}>Contact: +8801767739907</Link>

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