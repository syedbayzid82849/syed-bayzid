import React from 'react';
import profile from '../../../assets/profile.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="border border-gray-500 rounded-full md:w-2xl mx-auto mt-2">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <Link to="/profile" className=" w-14 h-14 mx ">
                    <img
                        className=" object-cover rounded-full border-2 border-white "
                        src={profile}
                        alt="Profile"
                    />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-default-600 dark:border-default-600">Link</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;