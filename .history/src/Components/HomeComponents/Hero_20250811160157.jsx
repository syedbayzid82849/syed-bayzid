import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { FloatingCodeBlocks } from "../components/FloatingCodeBlocks";
import mainProfile from "../assets/SB.jpg";

const HeroSection = () => {
    const handleResumeDownload = () => {
        toast.success("Downloading Resume...");
    };

    const words = [
        { text: "Hi,", className: "text-hero-primary" },
        { text: "I'm" },
        { text: "Syed" },
        { text: "Bayzid", className: "text-hero-secondary" },
        { text: "MERN" },
        { text: "stack" },
        { text: "Developer", className: "text-hero-primary" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
            {/* Background gradient */}
            <div className="absolute inset-0 hero-gradient opacity-30" />

            {/* Floating code blocks */}
            <FloatingCodeBlocks />

            <div className="container relative z-10 mx-auto px-4 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
                {/* Left Text */}
                <div className="text-center lg:text-left space-y-6">
                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Hi, I'm <span className="text-[#915EFF]">Syed Bayzid</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-muted-foreground"
                    >
                        MERN Stack Developer passionate about building modern web apps.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="/CV of Syed Bayzid.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleResumeDownload}
                        >
                            <Button
                                size="lg"
                                className="group bg-hero-primary hover:bg-hero-primary/90 text-primary-foreground font-semibold"
                            >
                                Get Resume
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/syed-bayzid-b91343329/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-hero-secondary text-hero-secondary hover:bg-hero-secondary hover:text-accent-foreground font-semibold"
                            >
                                Hire Me
                            </Button>
                        </a>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center justify-center p-6"
                >
                    <img
                        src={mainProfile}
                        alt="Syed Bayzid"
                        className="rounded-full object-cover w-60 h-60 lg:w-80 lg:h-80 border-4 border-hero-primary shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
