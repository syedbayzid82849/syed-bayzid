import React, { useEffect, useState } from "react";
import projectsData from "/"; // Adjust path if needed

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
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full sm:w-1/3 object-cover"
                            />
                            <div className="p-6 flex flex-col justify-between">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {project.name}
                                </h3>
                                <button
                                    className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View More / Details
                                </button>
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
