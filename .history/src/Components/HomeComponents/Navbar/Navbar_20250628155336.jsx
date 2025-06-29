import React from 'react';
import profile from '../../../assets/profile.png'
import { Link } from 'react-router';

const Navbar = () => {
    <div class="max-w-6xl mx-auto border"><h2>Unexpected Application Error!</h2><h3 style="font-style: italic;">links is not defined</h3><pre style="padding: 0.5rem; background-color: rgba(200, 200, 200, 0.5);">ReferenceError: links is not defined
    at Navbar (http://localhost:5173/src/Components/HomeComponents/Navbar/Navbar.jsx?t=1751104384262:42:99)
    at react-stack-bottom-frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:17424:20)
    at renderWithHooks (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:4206:24)
    at updateFunctionComponent (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:6619:21)
    at beginWork (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:7654:20)
    at runWithFiberInDEV (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:1485:72)
    at performUnitOfWork (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:10868:98)
    at workLoopSync (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:10728:43)
    at renderRootSync (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:10711:13)
    at performWorkOnRoot (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=58fdd573:10359:46)</pre><p>💿 Hey developer 👋</p><p>You can provide a way better UX than this when your app throws errors by providing your own <code style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);">ErrorBoundary</code> or <code style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);">errorElement</code> prop on your route.</p></div>
    return (
        <nav className="border border-gray-500 rounded-full md:w-2xl mx-auto mt-2">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <Link to="/profile" className=" w-14 h-14 mx-2 ">
                    <img
                        className=" object-cover rounded-full border-2 border-white "
                        src={profile}
                        alt="Profile"
                    />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                {
                    links
                }
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;