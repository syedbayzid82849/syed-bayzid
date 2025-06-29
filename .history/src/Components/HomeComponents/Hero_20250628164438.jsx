import {styles} from '../../'
const Hero = () => {
    return (
        <section className="border text-gray-900 dark:text-white transition-colors duration-300">

            <div className="container flex flex-col justify-center mx-auto md:mt-7 lg:mt-10 sm:py-12 lg:flex-row lg:justify-between">
                {/* Left Text Content */}
                <div
                    className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Syed Jaser</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop 3D visuals, user <br className='sm:block hidden' />
                            interfaces and web applications
                        </p>

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
