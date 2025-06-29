import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = (
        <>
            <li>
                <NavLink
                    to="/df"
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
            </li>
        </>
    );
    return (
        <>
            <nav className=" border border-gray-500 rounded-full w-full  mt-2">
                <div className=" container flex justify-between items-center h-16 px-4">
                    {/* <Link to="/profile" className=" w-14 h-14  ">
                    <img
                        className=" object-cover rounded-full border-2 border-white "
                        src={profile}
                        alt="Profile"
                    />
                </Link> */}
                    <ul className="items-stretch hidden space-x-3 mx-auto  md:flex ">
                        {
                            links
                        }
                    </ul>
                    
                    <button
                        onClick={() => {
                            setIsOpen(true),
                                document.getElementById("my_modal_2").showModal()

                        }}
                        className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Dropdown Menu */}
            {isOpen && (
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>

            )}
        </>
    );
};

export default Navbar;