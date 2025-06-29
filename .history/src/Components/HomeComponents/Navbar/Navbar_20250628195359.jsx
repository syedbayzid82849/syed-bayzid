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
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-[#915EFF] hover:border-b-2 hover:border-blue-300"
                    }
                >
                    HSome
                </NavLink>
            </li>
        </>
    );
    return (
        <>
            <nav className="border border-gray-500 rounded-full w-full mt-2">
                <div className="container flex justify-between items-center h-16 px-4">
                    <ul className="items-stretch hidden space-x-3 mx-auto md:flex">
                        {links}
                    </ul>

                    {/* ✅ Modal Trigger for Mobile */}
                    <label htmlFor="my_modal_7" className="md:hidden p-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </div>
            </nav>

            {/* ✅ DaisyUI Modal */}
            <input type="checkbox" id="my_modal_7" className=" modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <ul className="space-y-2 mx-auto">
                        {links}
                    </ul>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    );
};

export default Navbar;