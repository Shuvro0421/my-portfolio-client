import { useEffect } from "react";
import { useState } from "react";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'



const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div data-aos="fade-down" data-aos-duration='3500'>
                <HeaderTitle  heading={'Projects'}></HeaderTitle>
            </div>
            <div data-aos="fade-down" data-aos-duration='2000'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3">
                    {
                        projects?.map(project => (
                            <div key={project?.id}>
                                <div className="border-2 effect rounded-lg p-2 relative">
                                    <img className="h-40 w-96 rounded-md hover:scale-105 ease-in-out duration-300 " src={project?.image_link} alt="" />
                                    <div className="h-1/4 w-full text-white text-center p-2 font-semibold bg-gray-500 backdrop-blur-2xl bg-opacity-5 absolute rounded-b-md bottom-0 left-0 right-0 z-10">
                                        <div className="flex items-center justify-between px-2">
                                            <div>
                                                <h1>{project.project_name}</h1>
                                            </div>
                                            <div>
                                                <Link to={project.project_link}>
                                                    <FaCode className="font-semibold text-2xl"></FaCode>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;