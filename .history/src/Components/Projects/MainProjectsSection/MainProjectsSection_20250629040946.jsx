import React from 'react';
import hobbyhub1 from '../../../assets'
import hobbyhub1 from '../../../assets'
import hobbyhub1 from '../../../assets'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'daisyui/components/carousel';


const MainProjectsSection = () => {
    return (
        <section className="py-10 px-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Projects</h2>

            {/* card  */}

            <div>
                <div>
                    <Carousel>
                        <div>
                            <img src="assets/1.jpeg" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/2.jpeg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/3.jpeg" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;