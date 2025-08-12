import React, { useEffect, useState } from "react";
import projectsData from "../../../../projects.json"; // Adjust path if needed

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
            <div className='py-3 md:px-5'>
                <div className='max-w-full p-3 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center'>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            {[academix1, academix2, academix3, academix4, academix5].map((img, i) => (
                                <div key={i}>
                                    <img src={img} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 md:pl-2 border-gray-300 dark:border-gray-600'>
                        <h3 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white'>🎓 Academix-Hub</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Academix-Hub is a secure, interactive platform for course enrollment and content management with a clean UI and role-based access.
                        </p>
                        <div className='flex gap-5 py-3'>
                            {['react', 'vite', 'tailwind', 'react icon'].map((tech, i) => (
                                <button key={i} className='px-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200 text-gray-800 dark:text-white'>
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 justify-center items-center md:flex-col md:gap-3'>
                        <ProjectButton url="https://academix-hub.netlify.app/" text="Live show" />
                        <ProjectButton url="https://github.com/syedbayzid82849/Academix-Hub-project?tab=readme-ov-file" text="Github" />
                        <ProjectButton url="https://github.com/syedbayzid82849/Academix-Hub-project/blob/main/README.md" text="Details" />
                    </div>
                </div>
            </div>

                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-2xl relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                {selectedProject.name}
                            </h3>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="rounded-lg mb-4"
                            />
                            <p className="mb-2">
                                <strong>Tech Stack:</strong> {selectedProject.techStack.join(", ")}
                            </p>
                            <p className="mb-2">
                                <strong>Description:</strong> {selectedProject.description}
                            </p>
                            <p className="mb-2">
                                <strong>Live Project:</strong>{" "}
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {selectedProject.liveLink}
                                </a>
                            </p>
                            <p className="mb-2">
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {selectedProject.githubLink}
                                </a>
                            </p>
                            <p className="mb-2">
                                <strong>Challenges:</strong> {selectedProject.challenges}
                            </p>
                            <p>
                                <strong>Future Plans:</strong> {selectedProject.futurePlans}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MainProjectsSection;
