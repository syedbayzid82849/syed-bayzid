import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <>
            <li>
                <a
                    href="#home"
                    className="block px-4 py-2 text-blue-500 font-bold hover:bg-gray-200 rounded"
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#about"
                    className="block px-4 py-2 text-blue-500 font-bold hover:bg-gray-200 rounded"
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#skills"
                    className="block px-4 py-2 text-blue-500 font-bold hover:bg-gray-200 rounded"
                >
                    Skills
                </a>
            </li>
            <li>
                <a
                    href="#projects"
                    className="block px-4 py-2 text-blue-500 font-bold hover:bg-gray-200 rounded"
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className="block px-4 py-2 text-blue-500 font-bold hover:bg-gray-200 rounded"
                >
                    Contact
                </a>
            </li>
        </>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#1f1743] shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-600">MyLogo</div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-6">{links}</ul>

                    {/* Mobile Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
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
                <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
                    <ul className="flex flex-col space-y-1 p-2">{links}</ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
