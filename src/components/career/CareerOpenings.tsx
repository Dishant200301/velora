
import GradientBadge from '@/components/ui/GradientBadge';
import { Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from '../ui/GradientButton';

const positions = [
    {
        title: "Senior Product Designer",
        type: "Full-time",
        location: "Remote (USA timezones)",
        link: "https://linkedin.com/"
    },
    {
        title: "Front-End Engineer",
        type: "Full-time",
        location: "Remote (Global)",
        link: "https://linkedin.com/"
    },
    {
        title: "AI Product Manager",
        type: "Full-time",
        location: "Remote (USA timezones)",
        link: "https://linkedin.com/"
    },
    {
        title: "Customer Success Manager",
        type: "Full-time",
        location: "Remote (USA timezones)",
        link: "https://linkedin.com/"
    }
];

const CareerOpenings = () => {
    return (
        <section className="bg-black py-12 pb-20 md:py-20 md:pb-32 overflow-hidden" id="open-roles">
            <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Heading & Contact */}
                    <div className="w-full lg:w-[40%] flex flex-col items-center text-center lg:items-start lg:text-left">
                        <GradientBadge variant="primary" className="mb-6">
                            <span className="font-sans font-medium text-white text-sm leading-4">CAREERS</span>
                        </GradientBadge>
                        <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium font-sans text-white mb-6 leading-tight lg:leading-[60px]">
                            Current Job {""} <br className='hidden lg:block' />Openings
                        </h2>
                        <div className="mb-8">
                            <h3 className="text-white mb-2 font-sans font-medium text-[18px] leading-7">Got any Questions?</h3>
                            <p className="text-gray-400 font-sans font-normal text-base leading-[26px]">
                                Let us know! Reach out and our team will get right back to you.
                            </p>
                        </div>
                        <Link to="/contact" className="group text-slide-up inline-block w-full md:w-auto px-8 py-3 rounded-xl border border-white/20 text-white font-medium transition-all">
                            <div className="overflow-hidden h-[26px]">
                                <div className="text-slide-inner flex flex-col transition-transform duration-300 group-hover:translate-y-[-26px]">
                                    <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                                        Contact us
                                    </span>
                                    <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                                        Contact us
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right Column: Job List */}
                    <div className="w-full lg:w-[60%] space-y-4">
                        {positions.map((job, index) => (
                            <div key={index} className="group bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-medium text-white mb-4 font-sans">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 font-sans">
                                        <div className="flex items-center gap-2 font-normal text-base leading-[26px] text-[#999999]">
                                            <Clock className="w-4 h-4" />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2 font-normal text-base leading-[26px] text-[#999999]">
                                            <MapPin className="w-4 h-4" />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn text-slide-up inline-flex w-full md:w-auto items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-white font-medium transition-all"
                                >
                                    <div className="overflow-hidden h-[26px]">
                                        <div className="text-slide-inner flex flex-col transition-transform duration-300 group-hover/btn:translate-y-[-26px]">
                                            <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                                                Apply
                                            </span>
                                            <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                                                Apply
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerOpenings;
