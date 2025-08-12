import { Link } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <a href="#home" className="text-blue-500 font-bold hover:border-blue-800">
                    Home
                </a>
            </li>
            <li>
                <a href="#about" className="text-blue-500 font-bold hover:border-blue-800">
                    About
                </a>
            </li>
            <li>
                <a href="#skills" className="text-blue-500 font-bold hover:border-blue-800">
                    Skills
                </a>
            </li>
            <li>
                <a href="#projects" className="text-blue-500 font-bold hover:border-blue-800">
                    Projects
                </a>
            </li>
            <li>
                <a href="#contact" className="text-blue-500 font-bold hover:border-blue-800">
                    Contact
                </a>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
            {/* Mobile Dropdown */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>
            </div>

            {/* Center Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-10 gap-3 border border-gray-500 rounded-full">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
