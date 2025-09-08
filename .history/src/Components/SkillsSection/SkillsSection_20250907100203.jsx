import React from "react";
import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import javascriptLogo from "./assets/javascript.svg";
import reactjsLogo from "./assets/react.svg";
import nextjsLogo from "./assets/nextjs.svg";
import tailwindcssLogo from "./assets/tailwind-css.svg";
import nodejsLogo from "./assets/node-js.svg";
import expressjsLogo from "./assets/Express-js.png";
import mongodbLogo from "./assets/mongodb.svg";
import firebaseLogo from "./assets/firebase.svg";
import gitLogo from "./assets/git.svg";
import githubLogo from "./assets/github.svg";
import vscodeLogo from "./assets/vs-code.svg";
import vercelLogo from "./assets/vercel.svg";
import netlifyLogo from "./assets/netlify.svg";
import figmaLogo from "./assets/figma.svg";
import sassLogo from "./assets/Sass.svg";

const SkillsStatic = () => {
    const {data, isLoading, isError}=
    return (
        <section
            id="skills"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            className="px-5 py-7 mx-auto mt-16"
        >
            <div>
                <h2 className="text-4xl font-bold text-center mb-8 text-primary">Skills</h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">An overview of my technical skills and knowledge gained through practical projects and continuous learning.</p>
            </div>

            {/* skills categories */}
            <div>
                {SkillsInfo.map((category, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-secondary">{category.title}</h3>
                        <div className="flex flex-wrap">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center mr-4 mb-2">
                                    <img src={skill.logo} alt={skill.name} className="w-6 h-6 mr-2" />
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default SkillsStatic;



