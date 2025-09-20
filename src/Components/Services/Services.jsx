import { Code, Smartphone, Palette, Globe, Database, Zap, Users, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";


const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Building responsive and performant web applications using modern technologies and best practices.',
    },
    {
        icon: Code,
        title: 'MERN Stack Development',
        description: 'Building full-stack applications using MongoDB, Express, React, and Node.js for scalable web solutions.',
    },
    {
        icon: Palette,
        title: 'Frontend Development',
        description: 'Creating visually appealing and interactive user interfaces using React, Tailwind CSS, and modern frontend tools.',
    },
    {
        icon: Smartphone,
        title: 'Responsive Design',
        description: 'Designing websites optimized for mobile, tablet, and desktop screens to ensure the best user experience.',
    },
    {
        icon: Globe,
        title: 'API Development',
        description: 'Developing robust and scalable RESTful APIs with comprehensive documentation and security measures.',
    },
    {
        icon: Database,
        title: 'Database Design',
        description: 'Architecting efficient database structures optimized for performance, scalability, and data integrity.',
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Optimizing applications for speed, efficiency, and superior user experience across all devices.',
    },
    {
        icon: Users,
        title: 'Consulting',
        description: 'Providing technical consultation and strategic guidance for your digital transformation projects.',
    },
    {
        icon: Settings,
        title: 'Maintenance & Support',
        description: 'Offering ongoing maintenance, updates, and technical support to ensure optimal system performance.',
    },
];


export default function ServicesSection() {

    const [showAll, setShowAll] = useState(false);

    const cardVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="services" className="container mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="text-center mb-10">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    My Services
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-500 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Here are the services I provide to help you build modern and responsive web solutions.
                </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {(showAll ? services : services.slice(0, 4)).map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <motion.div
                            key={index}
                            className="rounded-xl hover:border-primary/50 transition-colors group bg-gray-900 shadow-sm hover:shadow-lg p-3"
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(59,130,246,0.3)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="flex h-16 w-16 mb-6 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
                                <IconComponent className="h-8 w-8" />
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Show More / Show Less Button */}
            <div className="text-center mt-10">
                <button
                    className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    );
}
