import Navbar from "daisyui/components/navbar";

const Hero = () => {
    return (
        <section className=" text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                {/* Left Text Content */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
                        Ac mattis
                        <span className="text-indigo-600 dark:text-indigo-400"> senectus </span>
                        erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-700 dark:text-gray-300">
                        Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />
                        turpis pulvinar, est scelerisque ligula sem
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
                        >
                            Suspendisse
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            Malesuada
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="assets/svg/Business_SVG.svg"
                        alt="Business Illustration"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
