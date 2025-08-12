import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaNpm,
    FaDocker,
    FaGithub,
    FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

const skills = {
    frontend: [
        { Icon: FaHtml5, label: "HTML5", color: "text-orange-600" },
        { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-600" },
        { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-400" },
        { Icon: FaReact, label: "React", color: "text-cyan-400" },
        { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
        { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
    ],
    backend: [
        { Icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
        { Icon: SiExpress, label: "Express", color: "text-gray-600" },
        { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
        { Icon: FaDocker, label: "Docker", color: "text-blue-400" },
    ],
    tools: [
        { Icon: FaGitAlt, label: "Git", color: "text-red-600" },
        { Icon: FaGithub, label: "GitHub", color: "text-gray-600" },
        { Icon: FaNpm, label: "NPM", color: "text-red-500" },
        { Icon: FaFigma, label: "Figma", color: "text-purple-500" },
    ],
};

const SkillsStatic = () => {
    return (
        <section id='skills' className="px-5 mt-16 max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center ">Skills</h2>

            {/* Frontend */}
            <div className="mb-10 mt-10">
                <h3 className="text-xl font-semibold mb-6 ">Frontend : </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
                    {skills.frontend.map(({ Icon, label, color }, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2" title={label}>
                            <Icon className={`text-6xl ${color} hover:scale-110 transition-transform duration-300`} />
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backend */}
            <div className="mb-10 mt-10">
                <h3 className="text-xl font-semibold mb-6">Backend : </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {skills.backend.map(({ Icon, label, color }, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2" title={label}>
                            <Icon className={`text-6xl ${color} hover:scale-110 transition-transform duration-300`} />
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="mb-10 mt-10">
                <h3 className="text-xl font-semibold mb-6">Tools & Design : </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {skills.tools.map(({ Icon, label, color }, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2" title={label}>
                            <Icon className={`text-6xl ${color} hover:scale-110 transition-transform duration-300`} />
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsStatic;
