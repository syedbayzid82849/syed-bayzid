import React from 'react';
import hobbyhub1 from '../../../assets/hobbyhub1.png'
import hobbyhub2 from '../../../assets/hobbyhub2.png'
import hobbyhub3 from '../../../assets/hobbyhub3.png'
import hobbyhub4 from '../../../assets/hobbyhub4.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainProjectsSection = () => {
    return (
        <section className="py-10 px-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Projects</h2>

            {/* card  */}

            <div>
                <div>
                    <Carousel autoPlay={true} infiniteLoop={true} show>
                        <div>
                            <img src={hobbyhub1} />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={hobbyhub2} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={hobbyhub3} />
                            <p className="legend">Legend 3</p>
                        </div>
                                                <div>
                            <img src={hobbyhub4} />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;