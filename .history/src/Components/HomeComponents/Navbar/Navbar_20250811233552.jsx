import {  Link } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li>
                <a
                    href="#home"
                    className=" text-blue-500 font-bold hover:border-blue-800"
                >
                    Home
                </a>
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
        <div className="Navbar shadow-sm ">
            <div className="Navbar-start w-auto fixed">
            </div>

            <div className="Navbar-center hidden lg:flex justify-center flex-1 ">
                <ul className="menu menu-horizontal px-10  gap-3 fixed border border-gray-500 rounded-full">
                    {links}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;