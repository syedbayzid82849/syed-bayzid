import React from 'react';
import Hero from '../../Components/HomeComponents/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';
import MainProjectsSection from '../../Components/Projects/MainProjectsSection/MainProjectsSection';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/HomeComponents/Navbar/Navbar';
import Services from '../../Components/Services/Services';

const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <MainProjectsSection></MainProjectsSection>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;