import { useState, useRef, useEffect } from 'react';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import { FaCaretLeft, FaCaretRight, FaCaretUp } from "react-icons/fa";
import Footer from '../Footer/Footer';
import SkillsMerged from '../Skills/SkillsMerged';
import Experience from '../Experience/Experience';

const Body = () => {
  const [activeLink, setActiveLink] = useState(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check the scroll position and set the active link accordingly
      const homePosition = homeRef.current.offsetTop;
      const projectsPosition = projectsRef.current.offsetTop;
      const skillsPosition = skillsRef.current.offsetTop;
      const experiencePosition = experienceRef.current.offsetTop;

      if (scrollPosition >= homePosition && scrollPosition < projectsPosition) {
        setActiveLink(0);
      } else if (scrollPosition >= projectsPosition && scrollPosition < skillsPosition) {
        setActiveLink(1);
      } else if (scrollPosition >= skillsPosition && scrollPosition < experiencePosition) {
        setActiveLink(2);
      } else if (scrollPosition >= experiencePosition) {
        setActiveLink(3);
      } else {
        setActiveLink(null);
      }

      // Change navbar background color when scrolling down to 100px
      setIsNavbarScrolled(scrollPosition >= 100);

      // Check if the scroll position is at the top
      setIsAtTop(scrollPosition <= 500);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove class to body based on drawer state
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const handleLinkClick = (index) => {
    setActiveLink(index);

    // Scroll to the corresponding section
    if (index === 0) {
      window.scrollTo({ top: homeRef.current.offsetTop, behavior: 'smooth' });
    } else if (index === 1) {
      window.scrollTo({ top: projectsRef.current.offsetTop, behavior: 'smooth' });
    } else if (index === 2) {
      window.scrollTo({ top: skillsRef.current.offsetTop, behavior: 'smooth' });
    } else if (index === 3) {
      window.scrollTo({ top: experienceRef.current.offsetTop, behavior: 'smooth' });
    }
    // Add more conditions for other sections as needed
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    'Home',
    'Projects',
    'Skills',
    'Experience',
    'Achievements',
    'Education',
    'About Me'
  ];

  return (
    <div className='flex flex-col min-h-screen'>

      <div>
        {/* navbar lg , md */}
        <div className=''>
          <ul className={`md:flex z-10 hidden items-center ${isNavbarScrolled ? 'bg-gray-500 bg-opacity-10 ease-in-out duration-300' : ''}  fixed top-0 backdrop-blur-md w-full justify-center p-5 gap-5  text-sm`}>
            {links.map((link, index) => (
              <li
                key={index}
                onClick={() => handleLinkClick(index)}
                className={activeLink === index ? 'text-purple-500 cursor-pointer ' : 'cursor-pointer'}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* navbar small */}
        <div className='md:hidden block'>
          <div onClick={handleIsOpen} className=' z-30  top-1/2 fixed right-0'>
            {
              !isOpen ? <FaCaretLeft className='text-2xl text-purple-500' /> : <FaCaretRight className='text-2xl text-purple-500' />
            }
          </div>
          {
            isOpen &&

            <div>
              <ul className={`flex flex-col justify-center text-white items-center fixed top-0 right-0 w-2/3   backdrop-blur-md bg-gray-500 bg-opacity-10 h-full  z-20 gap-5  text-sm`}>
                {links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => handleLinkClick(index)}
                    className={activeLink === index ? 'text-purple-500 cursor-pointer' : 'cursor-pointer'}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>

        {/* Scroll to Top Button */}
        <div className=''>
          {!isAtTop && (
            <div className="fixed bottom-4 z-10 right-4">
              <button
                onClick={handleScrollToTop}
                className=" md:text-2xl text-lg bg-opacity-65 md:p-3 p-2 rounded-full  bg-purple-500 text-gray-200   cursor-pointer"
              >
                <FaCaretUp></FaCaretUp>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className=' flex-1 mb-10'>
        {/* Home */}
        <div className='md:pt-20 w-full md:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0 pt-10' ref={homeRef}>
          <Home />
        </div>

        {/* Projects */}
        <div className='md:pt-20 w-full md:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0 pt-10' ref={projectsRef}>
          <Projects />
        </div>
        {/* Skills */}
        <div className='md:pt-20 w-full md:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0 pt-10' ref={skillsRef}>
          <SkillsMerged />
        </div>
        {/* Experience */}
        <div className='md:pt-20 pt-10' ref={experienceRef}>
          <Experience />
        </div>
        {/* Add more sections with refs as needed */}
      </div>
      {/* footer */}
      <div className=''>
        <Footer></Footer>
      </div>
    </div>

  );
};

export default Body;

