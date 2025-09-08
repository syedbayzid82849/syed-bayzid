import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../loading/Loading";


const SkillsStatic = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/skills");
            return res.data;
        },
    });


    if (isLoading) return <Loading />;
    if (error) return <p className="flex justify-center items-center">Error loading skills</p>;
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
                <h2 className="text-4xl font-bold text-center mb-4 text-primary">Skills</h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">An overview of my technical skills and knowledge gained through practical projects and continuous learning.</p>
            </div>

            {/* skills categories */}
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                {skills?.map((category) => (
                    <div key={category._id} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-6 w-full sm:w[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130, 69, 236, 0.3)]">
                        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-400">{category.title}</h3>
                        
                        {/* all skills icons */}
                        {category?.skills?.map((skill)=>(
                            <div key={skill._id} className="flex items-center mb-3">
                                <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                                <span className="text-gray-400">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SkillsStatic;



