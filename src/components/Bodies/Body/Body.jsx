import { useState, useRef, useEffect } from 'react';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import { FaCaretLeft, FaCaretRight, FaCaretUp } from "react-icons/fa";

const Body = () => {
  const [activeLink, setActiveLink] = useState(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check the scroll position and set the active link accordingly
      const homePosition = homeRef.current.offsetTop;
      const projectsPosition = projectsRef.current.offsetTop;

      if (scrollPosition >= homePosition && scrollPosition < projectsPosition) {
        setActiveLink(0);
      } else if (scrollPosition >= projectsPosition) {
        setActiveLink(1);
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

  const handleLinkClick = (index) => {
    setActiveLink(index);

    // Scroll to the corresponding section
    if (index === 0) {
      window.scrollTo({ top: homeRef.current.offsetTop, behavior: 'smooth' });
    } else if (index === 1) {
      window.scrollTo({ top: projectsRef.current.offsetTop, behavior: 'smooth' });
    }
    // Add more conditions for other sections as needed
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

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
    <div>
      {/* navbar lg , md */}
      <div>
        <ul className={`md:flex hidden items-center ${isNavbarScrolled ? 'bg-gray-500 bg-opacity-10 ease-in-out duration-300' : ''}  fixed top-0 backdrop-blur-md w-full justify-center p-5 gap-5 font-semibold text-sm`}>
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
            <ul className={`flex flex-col  items-center fixed top-0 right-0 w-2/3 ease-in-out duration-300  backdrop-blur-md bg-gray-500 bg-opacity-10 h-full justify-center z-20 gap-5 font-semibold text-sm`}>
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
      <div>
        {!isAtTop && (
          <div className="fixed bottom-4 right-4">
            <button
              onClick={handleScrollToTop}
              className=" md:text-2xl text-lg  md:p-3 p-2 rounded-full  bg-purple-500 text-gray-200   cursor-pointer"
            >
              <FaCaretUp></FaCaretUp>
            </button>
          </div>
        )}
      </div>


      <div className='md:px-20 px-12'>
        {/* Home */}
        <div className='md:pt-20 pt-10' ref={homeRef}>
          <Home />
        </div>

        {/* Projects */}
        <div className='md:pt-20 pt-10' ref={projectsRef}>
          <Projects />
        </div>
        {/* Add more sections with refs as needed */}
      </div>
    </div>
  );
};

export default Body;
