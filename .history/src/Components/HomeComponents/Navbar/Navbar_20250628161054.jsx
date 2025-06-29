import React from 'react';
import profile from '../../../assets/profile.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>

            </li>




        </>
    );
    return (
        <nav className=" fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="w-full md:max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
                <Link to="/profile" className=" w-14 h-14  ">
                    <img
                        className=" object-cover rounded-full border-2 border-white "
                        src={profile}
                        alt="Profile"
                    />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex ">
                    {
                        links
                    }
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