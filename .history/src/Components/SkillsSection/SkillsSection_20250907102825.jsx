import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const SkillsStatic = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/skills"); // check port
            return res.data;
        },
    });
    console.log(data);

    if (isLoading) return <;
    if (error) return <p>Error loading skills</p>;
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
                {data.map((category, index) => (
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



