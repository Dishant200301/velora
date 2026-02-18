
import GradientBadge from '@/components/ui/GradientBadge';
import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const startValue = 0;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * (end - startValue) + startValue));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const CareerHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-42 md:pb-32 overflow-hidden">
            {/* Background Image similar to Contact page */}
            <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />

            <div className="max-w-[1140px] mx-auto px-4 xl:px-0 relative z-10">
                <div className="max-w-4xl mb-12 text-center lg:text-left">
                    <GradientBadge variant="primary" className="mb-6">
                        <span className="font-sans font-medium leading-4 text-white text-sm">
                            ABOUT US
                        </span>
                    </GradientBadge>
                    <h1 className="text-3xl md:text-6xl lg:text-[76px] font-medium font-sans text-white mb-8 leading-tight lg:leading-[76px]">
                        Empowering Growth{""} <br className='hidden lg:block' />
                        Through Scalable AI{""} <br className='hidden lg:block' />
                        Solutions{""}
                    </h1>
                </div>

                <div className="relative rounded-xl overflow-hidden mb-12 group">
                    <img
                        src="/images/about/collaboration.png"
                        alt="Team collaboration"
                        width="810"
                        height="485"
                        className="w-full h-auto object-cover transition-transform duration-700 aspect-[810/485]"
                    />
                </div>

                {/* Stats Cards - Separate from image */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                    <div className="bg-[#110e0b] border border-[#262526] rounded-2xl p-6 md:p-8 flex flex-col justify-end h-auto md:h-[170px]">
                        <div className="text-white mb-2 text-4xl lg:text-[60px] leading-tight lg:leading-normal">
                            <CountUp end={200} suffix="+" />
                        </div>
                        <div className="text-gray-400 font-sans tracking-tight text-sm lg:text-base font-normal leading-[26px]">AI Implementations</div>
                    </div>
                    <div className="bg-[#110e0b] border border-[#262526] rounded-2xl p-6 md:p-8 flex flex-col justify-end h-auto md:h-[170px]">
                        <div className="text-white mb-2 text-4xl lg:text-[60px] leading-tight lg:leading-normal">
                            $<CountUp end={3} suffix="M+" />
                        </div>
                        <div className="text-gray-400 font-sans tracking-tight text-sm lg:text-base font-normal leading-[26px]">Cost Savings</div>
                    </div>
                    <div className="bg-[#110e0b] border border-[#262526] rounded-2xl p-6 md:p-8 flex flex-col justify-end h-auto md:h-[170px]">
                        <div className="text-white mb-2 -ml-1 text-4xl lg:text-[60px] leading-tight lg:leading-normal">
                            <CountUp end={10} suffix="x" />
                        </div>
                        <div className="text-gray-400 font-sans tracking-tight text-sm lg:text-base font-normal leading-[26px]">Productivity Boost</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;

