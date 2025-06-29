import React from 'react';
import Hero from '../../Components/HomeComponents/Hero';
import Navbar from '../../Components/HomeComponents/Navbar/Navbar';
import AboutMe from '../../Components/AboutMe/AboutMe';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';
import MainProjectsSection from '../../Components/Projects/MainProjectsSection/MainProjectsSection';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import Footer from 'daisyui/components/footer';

const HomeLayout = () => {
    return (
        <div className='px-3'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <MainProjectsSection></MainProjectsSection>
            <ContactInfo></ContactInfo>
            <Footer
        </div>
    );
};

export default HomeLayout;