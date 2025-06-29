import React, { useState } from 'react';
import heroBg from '../../assets/hero-bg.png'
import { HiMenuAlt1 } from 'react-icons/hi';

const Hero = () => {
    const [click, setClick] = useState('')
    const handleClick = () => setClick(!click);

    const content = <nav className='z-10 lg:hidden fixed top-0 left-0 bottom-0 pt-[50px] bg-[#1c1331] backdrop-filter backdrop-blur-lg bg-opacity-30 w-[300px] flex gap-[20px] flex-col items-center transition ease-out duration-700'>
        <button className="absolute top-[25px] right-[25px] sm:hidden hover:transition" onClick={handleClick}>
            {click && <FaTimes className="text-white" />}
        </button>
        <img className='my-[30px]' src={heroBg} alt="" />
        <ul className='text-[#A6A9B8] text-[18px] flex flex-col gap-[36px]'>
            <li>About</li>
            <li>Case Studies</li>
            <li>Testimonial</li>
            <li>Blogs</li>
        </ul>
        <button className='text-white px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]'>Contact Now</button>
    </nav>
    return (
        <div
            className="bg-cover text-white min-h-screen lg:px-[100px] lg:py-[60px] p-[40px]"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <nav className='flex justify-between items-center'>
                <img src={heroBg} alt="" />
                <ul className='text-[#A6A9B8] text-[18px] lg:flex hidden gap-[36px]'>
                    <li>About</li>
                    <li>Case Studies</li>
                    <li>Testimonial</li>
                    <li>Blogs</li>
                </ul>
                <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] lg:flex hidden'>Contact Now</button>
                {
                    <button className="block sm:hidden hover:transition-none " onClick={handleClick}>
                        {!click && <HiMenuAlt1 className="text-white text-[25px]" />}
                    </button>

                }
            </nav>

            {/*  */}

            {
                click && content
            }

            <div className='pt-[110px] flex justify-between lg:flex-row flex-col-reverse lg:mx-[30px] lg:gap-[160px] gap-[20px] lg:text-start items-center text-center'>
                <div className='lg:w-[50%] w-full'>
                    <h2 className='lg:text-[66px] text-[40px] font-bold whitespace-wrap'><span className='text-[#9D7FDB]'>Welcome</span> to my new Portfolio Website </h2>
                    <p className='py-[40px] text-[20px] text-[#A6A9B8]'>Hello I am Eva. Professional Full-stack Developer. This is my portfolio site here I am presenting my projects and services. Let’s Explore. </p>
                    <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]'><a download='resume'>Download</a></button>
                </div>
                <div className='lg:relative'>
                    <img className='lg:absolute lg:block hidden top-0 right-0 w-[90px]' src={heroBg} alt="" />
                    <img src={\} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;