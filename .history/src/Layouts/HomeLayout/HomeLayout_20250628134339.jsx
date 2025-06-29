import React from 'react';
import Hero from '../../Components/HomeComponents/Hero';
import Navbar from 'daisyui/components/';

const HomeLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
        </>
    );
};

export default HomeLayout;