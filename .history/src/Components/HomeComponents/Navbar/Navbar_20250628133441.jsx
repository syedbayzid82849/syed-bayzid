import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../../assets/github.png"; 
import github from "../../../assets/github.png";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Testimonial", href: "#testimonials" },
        { name: "Blogs", href: "#blogs" },
    ];

    return (
        <nav className="p-4 bg-white shadow-md dark:bg-gray-900 dark:text-white fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
                    <span className="text-lg font-bold hidden sm:block">Syed Bayzid</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="px-4 py-2 hover:text-blue-500 transition duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex gap-4">
                    <a href="https://www.linkedin.com/in/ahmedullahsyed/" target="_blank" rel="noopener noreferrer">
                        <img src='{linkedin}' alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/syedahmedullah14" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/syed_ahmedullah" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="X" className="w-6 h-6" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={() => setToggle(!toggle)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={toggle ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {toggle && (
                <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-4 pb-6 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block text-base font-medium hover:text-blue-500"
                            onClick={() => setToggle(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Mobile social icons */}
                    <div className="flex gap-4 pt-4">
                        <a href="https://www.linkedin.com/in/ahmedullahsyed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/syedahmedullah14" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-6 h-6" />
                        </a>
                        <a href="https://x.com/syed_ahmedullah" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="X" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
