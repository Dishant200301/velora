

import { useEffect, useRef, useState } from 'react';

const CareerTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [logoTop, setLogoTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;

            // Calculate relative position: (center of screen) - (top of container)
            // This places the element at the center of the screen as we scroll
            let newTop = viewportCenter - rect.top;

            // Clamp value so it stays within the container bounds
            // Subtracting a small buffer (e.g. 20px) to keep it inside nicely if needed
            newTop = Math.max(0, Math.min(newTop, rect.height));

            setLogoTop(newTop);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        // Initial calculation
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, []);

    return (
        <section className="bg-black py-20 overflow-hidden relative">
            <div ref={containerRef} className="max-w-[1140px] mx-auto px-4 xl:px-0 relative">
                {/* Central Dotted Line - Desktop */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 border-l border-dashed border-white/20 hidden lg:block" />

                {/* Left Dotted Line - Mobile */}
                <div className="absolute left-6 top-0 bottom-0 w-[1px] border-l border-dashed border-white/20 lg:hidden" />

                {/* Moving Logo - Desktop */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 hidden lg:block z-20 pointer-events-none transition-transform duration-75 ease-out will-change-transform top-0"
                    style={{ transform: `translateY(${logoTop}px) translateX(-50%)` }}
                >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center p-1 ">
                        <img src="/images/common/logos/logo.jpg" alt="Velora" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>

                {/* Moving Logo - Mobile */}
                <div
                    className="absolute left-6 -translate-x-1/2 lg:hidden z-20 pointer-events-none transition-transform duration-75 ease-out will-change-transform top-0"
                    style={{ transform: `translateY(${logoTop}px) translateX(-50%)` }}
                >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center p-1 ">
                        <img src="/images/common/logos/logo.jpg" alt="Velora" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>

                <div className="space-y-12 lg:space-y-32 pl-12 lg:pl-0">
                    {/* 2023 */}
                    <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
                        <div className="w-full lg:w-1/2 lg:pr-10 flex justify-end">
                            <img
                                src="/images/about/2023.png"
                                alt="2023 Timeline"
                                className="w-full h-auto lg:w-[483px] lg:h-[335px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-10">
                            <h3 className="text-white mb-2 lg:mb-4 font-sans text-[32px] leading-[38px] font-medium">2023</h3>
                            <p className="font-sans text-base leading-[26px] font-normal text-white">
                                Conceived Fusion AI, assembled the founding team, built the core LLM engine, and released an alpha prototype to early testers.
                            </p>
                        </div>
                    </div>

                    {/* 2024 */}
                    <div className="relative flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-20">
                        <div className="w-full lg:w-1/2 lg:pl-10 flex justify-start">
                            <img
                                src="/images/about/2024.png"
                                alt="2024 Timeline"
                                className="w-full h-auto lg:w-[483px] lg:h-[335px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pr-10 text-left lg:text-right">
                            <h3 className="text-white mb-2 lg:mb-4 font-sans text-[32px] leading-[38px] font-medium">2024</h3>
                            <p className="font-sans text-base leading-[26px] font-normal text-white">
                                Opened a closed beta, added 50 + app integrations, launched our no-code workflow builder, and honed the user experience.
                            </p>
                        </div>
                    </div>

                    {/* 2025 */}
                    <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
                        <div className="w-full lg:w-1/2 lg:pr-10 flex justify-end">
                            <img
                                src="/images/about/2025.png"
                                alt="2025 Timeline"
                                className="w-full h-auto lg:w-[483px] lg:h-[335px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-10">
                            <h3 className="text-white mb-2 lg:mb-4 font-sans text-[32px] leading-[38px] font-medium">2025</h3>
                            <p className="font-sans text-base leading-[26px] font-normal text-white">
                                Official public launch with 200 + customers onboarded, $3 M+ in cost savings realized, and enterprise-grade features rolled out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTimeline;

