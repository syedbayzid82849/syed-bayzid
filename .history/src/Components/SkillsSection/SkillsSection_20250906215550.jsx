import React from "react";

const SkillsStatic = () => {
    return (
        <section
            id="skills"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            className="px-5 py-10 mx-auto mt-16"
        >
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"></div>

        </section>
    );
};

export default SkillsStatic;



