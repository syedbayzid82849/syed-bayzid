import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <section id='contact' className="py-6 text-wh transition-colors duration-300">
            <h1 className="text-4xl font-bold text-center mb-6 text">Contact</h1>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-gray-300 dark:divide-gray-700">
                <div className="py-6 md:py-0 md:px-6">
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-6 text-left">
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-blue-600" />
                            <a href="mailto:husains82849@gmail.com" className="text-lg hover:underline">
                                husains82849@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MdPhone className="text-2xl text-green-600" />
                            <a href="tel:+8801703480840" className="text-lg hover:underline">
                                +880 1703 380 840
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MdWhatsapp className="text-2xl text-green-500" />
                            <a href="https://wa.me/8801703480840" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>

                <form noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
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
