
import GradientBadge from '@/components/ui/GradientBadge';

const teamMembers = [
    {
        name: "Alex Younes",
        role: "Founder & CEO",
        image: "/images/about/team-1.png"
    },
    {
        name: "Muhammad Ramoglu",
        role: "Product Designer",
        image: "/images/about/team-2.png"
    },
    {
        name: "Petr Nuzhnov",
        role: "Backend Engineer",
        image: "/images/about/team-3.png"
    },
    {
        name: "Pablo Pardo",
        role: "Solution Engineer",
        image: "/images/about/team-4.png"
    },
    {
        name: "Benjamin Gorski",
        role: "Head of Marketing",
        image: "/images/about/team-5.png"
    },
    {
        name: "Meryem Cebeci",
        role: "Product Manager",
        image: "/images/about/team-6.png"
    }
];

const CareerTeam = () => {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 xl:px-0 text-center">
                <GradientBadge variant="primary" className="mb-6">
                    <span className="font-sans font-medium text-white text-sm leading-4">OUR TEAM</span>
                </GradientBadge>
                <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium font-sans text-white mb-16 leading-tight lg:leading-[60px]">
                    Meet the Minds Behind {" "}<br className='hidden lg:block' />Our Innovation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="rounded-xl overflow-hidden mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-sans mb-1 text-2xl leading-8 font-medium">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 font-sans text-base leading-[26px] font-normal">
                                        {member.role}
                                    </p>
                                </div>
                                <a href="https://www.linkedin.com" target='_blank' className="mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <img src="/images/common/logos/linkedin.svg" alt="LinkedIn" className="w-10 h-10 brightness-0 invert" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerTeam;

