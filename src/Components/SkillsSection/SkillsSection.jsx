import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../loading/Loading";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillsStatic = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axios.get("https://portfolio-website-server-steel.vercel.app/skills");
            return res.data;
        },
    });


    if (error) return <p className="flex justify-center items-center">Error loading skills</p>;
    return (
        <section
            id="skills"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            className="px-4 py-16"
        >
            <div className="mb-10">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    Skills
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-500 max-w-2xl mx-auto text-center "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    An overview of my technical skills and knowledge gained through practical projects and continuous learning.
                </motion.p>

            </div>
            {/* skills categories */}

            {
                isLoading ? <Loading></Loading> :
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-3 ">

                        {data?.map((category) => (
                            <div key={category._id} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6  w-full rounded-xl border border-gray-900 shadow-[0_0_20px_1px_rgba(130, 69, 236, 0.3)]">
                                <h3 className="text-2xl font-semibold mb-4 text-center text-gray-400">{category.title}</h3>

                                {/* all skills icons */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                    {category?.skills?.map((skill, index) => (<Tilt
                                        key={index}
                                        tiltMaxAngleX={20}
                                        tiltMaxAngleY={20}
                                        perspective={1000}
                                        scale={1.05}
                                        transitionSpeed={1000}
                                        gyroscope={true}
                                    >

                                        <div className="flex items-center justify-center space-x-2 bg-gray-700 border-2 border-gray-700 rounded-3xl py-2 px-2 hover:bg-gray-800 transition-colors duration-300">
                                            <img src={skill.logo} alt={skill.name} className="w-9 h-9 mr-2" />
                                            <span className="text-gray-400">{skill.name}</span>
                                        </div>
                                    </Tilt>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
            }

        </section>
    );
};

export default SkillsStatic;



