import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <section className="py-6 ">
            <h1 className="text-4xl font-bold text-center mb-6 ">Contact</h1>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
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
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className=" py w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100 text-black" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block py w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100 text-black" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100 text-black"></textarea>
                    </label>
                    <button type="button" className="bg-blue-500 hover:bg-white hover:text-black self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-default-600 dark:text-gray-50 focus:dark:ring-default-600 hover:dark:ring-default-600">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactInfo;
