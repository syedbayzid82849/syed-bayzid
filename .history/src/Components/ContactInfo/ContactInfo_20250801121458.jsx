import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <section id='contact' className="py-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact</h1>

            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                {/* Contact Info Section */}
                <div className="py-6 md:py-0 md:px-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                    <p className="pt-2 pb-4 text-gray-700 dark:text-gray-300">Fill in the form to start a conversation</p>
                    <div className="space-y-6 text-left">
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-blue-600" />
                            <a href="mailto:husains82849@gmail.com" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">
                                husains82849@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MdPhone className="text-2xl text-green-600" />
                            <a href="tel:+8801703480840" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">
                                +880 1703 380 840
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MdWhatsapp className="text-2xl text-green-500" />
                            <a href="https://wa.me/8801703480840" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 dark:text-gray-300 hover:underline">
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block text-gray-800 dark:text-gray-200">
                        <span className="mb-1 block">Full name</span>
                        <input
                            type="text"
                            placeholder="Leroy Jenkins"
                            className="py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-100 text-gray-800 placeholder:text-gray-500"
                        />
                    </label>

                    <label className="block text-gray-800 dark:text-gray-200">
                        <span className="mb-1 block">Email address</span>
                        <input
                            type="email"
                            placeholder="leroy@jenkins.com"
                            className="py-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-100 text-gray-800 placeholder:text-gray-500"
                        />
                    </label>

                    <label className="block text-gray-800 dark:text-gray-200">
                        <span className="mb-1 block">Message</span>
                        <textarea
                            rows="3"
                            placeholder="Write your message..."
                            className="w-full rounded-md py-2 px-2 focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-100 text-gray-800 placeholder:text-gray-500"
                        ></textarea>
                    </label>

                    <button
                        type="button"
                        className="bg-blue-500 text-white hover:bg-white hover:text-black self-center px-8 py-3 text-lg rounded transition duration-300 focus:ring hover:ring focus:ring-opacity-75 dark:bg-default-600 dark:text-gray-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactInfo;
