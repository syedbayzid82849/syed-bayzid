import { styles } from '../../../style';
import mainProfile from '../../assets/SB.jpg'
const Hero = () => {
    return (
        <section className="border text-gray-900 dark:text-white transition-colors duration-300">

            <div className="container flex flex-col justify-center mx-auto md:mt-7 lg:mt-10 sm:py-12 lg:flex-row lg:justify-between">
                {/* Left Text Content */}
                <div className=" border flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white `}>
                            Hi, I'm <span className='text-[#915EFF]'>Syed Jaser</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop 3D visuals, user <br className='sm:block hidden' />
                            interfaces and web applications
                        </p>

                    </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center  p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border">
                    <img
                        src={mainProfile}
                        alt="Business Illustration"
                        className="rounded-full object-contain w-"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
