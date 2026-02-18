
import GradientBadge from '@/components/ui/GradientBadge';

const images = [
    '/images/about/team_culture-1.png',
    '/images/about/team_culture-2.png',
    '/images/about/team_culture-3.png',
    '/images/about/team_culture-4.png',
];

const CareerCulture = () => {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16">
                    <GradientBadge variant="primary" className="mb-6">
                        <span className="font-sans font-medium text-white text-sm leading-4">TEAM CULTURE</span>
                    </GradientBadge>
                    <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium font-sans text-white leading-tight lg:leading-[60px]">
                        Collaboration, Community,{" "}<br className='hidden lg:block' />Commitment Define Our{" "}<br className='hidden lg:block' />Culture
                    </h2>
                </div>

                <div className="relative overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    {/* Infinite Marquee */}
                    <div className="flex animate-marquee [--duration:10s]">
                        {[...images, ...images, ...images].map((src, index) => (
                            <div key={index} className="flex-shrink-0 mx-2 md:mx-2 w-[300px] h-[300px] md:w-[450px] md:h-[300px] lg:w-[652px] lg:h-[435px]">
                                <img
                                    src={src}
                                    alt={`Team Culture ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerCulture;

