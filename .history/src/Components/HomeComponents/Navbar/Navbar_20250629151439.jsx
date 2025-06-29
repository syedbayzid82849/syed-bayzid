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
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    Contact
                </NavLink>
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
                <ul className="menu menu-horizontal px-1 gap-3 fixed border rounded-b-full">
                    {links}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;