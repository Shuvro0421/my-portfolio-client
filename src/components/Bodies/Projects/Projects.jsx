// React Component
import React, { useEffect, useState } from "react";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import { FaCode, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(4); // Adjust as needed
    const [selectedType, setSelectedType] = useState("all"); // Default to show all projects
    const [animate, setAnimate] = useState(true); // State to control animation

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Extract unique project types
    const projectTypes = Array.from(new Set(projects.map(project => project.type)));

    // Logic to get current projects based on selected type and pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const filteredProjects = selectedType === "all" ? projects : projects.filter(project => project.type === selectedType);
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setAnimate(false); // Disable animation
        setTimeout(() => {
            setAnimate(true); // Re-enable animation after a short delay
        }, 50);
    };

    // Function to handle type change
    const handleTypeChange = (type) => {
        setCurrentPage(1); // Reset page to 1 when type changes
        setSelectedType(type);
        setAnimate(false); // Disable animation
        setTimeout(() => {
            setAnimate(true); // Re-enable animation after a short delay
        }, 50);
    }

    return (
        <div>
            <div data-aos="fade-down" data-aos-duration='3500'>
                <HeaderTitle heading={'Projects'}></HeaderTitle>
            </div>
            <div data-aos="fade-down" data-aos-duration='2000'>
                {/* Type Filter */}
                <div className="flex justify-center flex-wrap mb-4">
                    <button className={`px-4 py-2 mx-1 my-1 rounded ${selectedType === "all" ? 'effect text-white ' : 'effect-text active:scale-95 hover:scale-110  transition-transform ease-in-out duration-150'}`} onClick={() => handleTypeChange("all")}>All</button>
                    {/* Generate buttons for each project type */}
                    {projectTypes.map(type => (
                        <button key={type} className={`px-4 py-2 mx-1 my-1 bg-gray-300 rounded  ${selectedType === type ? 'effect text-white' : 'effect-text active:scale-95 hover:scale-110  transition-transform ease-in-out duration-150'}`} onClick={() => handleTypeChange(type)}>{type}</button>
                    ))}
                </div>
                {/* Projects Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3">
                    {currentProjects.map((project, index) => (
                        <div key={project?.id} className={animate ? 'slide-enter' : ''}>
                            <div className="effect rounded-lg p-2 relative">
                                <img className="h-40 w-96 rounded-md hover:scale-[102%] ease-in-out duration-300 " src={project?.image_link} alt="" />
                                <div className="h-1/4 w-full text-white text-center p-2 font-semibold bg-gray-500 backdrop-blur-2xl bg-opacity-5 absolute rounded-b-md bottom-0 left-0 right-0 z-10">
                                    <div className="flex items-center justify-between px-2">
                                        <div className="cursor-default">
                                            <h1>{project.project_name}</h1>
                                        </div>
                                        <div>
                                            {project?.project_link && <Link to={project.project_link} target="_blank">
                                                <FaCode className="font-semibold text-2xl active:scale-95 hover:scale-110  transition-transform ease-in-out duration-150"></FaCode>
                                            </Link>}
                                            {project?.github_link && <Link to={project.github_link} target="_blank">
                                                <FaGithub className="font-semibold text-2xl active:scale-95 hover:scale-110  transition-transform ease-in-out duration-150"></FaGithub>
                                            </Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`px-4 py-2 mx-1 bg-gray-300 rounded ${currentPage === i + 1 ? 'effect text-white' : 'effect-text active:scale-95 hover:scale-110  transition-transform ease-in-out duration-150'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Projects;
