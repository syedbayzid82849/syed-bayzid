import React from 'react';
import heroBg from '../../assets'

const Hero = () => {
    return (
        <div className="bg-cover text-white min-h-screen bg-[url('assets/background.png')] lg:px-[100px] lg:py-[60px] p-[40px]">
            <nav className='flex justify-between items-center'>
                <img src={logo} alt="" />
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
                    <button className='text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]'><a href={resume} download='resume'>Download</a></button>
                </div>
                <div className='lg:relative'>
                    <img className='lg:absolute lg:block hidden top-0 right-0 w-[90px]' src={svg} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;