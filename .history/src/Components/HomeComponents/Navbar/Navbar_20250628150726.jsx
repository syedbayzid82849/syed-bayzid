"use client";

import React, { useState } from "react";
import { cn } from "../../../utils";
import { NavLink } from "react-router"; // ✅ Corrected import
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = ({ className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    // Scroll-based visibility handler
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Send Parcel", to: "/sendParcel" },
        { name: "Coverage", to: "/coverage" },
        // { name: "Dashboard", to: "/dashboard", protected: true }
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "fixed top-10 inset-x-0 mx-auto z-[5000] flex items-center justify-center space-x-6 px-6 py-3 rounded-full shadow-md bg-white dark:bg-black border border-transparent dark:border-white/20 max-w-fit",
                    className
                )}
            >
                <ul className="flex items-center space-x-4 list-none">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    cn(
                                        "text-sm font-medium transition-colors",
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-neutral-600 dark:text-neutral-200 hover:text-black dark:hover:text-white"
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button className="relative text-sm font-medium border border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Navbar;
