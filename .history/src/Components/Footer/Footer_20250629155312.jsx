import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">© {new Date().getFullYear()} Syed Bayzid. All rights reserved.</p>
                <div className="flex gap-4 mt-3 md:mt-0">
                    <a href="https://github.com/syedbayzid" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/syedbayzid" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:husains82849">Email</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;