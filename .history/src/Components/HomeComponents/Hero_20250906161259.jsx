import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import developerProfile from '/assets/SB.jpg';
import { Download, ExternalLink, Code, Terminal, Sparkles, Linkedin, Github } from 'lucide-react';
import { Youtube, Facebook } from 'lucide-react';

const Hero = () => {
    const handleResumeDownload = () => {
        toast.success('Downloading Resume...', {
            style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--primary))',
            },
        });
    };

    const floatingElements = [
        { icon: Code, delay: 0, x: -20, y: -30 },
        { icon: Terminal, delay: 0.2, x: 20, y: -40 },
        { icon: Sparkles, delay: 0.4, x: -30, y: 20 },
    ];

    const socialLinks = [
        { href: 'https://www.linkedin.com/in/syed-bayzid-b91343329/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://github.com/syedbayzid82849', icon: Github, label: 'GitHub' },
        { href: 'https://www.youtube.com/@SyedBayzid0.1', icon: Youtube, label: 'YouTube' },
        { href: 'https://www.facebook.com/syed.bayzidhusain/', icon: Facebook, label: 'Facebook' }
    ];

    return (
        <section id="home" className="min-h-screen py-10 text-slate-100 flex items-center justify-center relative overflow-hidden bg-background text-foreground">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto p-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <p className="text-primary font-mono text-lg">Hi there! I'm</p>
                            <h1 className="text-5xl lg:text-7xl font-bold">
                                <span className="">Syed </span>
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Bayzid
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <p className="text-xl lg:text-2xl font-mono overflow-hidden whitespace-nowrap border-r-4 border-primary animate-typewriter">
                                MERN Stack Developer
                            </p>
                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-shadow-gray-600">
                                Crafting beautiful, scalable web applications with modern technologies.
                                Passionate about clean code, user experience, and bringing ideas to life.
                            </p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button
                                onClick={handleResumeDownload}
                                className="group relative border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                Get Resume
                            </button>

                            <a
                                href="https://www.linkedin.com/in/syed-bayzid-b91343329/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                                Hire Me
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="socials-container flex space-x-6 mt-2 justify-center lg:justify-start"
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
                                    className="text-primary hover:text-primary/80 transition-colors"
                                >
                                    <Icon className="w-8 h-8" />
                                </motion.a>
                            ))}
                            <a href="https://github.com/syed-bayzid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/syed-bayzid-b91343329/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                            </a>
                            <a href="https://twitter.com/syed_bayzid" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/syed_bayzid/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            </a>

                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Floating Icons */}
                        {floatingElements.map((element, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2 + element.delay, duration: 0.5 }}
                                className="absolute z-10"
                                style={{ left: `${50 + element.x}%`, top: `${50 + element.y}%` }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: element.delay }}
                                    className="p-3 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl"
                                >
                                    <element.icon className="w-6 h-6 text-primary" />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Profile Image */}
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1 opacity-60"
                            />
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 p-2 bg-background rounded-full"
                            >
                                <img
                                    src={developerProfile}
                                    alt="Syed Bayzid - MERN Stack Developer"
                                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
                                />
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full border-2 border-primary/30"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
