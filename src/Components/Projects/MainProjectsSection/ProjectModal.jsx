import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    // just for WorkStream(team) project
    const coreFeatures =
        [
            { title: "Task Management", description: "Create, assign, and track tasks with deadlines, priorities, and file attachments." },
            { title: "Project Timeline & Milestones", description: "Visualize project progress and set milestones using Gantt charts or calendar views." },
            { title: "File Sharing & Storage", description: "Securely upload and manage project files with version control." },
            { title: "Team Communication", description: "Real-time chat and discussion threads with tagging and notifications." },
            { title: "Collaboration Tools", description: "Comment, review, and discuss tasks and files for better coordination." },
            { title: "Role-based Access Control", description: "Define roles like Manager, Member, and Viewer for secure workflows." },
            { title: "Notifications & Reminders", description: "Automatic alerts for task updates, messages, and deadlines." },
            { title: "Reports & Analytics", description: "Interactive charts showing project progress and team performance." },
            { title: "Search & Filter", description: "Find projects, tasks, or members using filters and keywords." },
            { title: "Attendance", description: "Log attendance, check work hours." },
        ];
    const frontendContributions = [
        { feature: "Landing Page Sections", description: 'Added "Perfect for Every Team" & Contact sections.' },
        { feature: "Animations", description: "Integrated AOS & Lottie animations in Hero and other sections." },
        { feature: "Testimonials", description: "Built dynamic Testimonials section fetching data from MongoDB." },
        { feature: "Auth UI Enhancements", description: "Created animated login/register layouts." },
        { feature: "Forget & Reset Password", description: "Developed responsive UI for password recovery." },
        { feature: "Dashboard Projects", description: "Displayed user-specific projects dynamically." },
        { feature: "GitHub & Email Auth", description: "Integrated continue-with-GitHub feature." },
        { feature: "Real-time Notification Bell", description: "Implemented Socket.io-based live notifications." },
        { feature: "Stripe Payment UI", description: "Built membership payment flow with success page." },
        { feature: "Mobile Responsiveness", description: "Optimized layouts for all devices." },
    ];

    const backendContributions = [
        { feature: "RESTful APIs", description: "Created CRUD APIs for users, projects, and tasks." },
        { feature: "Password Reset System", description: "Secure token-based password recovery." },
        { feature: "Project Filtering", description: "User-specific project fetch API." },
        { feature: "Task Management Endpoints", description: "Added POST, GET, PATCH, DELETE routes." },
        { feature: "Notifications API", description: "Manage real-time message updates (read/unread)." },
        { feature: "Stripe Payment APIs", description: "Handle checkout and membership updates." },
        { feature: "Protected Routes Middleware", description: "Secured routes by verifying user role and auth." },
        { feature: "Profile Update System", description: "Created PUT API for updating user info securely." },
    ];

    const renderTable = (title, data) => (
        <div>
            <h4 className="text-sm font-semibold mb-2">{title} :</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-gray-300 text-sm">
                    <thead className="bg-gray-800 text-gray-200">
                        <tr>
                            <th className="border border-gray-700 px-3 py-2 text-left">#</th>
                            <th className="border border-gray-700 px-3 py-2 text-left">Feature</th>
                            <th className="border border-gray-700 px-3 py-2 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i} className="hover:bg-gray-800 transition-colors">
                                <td className="border border-gray-700 px-3 py-2">{i + 1}</td>
                                <td className="border border-gray-700 px-3 py-2 font-semibold text-purple-300">{item.feature}</td>
                                <td className="border border-gray-700 px-3 py-2">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4 overflow-auto"
            onClick={onClose} // click outside closes modal
        >
            <div
                className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                style={{ maxHeight: "90vh" }} // scrollable if content too long
            >

                {/* Carousel */}
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    {project.images.map((img, i) => (
                        <div key={i}>
                            <img
                                src={img}
                                alt={`${project.name} screenshot ${i + 1}`}
                                className="w-full object-contain"
                            />
                        </div>
                    ))}
                </Carousel>

                {/* Project Info */}
                <div className="p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {project.name}
                    </h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 flex-wrap mb-6">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 lg:w-auto bg-gray-800 hover:bg-purple-800 text-gray-400 px-6 py-2 rounded-xl text-sm lg:text-lg text-center font-semibold"
                        >
                            View Code
                        </a>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 lg:w-auto bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm lg:text-lg text-center font-semibold"
                        >
                            View Live
                        </a>
                    </div>
                    {
                        project.projectType && (
                            <p className="mt-2 text-gray-400">
                                <strong>Project Type:</strong> {project.projectType}
                            </p>
                        )
                    }
                    {
                        project.purpose && (
                            <p className="mt-2 text-gray-400">
                                <strong>Purpose:</strong> {project.purpose}
                            </p>
                        )
                    }
                    {/* ✅ Contributions Tables */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold text-purple-400 mb-3">My Contributions</h4>
                        {renderTable("Frontend ", frontendContributions)}
                        {renderTable("Backend ", backendContributions)}
                    </div>

                    {/* ✅ Core Features Table */}
                    {coreFeatures && project._id === "689c5cc539a53de75a9d0f25" && (
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-purple-400 mb-3">
                                Core Features
                            </h4>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-700 text-gray-300 text-sm">
                                    <thead className="bg-gray-800 text-gray-200">
                                        <tr>
                                            <th className="border border-gray-700 px-3 py-2 text-left">#</th>
                                            <th className="border border-gray-700 px-3 py-2 text-left">Feature</th>
                                            <th className="border border-gray-700 px-3 py-2 text-left">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {coreFeatures.map((feature, i) => (
                                            <tr
                                                key={i}
                                                className="hover:bg-gray-800 transition-colors"
                                            >
                                                <td className="border border-gray-700 px-3 py-2">
                                                    {i + 1}
                                                </td>
                                                <td className="border border-gray-700 px-3 py-2 font-semibold text-purple-300">
                                                    {feature.title}
                                                </td>
                                                <td className="border border-gray-700 px-3 py-2">
                                                    {feature.description}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ✅ Challenges and Future Plans */}
                    {
                        project.challenges && (

                            <p className="mt-2 text-gray-400">
                                <strong>Challenges:</strong> {project.challenges}
                            </p>
                        )
                    }

                    {
                        project.futurePlans && (
                            <p className="mt-2 text-gray-400">
                                <strong>Future Plans:</strong> {project.futurePlans}
                            </p>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
