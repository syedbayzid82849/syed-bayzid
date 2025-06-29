// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="border rounded-xl py-16  md:px-10 ">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Me</h2>
            <div className=" mx-auto text-lg text-neutral-content space-y-6">
                <p>
                    Hello! I'm <span className="font-semibold text-secondary">Syed Bayzid</span>, a passionate and dedicated web developer. My journey into programming began with a curiosity for how websites work, and that curiosity quickly turned into a career path I absolutely love.
                </p>
                <p>
                    I specialize in building modern, responsive, and user-friendly web applications. I enjoy frontend development with React and Tailwind, and I'm also familiar with backend technologies like Node.js and Express.
                </p>
                <p>
                    Beyond coding, I enjoy activities like playing cricket, painting, and learning about new technologies. I believe in continuous growth and always strive to learn something new every day.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
