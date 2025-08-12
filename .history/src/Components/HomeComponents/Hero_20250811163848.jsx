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
                <div className="max-w-lg text-center lg:text-left space-y-6">
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
