"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "../../../utils";
import { NavLink } from "react-router";


export const Navbar = ({
    className
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    const links = (
        <>
            <li>
                <NavLink to="/" className="text-black">Home</NavLink>
            </li>
            <li>
                <NavLink to="/sendParcel" className="text-black">Send Parcel</NavLink>
            </li>
            <li>
                <NavLink to="/coverage" className="text-black">Coverage</NavLink>
            </li>
            {/* {
                user &&
                <li>
                    <NavLink to="/dashboard" className="text-black">Dashboard</NavLink>
                </li>
            } */}
        </>
    );
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });


    return (
        <AnimatePresence mode="wait" className=''>
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}>
                <ul className="flex space-x-4 list-none">
                    {links}
                </ul>
                <button
                    className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span
                        className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};
export default Navbar;