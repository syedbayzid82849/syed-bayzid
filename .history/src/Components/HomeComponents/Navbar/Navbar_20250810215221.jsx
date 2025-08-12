import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <a
                    href="#home"
                    className="text-[#915EFF]  hover:border-blue-300"
                >
                    Home
                </a>
            </li>
                            <NavLink
                    href="#home"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "text-[#915EFF] hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>
            <li>
                <a
                    href="#about"
                    className="text-[#915EFF]  hover:border-blue-300"
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#skills"
                    className="text-[#915EFF]  hover:border-blue-300"
                >
                    Skills
                </a>
            </li>
            <li>
                <a
                    href="#projects"
                    className="text-[#915EFF]  hover:border-blue-300"
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className="text-[#915EFF]  hover:border-blue-300"
                >
                    Contact
                </a>
            </li>
        </>
    );

    return (
        <div className="navbar shadow-sm ">
            <div className="navbar-start w-auto fixed">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex justify-center flex-1 ">
                <ul className="menu menu-horizontal px-10  gap-3 fixed border border-gray-500 rounded-full">
                    {links}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;