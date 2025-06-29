import useRotatingAnimation from 'hooks/useRotatingAnimation'
import useRoleSwitcher from 'hooks/useRoleSwitcher'

const HomeLayout = () => {
    const ellipseRef = useRotatingAnimation()
    const role = useRoleSwitcher({
        roles: ['FULLSTACK DEVELOPER', 'INDIE HACKER', 'SOLOPRENEUR'],
    })

    return (
        <section className="min-h-[calc(dvh-4rem)] bg-[#011627] bg-no-repeat">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
                <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
                    <h1>
                        <span className="mb-2 block text-3xl font-bold text-white">Hi - I'm John Doe</span>
                        <span className="block text-[1.75rem] font-bold text-[#18F2E5]">{role}</span>
                    </h1>

                    <h2 className="mt-3 text-xl text-white">
                        Crafting innovative solutions to solve real-world problems
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-6">
                        <a
                            href="#"
                            aria-label="Connect with me"
                            className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
                        >
                            Hire Me
                        </a>
                        <a
                            href="#"
                            aria-label="View LinkedIn Profile"
                            className="cursor-pointer rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-sm text-white"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
                    <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
                        <img
                            src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
                            alt="John Doe - Full Stack Developer"
                            className="absolute top-0 left-0 h-full w-full object-contain p-7"
                        />
                        {/* SVG Ellipse */}
                        <div
                            ref={ellipseRef}
                            className="absolute top-0 left-0 h-full w-full will-change-transform"
                        >
                            <svg
                                className="h-full w-full"
                                viewBox="0 0 412 413"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="206"
                                    cy="206.401"
                                    r="204.5"
                                    stroke="#18F2E5"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="18 36 54 72"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default H