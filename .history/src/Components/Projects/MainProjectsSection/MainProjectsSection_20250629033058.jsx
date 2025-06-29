import React from 'react';

const MainProjectsSection = () => {
    return (
        <section className="py-10 px-5 max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
F
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                <figure className="w-full lg:w-1/3">
                    <img src="project-image-url.jpg" alt="Project" className="h-full w-full object-cover" />
                </figure>
                <div className="card-body w-full lg:w-2/3">
                    <h2 className="card-title">Project Name</h2>
                    <p className="text-sm text-gray-600">Short project description goes here.</p>
                    <div className="card-actions justify-end">
                        <a href="/project-details" className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default MainProjectsSection;