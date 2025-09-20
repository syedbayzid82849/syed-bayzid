import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from '../../loading/Loading';
import ProjectModal from './ProjectModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

export default function MainProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    const { data: projects, isLoading, error } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axios.get("https://portfolio-website-server-steel.vercel.app/projects");
            return res.data;
        },
    });

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            easing: 'ease-out-cubic',
            once: false, // whether animation happens only once
            offset: 50, // offset (in px) from the original trigger point
        });
    }, []);

    if (error) return <p className="flex justify-center items-center">Error loading projects</p>;

    return (
        <section id="projects" className="px-5 py-7 mx-auto mt-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-primary" data-aos="fade-down">
                    Projects
                </h2>
                <p className="text-xl text-center text-gray-600 dark:text-gray-400 my-5" data-aos="fade-up" data-aos-delay="200">
                    A showcase of my projects, reflecting my skills and experience across different technologies.
                </p>
            </div>

            {/* Projects Grid */}
            {
                isLoading ? <Loading /> :
                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <motion.div
                                key={project._id}
                                className="bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 transition-transform duration-500 ease-out"
                                onClick={() => setSelectedProject(project)}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(59,130,246,0.3)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
                                    {project.images.map((img, i) => (
                                        <div key={i}>
                                            <img
                                                src={img}
                                                alt={`${project.name} screenshot ${i + 1}`}
                                                className="h-60 w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                                <div className="text-part p-3">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                    <p className="text-gray-500 mb-4 pt-4 line-clamp-3">{project.description}</p>
                                    <div className="mb-4">
                                        {project.techStack.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
            }

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
