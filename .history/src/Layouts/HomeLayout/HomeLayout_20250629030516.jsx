import React from 'react';
import Hero from '../../Components/HomeComponents/Hero';
import Navbar from '../../Components/HomeComponents/Navbar/Navbar';
import AboutMe from '../../Components/AboutMe/AboutMe';

const HomeLayout = () => {
    return (
        <div className='px-3'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <SkillsSection
        </div>
    );
};

export default HomeLayout;