import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <section id="contact" className="py-10 px-6 bg-white dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact</h1>

            <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-300 dark:divide-gray-700">
                {/* Left: Contact Info */}
                <div className="py-6 md:px-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Information</h2>
                    <p className="text-gray-700 dark:text-gray-400 mb-6">Fill in the form to start a conversation</p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-blue-600" />
                            <a href="mailto:husains82849@gmail.com" className="text-lg text-gray-800 dark:text-gray-300 hover:underline">
                                husains82849@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdPhone className="text-2xl text-green-600" />
                            <a href="tel:+8801703480840" className="text-lg text-gray-800 dark:text-gray-300 hover:underline">
                                +880 1703 380 840
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdWhatsapp className="text-2xl text-green-500" />
                            <a href="https://wa.me/8801703480840" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-800 dark:text-gray-300 hover:underline">
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <form noValidate className="flex flex-col py-6 space-y-6 md:px-6">
                    <label className="block">
                        <span className="mb-1 block text-gray-800 dark:text-gray-200">Full Name</span>
                        <input
                            type="text"
                            placeholder="Leroy Jenkins"
                            className="w-full px-4 py-2 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-gray-800 dark:text-gray-200">Email Address</span>
                        <input
                            type="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-4 py-2 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring focus:ring-blue-300"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-gray-800 dark:text-gray-200">Message</span>
                        <textarea
                            rows="4"
                            placeholder="Type your message..."
                            className="w-full px-4 py-2 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring focus:ring-blue-300"
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="self-start px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactInfo;
