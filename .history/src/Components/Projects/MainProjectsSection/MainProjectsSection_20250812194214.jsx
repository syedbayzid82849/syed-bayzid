import React, { useEffect, useState } from "react";
import projectsData from "../../../../projects.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MainProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    My Projects
                </h2>

                <div className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="py-3 md:px-5">
                            <div className="max-w-full p-3 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 grid md:grid-cols-3 gap-3">
                                {/* Carousel */}
                                <div className="md:flex md:items-center">
                                    <Carousel autoPlay infiniteLoop showThumbs={false}>
                                        {project.images.map((img, i) => (
                                            <div key={i}>
                                                <img src={img} alt={`${project.name} screenshot ${i + 1}`} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>

                                {/* Info */}
                                <div className="mt-6 mb-2 md:border-l-2 md:pl-2 border-gray-300 dark:border-gray-600">
                                    <h3 className="text-2xl font-semibold tracking-wide text-gray-800 dark:text-white">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                                    <div className="flex gap-5 py-3 flex-wrap">
                                        {project.techStack.map((tech, i) => (
                                            <button
                                                key={i}
                                                className="px-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200 text-gray-800 dark:text-white"
                                            >
                                                {tech}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-row flex-wrap gap-2 justify-center items-center md:flex-col md:gap-3">
                                    <ProjectButton url={project.liveLink} text="Live show" />
                                    <ProjectButton url={project.githubLink} text="Github" />
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="h-10 px-2 py-2 font-semibold border rounded border-gray-800 text-gray-800 dark:border-gray-300 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition delay-100 duration-300 ease-in-out bg-indigo-500"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <div
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-2xl relative max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {selectedProject && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            onClick={() => setSelectedProject(null)}
                        >
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-2xl relative max-h-[80vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    ✕
                                </button>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                    {selectedProject.name}
                                </h3>

                                <Carousel autoPlay infiniteLoop showThumbs={false}>
                                    {selectedProject.images.map((img, i) => (
                                        <div key={i}>
                                            <img src={img} alt={`${selectedProject.name} modal screenshot ${i + 1}`} />
                                        </div>
                                    ))}
                                </Carousel>
                                <p className="mt-4">
                                    <strong>Tech Stack:</strong> 
                                    <span children>
                                        {selectedProject.techStack.join(", ")}
                                    </span>
                                </p>
                                <p>
                                    <strong>Description:</strong> {selectedProject.description}
                                </p>
                                <p>
                                    <strong>Live:</strong>{" "}
                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {selectedProject.liveLink}
                                    </a>
                                </p>
                                <p>
                                    <strong>GitHub:</strong>{" "}
                                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {selectedProject.githubLink}
                                    </a>
                                </p>
                                <p>
                                    <strong>Challenges:</strong> {selectedProject.challenges}
                                </p>
                                <p>
                                    <strong>Future Plans:</strong> {selectedProject.futurePlans}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

const ProjectButton = ({ url, text }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 px-2 py-2 font-semibold border rounded border-gray-800 text-gray-800 dark:border-gray-300 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition delay-100 duration-300 ease-in-out bg-indigo-500"
    >
        {text}
    </a>
);

export default MainProjectsSection;
