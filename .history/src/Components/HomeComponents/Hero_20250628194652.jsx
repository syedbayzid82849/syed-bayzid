import { styles } from '../../../style';
import mainProfile from '../../assets/SB.jpg'
const Hero = () => {
    return (
        <section className=" text-gray-900 dark:text-white transition-colors duration-300">

            <div className="container flex flex-col justify-center mx-auto  sm:py-12 lg:flex-row  lg:justify-between items-center">
                {/* Left Text Content */}
                <div className="  px-5 ">
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white `}>
                            Hi, I'm <span className='text-[#915EFF]'>Syed Bayzid</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I am <br className='sm:block hidden' />
                            MEr
                        </p>

                    </div>
                    
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center  p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                    <img
                        src={mainProfile}
                        alt="Business Illustration"
                        className="rounded-full object-contain w-70"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
