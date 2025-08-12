// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="px-5 py-10 mx-auto mt-16 border rounded-lg max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Me</h2>
            <div className="mx-auto text-lg text-neutral-content space-y-6">
                <p>
                    Hello! I'm <span className="font-semibold text-secondary animate-glow">Syed Bayzid</span>, and my programming journey began with a curiosity about how websites and apps work. Over time, this curiosity turned into a passion for creating dynamic and efficient web applications. Starting with HTML and CSS, I gradually mastered JavaScript and then specialized in the MERN stack—MongoDB, Express.js, React.js, and Node.js.
                </p>
                <p>
                    I truly enjoy building projects that solve real-world problems, focusing on creating fast, responsive, and user-friendly interfaces. Crafting clean, maintainable code and beautiful UI designs using Tailwind CSS and DaisyUI energizes me. I love working with React libraries and exploring modern tools like Firebase and JWT authentication to build secure and scalable applications.
                </p>
                <p>
                    Beyond programming, I’m a creative soul who enjoys painting and expressing ideas through art. I also like exploring the latest tech trends to stay ahead and spend time playing cricket to keep my mind and body balanced. I’m always eager to learn new things, collaborate with like-minded people, and bring ideas to life.
                </p>
                <p>
                    In short, I’m a detail-oriented developer who values both creativity and logic. I believe programming is not just about writing code but about crafting experiences that make people’s lives easier and more enjoyable.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
