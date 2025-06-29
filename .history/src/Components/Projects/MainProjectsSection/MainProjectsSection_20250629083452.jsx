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
                <div className='border '>
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
                    <div className=' flex gap-5'>
                        <button className=''>react</button>
                        <button>vite</button>
                        <button>tailwind </button>
                        <button>dysiui</button>
                    </div>
                </div>
                <div className='border flex justify-around'>
                    <button>Live show</button>
                    <button>Details </button>
                    <button>github</button>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;