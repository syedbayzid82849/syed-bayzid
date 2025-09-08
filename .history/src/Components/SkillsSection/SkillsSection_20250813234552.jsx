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
        <section id="skills" style="display:flex;flex-direction:column;align-items:center;">
            <h2>Skills</h2>
            <div style="display:flex;gap:32px;flex-wrap:wrap;justify-content:center;">
                <!-- HTML -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1s" repeatCount="indefinite" />
                            <path fill="#E44D26" d="M19.188 116.077L7.727 0h112.546l-11.466 116.063-44.806 11.94z" />
                            <path fill="#F16529" d="M64.072 119.464l36.211-9.653 9.817-109.942H64.072z" />
                            <path fill="#EBEBEB" d="M64.072 52.474H36.439l1.126 12.634h26.514z" />
                        </g>
                    </svg>
                    <div>HTML</div>
                </div>
                <!-- CSS -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0 64 64;360 64 64" dur="2s" repeatCount="indefinite" />
                            <path fill="#1572B6" d="M19.188 116.077L7.727 0h112.546l-11.466 116.063-44.806 11.94z" />
                            <path fill="#33A9DC" d="M64.072 119.464l36.211-9.653 9.817-109.942H64.072z" />
                        </g>
                    </svg>
                    <div>CSS</div>
                </div>
                <!-- JavaScript -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animate attributeName="opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite" />
                            <path fill="#F7DF1E" d="M7.727 0l11.461 116.077L64.072 128l44.806-11.94L120.273 0z" />
                        </g>
                    </svg>
                    <div>JavaScript</div>
                </div>
                <!-- React -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0 64 64;360 64 64" dur="1.5s" repeatCount="indefinite" />
                            <circle cx="64" cy="64" r="28" fill="#61DAFB" />
                            <ellipse rx="50" ry="18" cx="64" cy="64" fill="none" stroke="#61DAFB" stroke-width="4" />
                            <ellipse rx="18" ry="50" cx="64" cy="64" fill="none" stroke="#61DAFB" stroke-width="4" />
                            <ellipse rx="35" ry="12" cx="64" cy="64" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(60 64 64)" />
                        </g>
                    </svg>
                    <div>React</div>
                </div>
                <!-- Tailwind CSS -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="scale" values="1;1.07;1" dur="1.2s" repeatCount="indefinite" />
                            <path fill="#06B6D4" d="M64 32c-16 0-24 8-28 24 6-8 13-11 21-9 5 1 9 4 12 9 6-8 13-11 21-9 5 1 9 4 12 9-4-16-12-24-28-24zm-28 40c-4 16 4 24 28 24 16 0 24-8 28-24-6 8-13 11-21 9-5-1-9-4-12-9-6 8-13 11-21 9-5-1-9-4-12-9z" />
                        </g>
                    </svg>
                    <div>Tailwind</div>
                </div>
                <!-- Node.js -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="1s" repeatCount="indefinite" />
                            <path fill="#339933" d="M64 7l55 32v50l-55 32-55-32V39z" />
                        </g>
                    </svg>
                    <div>Node.js</div>
                </div>
                <!-- Express -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
                            <rect x="16" y="32" width="96" height="64" fill="#000" />
                            <text x="64" y="72" fill="#fff" font-size="22" font-family="Arial" text-anchor="middle" dominant-baseline="middle">Ex</text>
                        </g>
                    </svg>
                    <div>Express</div>
                </div>
                <!-- JWT -->
                <div style="text-align:center;">
                    <svg width="64" height="64" viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0 64 64;360 64 64" dur="2s" repeatCount="indefinite" />
                            <circle cx="64" cy="64" r="32" fill="#EA6F2F" />
                            <text x="64" y="76" fill="#fff" font-size="22" font-family="Arial" text-anchor="middle" dominant-baseline="middle">JWT</text>
                        </g>
                    </svg>
                    <div>JWT</div>
                </div>
            </div>
        </section>
    );
};

export default SkillsStatic;
