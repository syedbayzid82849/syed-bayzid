import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <section id="contact" className="bg-white dark:bg-gray-900 py-10 px-4 md:px-20">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>

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
        </section>
    );
};

export default ContactInfo;
