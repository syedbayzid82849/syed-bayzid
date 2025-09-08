import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../loading/Loading";

const Skills = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axios.get("../../../"); // check port
            return res.data;
        },
    });
    console.log(data);

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
                <h2 className="text-4xl font-bold text-center mb-8 text-primary">Skills</h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">An overview of my technical skills and knowledge gained through practical projects and continuous learning.</p>
            </div>

            {/* skills categories */}
            <div>

            </div>

        </section>
    );
};

export default SkillsStatic;



