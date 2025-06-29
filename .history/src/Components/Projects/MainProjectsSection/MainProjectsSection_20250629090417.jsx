import React from 'react';
import hobbyhub1 from '../../../assets/hobbyhub1.png'
import hobbyhub2 from '../../../assets/hobbyhub2.png'
import hobbyhub3 from '../../../assets/hobbyhub3.png'
import hobbyhub4 from '../../../assets/hobbyhub4.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainProjectsSection = () => {
    return (
        <section className="py-10 px-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Projects</h2>

            {/* card  */}

            <div className='border py-10 px-5'>
                <div className=' max-w-full p-3 rounded-md shadow-md bg-gray-900 grid lg:grid-cols-3 gap-3'>
                    <div className='lg:flex lg:items-center '>
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
                    <div className='mt-6 mb-2 lg:border-x-2 lg:border-gray-400 lg:pl-2 '>
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
                    <div className=' flex justify-around ite'>
                        <button type="button" className="h-12 px-4 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-12 px-4 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                        <button type="button" className="h-12 px-4 py-2  font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:transition-3 transition delay-100 duration-300 ease-in-out hover:bg-white  bg-indigo-500">Live show</button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;