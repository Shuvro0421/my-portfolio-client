
import Typewriter from 'typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div  className='overflow-hidden flex lg:flex-row flex-col gap-5 lg:pt-20 pt-0 items-center justify-around'>
            <div data-aos="fade-right" className='lg:w-1/2 '>

                <h1 className="text-2xl">This is , <br /> <span className="text-4xl font-bold text-purple-500">Md. Adib Arman Shuvro</span> </h1>

                <h1 className="text-2xl flex gap-2  ">I am <span className='text-purple-500 font-bold'> <Typewriter
                    options={{
                        strings: ['an Engineer', 'a Developer', 'a Designer', 'a Leader'],
                        autoStart: true,
                        loop: true,
                        delay: 30
                    }}
                /> </span></h1>
                <h1  className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero earum aperiam deleniti voluptate saepe sequi nulla quisquam et eius distinctio ut, sapiente eos quod possimus dolor accusamus ullam iusto at maxime sunt voluptatibus quae suscipit numquam. Cumque explicabo maxime officia recusandae dolorem culpa amet cum quod labore quas quibusdam, accusantium asperiores optio omnis eligendi! Ab praesentium rerum blanditiis nobis quasi autem consequuntur, officia quod distinctio illo enim corrupti, nulla quibusdam, mollitia reiciendis omnis expedita. Laboriosam consectetur, ex dolor corporis qui veniam maiores eius impedit odit, nisi earum ipsam iste repellendus dolorum aperiam, itaque doloremque? Sit eligendi culpa illum accusantium?</h1>
            </div>
            <div data-aos="fade-left" className='effect lg:w-96  lg:h-96 md:w-80 md:h-80 w-60 h-60 relative rounded-full  '>
                <img className='m-auto rounded-full' src="https://i.ibb.co/72gsdv4/potrait-adib3.png" alt="" />
            </div>


        </div>
    );
};

export default Home;