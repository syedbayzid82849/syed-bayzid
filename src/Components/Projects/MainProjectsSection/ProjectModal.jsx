import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4 overflow-auto"
            onClick={onClose} // click outside closes modal
        >
            <div
                className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                style={{ maxHeight: "90vh" }} // scrollable if content too long
            >

                {/* Carousel */}
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    {project.images.map((img, i) => (
                        <div key={i}>
                            <img
                                src={img}
                                alt={`${project.name} screenshot ${i + 1}`}
                                className="w-full object-contain"
                            />
                        </div>
                    ))}
                </Carousel>

                {/* Project Info */}
                <div className="p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {project.name}
                    </h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 flex-wrap mb-6">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 lg:w-auto bg-gray-800 hover:bg-purple-800 text-gray-400 px-6 py-2 rounded-xl text-sm lg:text-lg text-center font-semibold"
                        >
                            View Code
                        </a>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 lg:w-auto bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm lg:text-lg text-center font-semibold"
                        >
                            View Live
                        </a>
                    </div>

                    <p className="mt-2 text-gray-400">
                        <strong>Challenges:</strong> {project.challenges}
                    </p>
                    <p className="mt-2 text-gray-400">
                        <strong>Future Plans:</strong> {project.futurePlans}
                    </p>
                </div>
            </div>
        </div>
    );
}
