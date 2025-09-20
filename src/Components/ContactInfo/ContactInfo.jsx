import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactInfo = () => {
    useEffect(() => {
        AOS.init({
            // duration: 1200,
            // once: false,
        });
    }, []);

    return (
        <section
            id="contact"
            className="py-16 px-4 text-slate-100 transition-colors duration-300 overflow-x-hidden"
        >
            <div className="mb-10">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    Contact Me
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-500 max-w-2xl mx-auto text-center "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Fill in the form below to get in touch with me
                </motion.p>
            </div>

            {/* Grid wrapper with max-width */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-300 dark:divide-gray-700 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="pb-4">
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-6 text-left ">
                        <div data-aos="fade-right" className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-blue-600" />
                            <a
                                href="mailto:husains82849@gmail.com"
                                className="text-lg hover:underline"
                            >
                                husains82849@gmail.com
                            </a>
                        </div>

                        <div data-aos="fade-left" className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-blue-600" />
                            <a
                                href="mailto:syedbayzid500@gmail.com"
                                className="text-lg hover:underline"
                            >
                                syedbayzid500@gmail.com
                            </a>
                        </div>

                        <div data-aos="fade-right" className="flex items-center gap-4">
                            <MdPhone className="text-2xl text-green-600" />
                            <a
                                href="tel:+8801703480840"
                                className="text-lg hover:underline"
                            >
                                +880 1703 380 840
                            </a>
                        </div>

                        <div data-aos="fade-left" className="flex items-center gap-4">
                            <MdWhatsapp className="text-2xl text-green-500" />
                            <a
                                href="https://wa.me/8801703480840"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:underline"
                            >
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    noValidate
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                >
                    <label className="block">
                        <span className="mb-1 block">Full name</span>
                        <input
                            type="text"
                            placeholder="Leroy Jenkins"
                            className="py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block">Email address</span>
                        <input
                            type="email"
                            placeholder="leroy@jenkins.com"
                            className="py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block">Message</span>
                        <textarea
                            rows="3"
                            className="w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
                        ></textarea>
                    </label>
                    <button
                        type="button"
                        className="self-center px-8 py-3 text-lg rounded transition-all duration-300 bg-blue-500 text-white hover:bg-white hover:text-black border border-blue-500 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactInfo;
