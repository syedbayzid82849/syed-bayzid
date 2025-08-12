import {  Link } from 'react-router';

const bar = () => {
    const links = (
        <>
            <li>
                <
                    href="#home"
                    className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded-md cursor-pointer"
                    activeClassName="text-blue-500 bg-blue-100"
                >
                    Home
                </>
            </li>
            <li>
                <a
                    href="#about"
                    className=" text-blue-500 font-bold hover:border-blue-800"
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#skills"
                    className=" text-blue-500 font-bold hover:border-blue-800"
                >
                    Skills
                </a>
            </li>
            <li>
                <a
                    href="#projects"
                    className=" text-blue-500 font-bold hover:border-blue-800"
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className=" text-blue-500 font-bold hover:border-blue-800"
                >
                    Contact
                </a>
            </li>
        </>
    );

    return (
        <div className="bar shadow-sm ">
            <div className="bar-start w-auto fixed">
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

            <div className="bar-center hidden lg:flex justify-center flex-1 ">
                <ul className="menu menu-horizontal px-10  gap-3 fixed border border-gray-500 rounded-full">
                    {links}
                </ul>
            </div>
        </div>

    );
};

export default bar;