"use client";

import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../../utils";

const navLinks = [
    { name: "Home", to: "/" },
    { name: "Send Parcel", to: "/sendParcel" },
    { name: "Coverage", to: "/coverage" },
];

const Navbar = ({ className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -80 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "fixed top-5 inset-x-0 mx-auto z-[1000] px-6 py-3 rounded-full shadow-md bg-white dark:bg-black border dark:border-white/20 max-w-max flex items-center justify-center space-x-6",
                    className
                )}
            >
                <ul className="flex space-x-4 list-none">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    cn(
                                        "text-sm font-medium transition-colors duration-200",
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative text-sm font-medium border border-neutral-200 dark:border-white/30 text-black dark:text-white px-4 py-2 rounded-full"
                >
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Navbar;
