import { useState } from "react";
import { NavLink } from "react-router";
    import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = (
        <>
            <li>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    className="block px-4 py-2 text-cyan-100 font-bold hover:bg-gray-700 rounded cursor-pointer"
                    activeClass="bg-gray-700"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth duration={500} spy offset={-50} activeClass="bg-gray-700" className="block px-4 py-2 text-cyan-100 font-bold hover:bg-gray-700 rounded cursor-pointer">
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth duration={500} spy offset={-50} activeClass="bg-gray-700" className="block px-4 py-2 text-cyan-100 font-bold hover:bg-gray-700 rounded cursor-pointer">
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth duration={500} spy offset={-50} activeClass="bg-gray-700" className="block px-4 py-2 text-cyan-100 font-bold hover:bg-gray-700 rounded cursor-pointer">
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth duration={500} spy offset={-50} activeClass="bg-gray-700" className="block px-4 py-2 text-cyan-100 font-bold hover:bg-gray-700 rounded cursor-pointer">
                    Contact
                </Link>
            </li>
        </>
    );


    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent shadow-sm z-50  border-b-2 border-blue-500">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16">
                    {/* Logo */}

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-6">{links}</ul>

                    {/* Mobile Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:bg-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6  text-amber-50"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        className="bg-gray-800"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden  shadow-md border-t border-gray-200 bg-gray-800 w-2/3 ">
                    <ul className="flex flex-col space-y-1 p-2">{links}</ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
