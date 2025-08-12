import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Dream with <span className="text-blue-500">Creativity</span>
          </h1>
          <p className="text-gray-300 max-w-md">
            A short inspiring description that matches your service. 
            Showcase your brand with engaging animations and stunning visuals.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-500 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Graphic"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
