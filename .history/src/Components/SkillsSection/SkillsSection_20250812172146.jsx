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
    { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
    { Icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { Icon: FaGitAlt, label: "Git", color: "text-red-600" },
    { Icon: FaNpm, label: "NPM", color: "text-red-500" },
    { Icon: FaDocker, label: "Docker", color: "text-blue-400" },
];

const SkillsMarquee = () => {
    return (
        <section className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center"> Skills</h2>
<p></p>
                {/* Marquee container */}
                <div className="overflow-hidden whitespace-nowrap">
                    {/* Scroll animation */}
                    <div
                        className="inline-flex animate-marquee gap-12"
                        style={{ animationDuration: "20s" }}
                    >
                        {skills.map(({ Icon, label, color }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center min-w-[100px]"
                                title={label}
                            >
                                <Icon className={`text-6xl ${color}`} />
                                <span className="mt-2 text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate for continuous effect */}
                    <div
                        className="inline-flex animate-marquee gap-12"
                        style={{ animationDuration: "20s", animationDelay: "10s" }}
                        aria-hidden="true"
                    >
                        {skills.map(({ Icon, label, color }, index) => (
                            <div
                                key={"dup-" + index}
                                className="flex flex-col items-center justify-center min-w-[100px]"
                            >
                                <Icon className={`text-6xl ${color}`} />
                                <span className="mt-2 text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tailwind animation for marquee */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0%) }
            100% { transform: translateX(-100%) }
          }
          .animate-marquee {
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
            </style>
        </section>
    );
};

export default SkillsMarquee;
