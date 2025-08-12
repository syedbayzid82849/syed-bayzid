import React from 'react';
import toast from 'react-hot-toast';
import { styles } from '../../../style';
import mainProfile from '../../assets/SB.jpg';

const Hero = () => {
    const handleResumeDownload = () => {
        toast.success('Downloading Resume...');
    };

    return (
        <section
            id="home"
            className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white transition-colors duration-300 min-h-screen flex items-center"
        >
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:py-12 gap-10">
                {/* Left Text Content */}

                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915EFF]">Syed Bayzid</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
                        I am <br className="sm:block hidden" />
                        MERN stack Developer.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-6 mt-6">
                        <a
                            href="/CV of Syed Bayzid.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleResumeDownload}
                            className="px-8 py-3 font-semibold border border-gray-400 rounded text-gray-300 hover:bg-[#915EFF] hover:text-white transition"
                        >
                            Get Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/syed-bayzid-b91343329/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 font-semibold border border-gray-400 rounded text-gray-300 hover:bg-gray-700 transition"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center p-6 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                    <img
                        src={mainProfile}
                        alt="Syed Bayzid Profile"
                        className="rounded-full object-cover w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

                // {/* Left Content */}
                // <motion.div
                //     initial={{ opacity: 0, y: 40 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     transition={{ duration: 0.8 }}
                //     className="space-y-6"
                // >
                //     <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                //         Build Your Dream with <span className="text-blue-500">Creativity</span>
                //     </h1>
                //     <p className="text-gray-300 max-w-md">
                //         A short inspiring description that matches your service.
                //         Showcase your brand with engaging animations and stunning visuals.
                //     </p>

                //     <div className="flex gap-4">
                //         <motion.button
                //             whileHover={{ scale: 1.05 }}
                //             whileTap={{ scale: 0.95 }}
                //             className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
                //         >
                //             Get Started
                //         </motion.button>

                //         <motion.button
                //             whileHover={{ scale: 1.05 }}
                //             whileTap={{ scale: 0.95 }}
                //             className="px-6 py-3 border border-gray-500 rounded-lg font-medium hover:bg-gray-800 transition"
                //         >
                //             Learn More
                //         </motion.button>
                //     </div>
                // </motion.div>

                // {/* Right Image */}
                // <motion.div
                //     initial={{ opacity: 0, scale: 0.8 }}
                //     animate={{ opacity: 1, scale: 1 }}
                //     transition={{ duration: 0.8, delay: 0.3 }}
                //     className="flex justify-center"
                // >
                //     <img
                //         src="https://via.placeholder.com/500"
                //         alt="Hero Graphic"
                //         className="w-full max-w-md rounded-xl shadow-lg"
                //     />
                // </motion.div>


