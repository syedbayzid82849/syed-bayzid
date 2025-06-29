import React from 'react';
import Hero from '../../Components/HomeComponents/Hero';
import Navbar from '../../Components/HomeComponents/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default HomeLayout;