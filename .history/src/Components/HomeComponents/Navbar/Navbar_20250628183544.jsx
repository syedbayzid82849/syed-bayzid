import React from 'react';
import profile from '../../../assets/profile.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
            <div className="flex justify-between items-center h-16 px-4">
                {/* Left: Logo or profile */}
                <Link to="/profile" className="w-12 h-12">
                    <img
                        className="w-full h-full object-cover rounded-full border-2 border-white"
                        src={profile}
                        alt="Profile"
                    />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 items-center">{links}</ul>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="space-y-2">{links}</ul>
                </div>
            )}
        </nav>

    );
};

export default Navbar;