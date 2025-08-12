import React from 'react';

const SkillsSection = () => {
    const frontendSkills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'MongoDB', level: 60 },
    ];

    const tools = [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 60 },
    ];

    const renderSkillBar = (skill) => (
        <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-10 px-5 mt-16 border">
            <h2 className="text-3xl font-bold  text-center mb-8">Skills</h2>
            <div className="grid md:grid-cols-3 ">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
                    {frontendSkills.map(renderSkillBar)}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Backend</h3>
                    {backendSkills.map(renderSkillBar)}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">Tools</h3>
                    {tools.map(renderSkillBar)}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
