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
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

const skills = [
    { Icon: FaHtml5, label: "HTML5", color: "text-orange-600" },
    { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-600" },
    { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-400" },
    { Icon: FaReact, label: "React", color: "text-cyan-400" },
    { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
    { Icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { Icon: FaGitAlt, label: "Git", color: "text-red-600" },
    { Icon: FaNpm, label: "NPM", color: "text-red-500" },
    { Icon: FaDocker, label: "Docker", color: "text-blue-400" },
];

const SkillsStatic = () => {
    return (
        <section className="py-10 px-5 mt-16 border text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                    {skills.map(({ Icon, label, color }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-2"
                            title={label}
                        >
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
