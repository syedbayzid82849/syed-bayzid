import React from 'react';
import hobbyhub1 from '../../../assets/hobbyhub1.png'
import hobbyhub2 from '../../../assets/hobbyhub2.png'
import hobbyhub3 from '../../../assets/hobbyhub3.png'
import hobbyhub4 from '../../../assets/hobbyhub4.png'
import academix1 from '../../../assets/academix1.png'
import academix2 from '../../../assets/hobbyhub2.png'
import academix3 from '../../../assets/hobbyhub3.png'
import academix4 from '../../../assets/hobbyhub4.png'
import academix5 from '../../../assets/hobbyhub5.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainProjectsSection = () => {
    return (
        <section className="py-10 px-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-5">Projects</h2>

            {/* card 1 */}

            <div className=' py-3 md:px-5'>
                <div className=' max-w-full p-3 rounded-md shadow-md bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center '>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            <div>
                                <img src={academix1} />
                            </div>
                            <div>
                                <img src={academix2} />
                            </div>
                            <div>
                                <img src={academix3} />
                            </div>
                            <div>
                                <img src={hobbyhub4} />
                            </div>
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 lg:border-gray-400 md:pl-2 '>
                        <h3 className='text-2xl font-semibold tracking-wide'>🎓 Academix-Hub</h3>
                        <p>
                            Academix-Hub is a secure, interactive platform for course enrollment and content management with a clean UI and role-based access.
                        </p>
                        <div className=' flex gap-5 py-3'>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>react</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>vite</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>tailwind</button>
                        </div>
                    </div>
                    <div className=' flex flex-row flex-wrap gap-2 justify-center items-center  md:flex-col md:gap-3'>
                        <button type="button" className="h-10 px-2 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500"><a href="https://academix-hub.netlify.app/">Live show</a></button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500"><a href="https://github.com/syedbayzid82849/Academix-Hub-project?tab=readme-ov-file">github</a></button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500"><a href="https://github.com/syedbayzid82849/Academix-Hub-project/blob/main/README.md">Details</a></button>
                    </div>
                </div>
            </div>
            {/* card 2 */}
            <div className=' py-3 md:px-5'>
                <div className=' max-w-full p-3 rounded-md shadow-md bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center '>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            <div>
                                <img src={hobbyhub1} />
                            </div>
                            <div>
                                <img src={hobbyhub2} />
                            </div>
                            <div>
                                <img src={hobbyhub3} />
                            </div>
                            <div>
                                <img src={hobbyhub4} />
                            </div>
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 lg:border-gray-400 md:pl-2 '>
                        <h3 className='text-2xl font-semibold tracking-wide'>Project Title</h3>
                        <p>
                            A brief overview of what ths project is about.
                            React Tailwind Firebase-A brief overview of what ths project is about.
                            React Tailwind Firebase
                        </p>
                        <div className=' flex gap-5 py-3'>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>react</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>vite</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>tailwind</button>
                        </div>
                    </div>
                    <div className=' flex flex-row flex-wrap gap-2 justify-center items-center  md:flex-col md:gap-3'>
                        <button type="button" className="h-10 px-2 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                    </div>
                </div>
            </div>
            {/* card 3  */}
            <div className=' py-3 md:px-5'>
                <div className=' max-w-full p-3 rounded-md shadow-md bg-gray-900 grid md:grid-cols-3 gap-3'>
                    <div className='md:flex md:items-center '>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                            <div>
                                <img src={hobbyhub1} />
                            </div>
                            <div>
                                <img src={hobbyhub2} />
                            </div>
                            <div>
                                <img src={hobbyhub3} />
                            </div>
                            <div>
                                <img src={hobbyhub4} />
                            </div>
                        </Carousel>
                    </div>
                    <div className='mt-6 mb-2 md:border-l-2 lg:border-gray-400 md:pl-2 '>
                        <h3 className='text-2xl font-semibold tracking-wide'>Project Title</h3>
                        <p>
                            A brief overview of what ths project is about.
                            React Tailwind Firebase-A brief overview of what ths project is about.
                            React Tailwind Firebase
                        </p>
                        <div className=' flex gap-5 py-3'>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>react</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>vite</button>
                            <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>tailwind</button>
                        </div>
                    </div>
                    <div className=' flex flex-row flex-wrap gap-2 justify-center items-center  md:flex-col md:gap-3'>
                        <button type="button" className="h-10 px-2 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-10 px-2 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;