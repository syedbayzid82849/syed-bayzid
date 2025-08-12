// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="px-5 max-w-6xl py-10 mx-auto md:px-5 bore">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Me</h2>
            <div className=" mx-auto text-lg text-neutral-content space-y-6">
                <p>
                    Hello! I'm <span class="font-semibold text-secondary">Syed Bayzid</span>, a passionate and detail-oriented <strong>MERN Stack Developer</strong>. I love building fast, responsive, and user-friendly web applications using the latest technologies.
                </p>
                <p>
                    I specialize in the full JavaScript stack: <strong>MongoDB, Express.js, React.js, and Node.js</strong>, with a strong emphasis on creating beautiful UIs using <strong>Tailwind CSS, DaisyUI, and React libraries</strong>. I also work with tools like Firebase, JWT authentication, and REST APIs.
                </p>
                <p>
                    My frontend focus includes building pixel-perfect components, animations with AOS and Lottie, and ensuring smooth user experience across all devices. I take pride in crafting clean, maintainable, and reusable code.
                </p>
                <p>
                    Outside of programming, I enjoy painting, exploring tech trends, and playing cricket. I always seek opportunities to grow and love collaborating with creative minds.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
