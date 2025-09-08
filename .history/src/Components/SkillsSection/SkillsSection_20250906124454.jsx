import React from "react";

const SkillsStatic = () => {
    return (
        <section id="skills" className="px-5 py-10 mx-auto mt-16 text-center">
            <div className="border">
                <h1 className="text-4xl font-bold text-center mb-8 text-primary">Skills And Tools</h1>
                <p>A collection of my technical skills and expertise honed through various projects and experiences</p>
            </div>
            <div className="border">
                {/* HTML */}
                <div style={{ textAlign: "center" }}>
                    <svg  viewBox="0 0 128 128">
                        <g>
                            <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1s" repeatCount="indefinite" />
                            <path fill="#E44D26" d="M19.188 116.077L7.727 0h112.546l-11.466 116.063-44.806 11.94z" />
                            <path fill="#F16529" d="M64.072 119.464l36.211-9.653 9.817-109.942H64.072z" />
                            <path fill="#EBEBEB" d="M64.072 52.474H36.439l1.126 12.634h26.514z" />
                        </g>
                    </svg>
                    <div>HTML</div>
                </div>
            </div>
        </section>
    );
};

export default SkillsStatic;



