import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
// import { Button } from './ui/button';
import developerProfile from '../../assets/SB.jpg';
import { Download, ExternalLink, Code, Terminal, Sparkles, Linkedin, Github, Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';

const Hero = () => {
    const handleResumeDownload = () => {
        toast.success('Downloading Resume...', {
            style: {
                background: 'hsl(222 35% 6%)',
                color: 'hsl(210 40% 98%)',
                border: '1px solid hsl(262 83% 70%)',
            },
        });
    };

    const floatingElements = [
        { icon: Code, delay: 0, x: -20, y: -30 },
        { icon: Terminal, delay: 0.2, x: 20, y: -40 },
        { icon: Sparkles, delay: 0.4, x: -30, y: 20 },
    ];

    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/syed-bayzid-b91343329/',
            icon: Linkedin,
            label: 'LinkedIn',
        },
        {
            href: 'https://github.com/syedbayzid82849',
            icon: Github,
            label: 'GitHub',
        },
        {
            href: 'https://www.youtube.com/@SyedBayzid0.1',
            icon: Youtube,
            label: 'YouTube',
        }, 
        {
            href: 'https://twitter.com/syedbayzid',
            icon: Fa,
            label: 'Twitter',
        }
    ];

    return (
        <section id="home" className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-code-purple/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-code-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-code-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-2"
                        >
                            <p className="text-code-cyan font-mono text-lg">Hi there! I'm</p>
                            <h1 className="text-5xl lg:text-7xl font-bold font-sans">
                                <span className="text-foreground">Syed </span>
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-glow">
                                    Bayzid
                                </span>

                            </h1>
                        </motion.div>

                        {/* Typewriter effect subtitle */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="relative">
                                <p className="text-xl lg:text-2xl text-muted-foreground font-mono overflow-hidden whitespace-nowrap border-r-4 border-code-purple animate-typewriter">
                                    MERN Stack Developer
                                </p>
                            </div>
                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                                Crafting beautiful, scalable web applications with modern technologies.
                                Passionate about clean code, user experience, and bringing ideas to life.
                            </p>
                        </motion.div>

                        {/* Action buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            {/* <button
                                onClick={handleResumeDownload}
                                className="group relative bg-gradient-hero hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold px-8 py-6 text-lg"
                                download="Syed_Bayzid_Resume.pdf"
                            >
                                Get Resume
                            </button> */}
                            <button
                                onClick={handleResumeDownload}
                                className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-lg flex items-center justify-center bg-gradient-hero hover:shadow-glow transition-all duration-300"

                            >

                                <span>
                                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                </span>
                                <span>
                                    Get Resume
                                </span>
                            </button>

                            {/* Hire Me */}
                            <button>
                                <a
                                    href="https://www.linkedin.com/in/syed-bayzid-b91343329/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-lg flex items-center justify-center"
                                >
                                    <span>
                                        <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                                    </span>
                                    <span>
                                        Hire Me
                                    </span>
                                </a>
                            </button>
                        </motion.div>
                        {/* সোশ্যাল লিঙ্কস */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="flex space-x-6 mt-8 justify-center lg:justify-start"
                        >
                            {socialLinks.map(({ href, icon: Icon, label }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-code-cyan hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <Icon className="w-8 h-8" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Floating icons */}
                        {floatingElements.map((element, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2 + element.delay, duration: 0.5 }}
                                className="absolute z-10"
                                style={{
                                    left: `${50 + element.x}%`,
                                    top: `${50 + element.y}%`,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: element.delay
                                    }}
                                    className="p-3 bg-card/80 backdrop-blur-sm border border-code-purple/30 rounded-xl shadow-glow"
                                >
                                    <element.icon className="w-6 h-6 text-code-purple" />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Profile image with animations */}
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-hero p-1 opacity-60"
                            />
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 p-2 bg-background rounded-full"
                            >
                                <img
                                    src={developerProfile}
                                    alt="Syed Bayzid - MERN Stack Developer"
                                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-card"
                                />
                            </motion.div>

                            {/* Pulsing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full border-2 border-code-purple/30"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-code-purple/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Hero;
