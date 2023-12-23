import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <div className=' flex lg:flex-row flex-col gap-5 lg:pt-20 pt-0 items-center justify-around'>
            <div>

                <h1 className="text-2xl">This is , <br /> <span className="text-4xl font-bold text-purple-500">Md. Adib Arman Shuvro</span> </h1>

                <h1 className="text-2xl flex gap-2  ">I am <span className='text-purple-500 font-bold'> <Typewriter
                    options={{
                        strings: ['an Engineer', 'a Developer', 'a Designer', 'a Leader'],
                        autoStart: true,
                        loop: true,
                        delay: 30
                    }}
                /> </span></h1>
            </div>
            <div className='effect lg:w-96 lg:h-96 md:w-80 md:h-80 w-60 h-60 relative rounded-full  '>
                <img className='m-auto rounded-full' src="https://i.ibb.co/72gsdv4/potrait-adib3.png" alt="" />
            </div>



        </div>
    );
};

export default Home;