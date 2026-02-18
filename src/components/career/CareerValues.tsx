
import GradientBadge from '@/components/ui/GradientBadge';

const CareerValues = () => {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
                <div className="text-center mb-16">
                    <GradientBadge variant="primary" className="mb-6">
                        <span className="font-sans font-medium leading-4 text-white text-sm">
                            OUR VALUE
                        </span>
                    </GradientBadge>
                    <h2 className="text-3xl md:text-5xl lg:text-[60px] font-medium font-sans text-white mb-4 leading-tight lg:leading-[60px]">
                        Values That Power Our {" "}<br className='hidden md:block' />Innovation
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Mission Card */}
                    <div className="bg-[#050505] border border-white/10 rounded-2xl p-4 relative overflow-hidden group transition-all duration-300">
                        <div className="w-full h-[240px] mb-8 rounded-xl overflow-hidden relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/about/our-value-bg.png')]" />
                            <img
                                src="/images/about/Mission-value.png"
                                alt="Our Mission"
                                className="relative z-10 w-auto h-[80px] object-contain"
                            />
                        </div>
                        <h3 className="text-white mb-4 font-sans text-2xl leading-8 font-medium">Our Mission</h3>
                        <p className="text-white font-sans text-base leading-[26px] font-normal">
                            To democratize AI automation, empowering teams to build and deploy intelligent workflows without writing a single line of code.
                        </p>
                    </div>

                    {/* Excellence Card */}
                    <div className="bg-[#050505] border border-white/10 rounded-2xl p-4 relative overflow-hidden group transition-all duration-300">
                        <div className="w-full h-[240px] mb-8 rounded-xl overflow-hidden relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/about/our-value-bg.png')]" />
                            <img
                                src="/images/about/Excellence-value.png"
                                alt="Executional Excellence"
                                className="relative z-10 w-auto h-[80px] object-contain"
                            />
                        </div>
                        <h3 className="text-white mb-4 font-sans text-2xl leading-8 font-medium">Executional Excellence</h3>
                        <p className="text-white font-sans text-base leading-[26px] font-normal">
                            We fuse cutting-edge LLM intelligence, rock-solid security, and seamless integrations to ensure flawless performance at any scale.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#050505] border border-white/10 rounded-2xl p-4 relative overflow-hidden group transition-all duration-300">
                        <div className="w-full h-[240px] mb-8 rounded-xl overflow-hidden relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/about/our-value-bg.png')]" />
                            <img
                                src="/images/about/Vision-value.png"
                                alt="Our Vision"
                                className="relative z-10 w-auto h-[80px] object-contain"
                            />
                        </div>
                        <h3 className="text-white mb-4 font-sans text-2xl leading-8 font-medium">Our Vision</h3>
                        <p className="text-white font-sans text-base leading-[26px] font-normal">
                            To pioneer a future where AI agents power every business process—making operations smarter, faster, and truly autonomous.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerValues;

