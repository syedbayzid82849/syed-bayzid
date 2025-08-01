import React from 'react';
import hobbyhub1 from '../../../assets/hobbyhub1.png'
import hobbyhub2 from '../../../assets/hobbyhub2.png'
import hobbyhub3 from '../../../assets/hobbyhub3.png'
import hobbyhub4 from '../../../assets/hobbyhub4.png'
import academix1 from '../../../assets/academix1.png'
import academix2 from '../../../assets/academix2.png'
import academix3 from '../../../assets/academix3.png'
import academix4 from '../../../assets/academix4.png'
import academix5 from '../../../assets/academix5.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainProjectsSection = () => {
    return (
        <section id='projects' className="py-10 px-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-5">Projects</h2>

            {/* card 1 */}
            <div className='py-3 md:px-5'>
                <div className='max-w-full p-3 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center'>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            {[academix1, academix2, academix3, academix4, academix5].map((img, i) => (
                                <div key={i}>
                                    <img src={img} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 md:pl-2 border-gray-300 dark:border-gray-600'>
                        <h3 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white'>🎓 Academix-Hub</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Academix-Hub is a secure, interactive platform for course enrollment and content management with a clean UI and role-based access.
                        </p>
                        <div className='flex gap-5 py-3'>
                            {['react', 'vite', 'tailwind', 'react icon'].map((tech, i) => (
                                <button key={i} className='px-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200 text-gray-800 dark:text-white'>
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 justify-center items-center md:flex-col md:gap-3'>
                        <ProjectButton url="https://academix-hub.netlify.app/" text="Live show" />
                        <ProjectButton url="https://github.com/syedbayzid82849/Academix-Hub-project?tab=readme-ov-file" text="Github" />
                        <ProjectButton url="https://github.com/syedbayzid82849/Academix-Hub-project/blob/main/README.md" text="Details" />
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className='py-3 md:px-5'>
                <div className='max-w-full p-3 rounded-md shadow-md bg-gray-100 dark:bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center'>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            {[hobbyhub1, hobbyhub2, hobbyhub3, hobbyhub4].map((img, i) => (
                                <div key={i}>
                                    <img src={img} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 md:pl-2 border-gray-300 dark:border-gray-600'>
                        <h3 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white'>🎯 HobbyHub</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            HobbyHub connects users through local hobby groups—create, join, and explore communities based on shared interests like art, games, or sports.
                        </p>
                        <div className='flex gap-5 py-3'>
                            {['react', 'vite', 'tailwind'].map((tech, i) => (
                                <button key={i} className='px-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200 text-gray-800 dark:text-white'>
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 justify-center items-center md:flex-col md:gap-3'>
                        <ProjectButton url="https://hobby-hub-01.netlify.app/" text="Live show" />
                        <ProjectButton url="https://github.com/syedbayzid82849/HobbyHub-project?tab=readme-ov-file" text="Github" />
                        <ProjectButton url="https://github.com/syedbayzid82849/HobbyHub-project/blob/main/README.md" text="Details" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ✅ Reusable ProjectButton Component
const ProjectButton = ({ url, text }) => (
    <button type="button" className="h-10 px-2 py-2 font-semibold border rounded border-gray-800 text-gray-800 dark:border-gray-300 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition delay-100 duration-300 ease-in-out bg-indigo-500">
        <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
    </button>
);

export default MainProjectsSection;
