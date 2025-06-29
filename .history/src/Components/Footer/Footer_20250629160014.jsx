import React from 'react';
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="dark:bg-gray-100 bg-gray-900 text-white py-6"
        >
            <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-4 space-y-6 md:space-y-0 md:space-x-6">
                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                    <a href="#" title="Instagram" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" title="Pinterest" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#" title="Twitter" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" title="Facebook" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" title="Gmail" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs mt-4">
                © {new Date().getFullYear()} Syed Bayzid. All rights reserved.
            </div>
        </motion.footer>


    );
};

export default Footer;