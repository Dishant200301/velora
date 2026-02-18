
import GradientBadge from '@/components/ui/GradientBadge';
const logos = [
    { src: '/images/common/icons/application.png', alt: 'Application', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
    { src: '/images/common/icons/company.png', alt: 'Company', className: 'h-10 w-auto opacity-50 grayscale  transition-all duration-300' },
    { src: '/images/common/icons/business.png', alt: 'Business', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
    { src: '/images/common/logos/logoipsum.png', alt: 'Logoipsum', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
    { src: '/images/common/logos/statup-logo.png', alt: 'Startup', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
];

const CareerInvestors = () => {
    // Reusing the logos from TrustSection but displaying them in a static grid if needed, 
    // or just using the marquee if that matches the "industry standard" look better.
    // The reference image shows: "Trusted by Industry-Leading Investors" and then a row/grid of logos.
    // I'll create a simple static grid for variety, assuming they might want to show specific key investors.

    const investors = [
        "Y Combinator", "Sequoia", "Andreessen Horowitz", "Index Ventures", "Greylock"
    ];

    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <GradientBadge variant="primary" className="mb-6">
                    <span className="font-sans font-normal text-white text-sm">OUR INVESTORS</span>
                </GradientBadge>
                <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium font-sans text-white mb-12 leading-tight lg:leading-[60px]">
                    Trusted by Industry Leading<br className='hidden lg:block' />Investors
                </h2>

                <div className="marquee-mask overflow-hidden">
                    <div className="flex animate-marquee [--duration:10s]">
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="mx-10 opacity-100 transition-opacity duration-300 flex-shrink-0"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={logo.className}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerInvestors;

