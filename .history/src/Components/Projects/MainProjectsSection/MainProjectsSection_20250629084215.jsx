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

            <div className='border max-w-full p-3 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900'>
                <div className=' '>
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
                <div className='mt-6 mb-2'>
                    <h3 className='text-xl font-semibold tracking-wide'>Project Title</h3>
                    <p>
                        A brief overview of what ths project is about.
                        React Tailwind Firebase-A brief overview of what ths project is about.
                        React Tailwind Firebase
                    </p>
                    <div className=' flex gap-5 py-2'>
                        <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>react</button>
                        <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>vite</button>
                        <button className='px-4  bg-white/10  border border-white/20 backdrop-blur-md rounded-full shadow-sm hover:bg-white/20 transition duration-200'>tailwind</button>
                    </div>
                </div>
                <div className=' flex justify-around'>
                    <button type="button" className="px-4 py-1 font-semibold border rounded dark:border-gray-800 dark:text-gray-800  hover:bg-indigo-500">Live show</button>
                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Details</button>
                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">github</button>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;