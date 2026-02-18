
// Generate paths for logos 1-10
const row1Logos = Array.from({ length: 10 }, (_, i) => `/images/common/logos/partners/logo-${i + 1}.svg`);
// Generate paths for logos 11-20
const row2Logos = Array.from({ length: 10 }, (_, i) => `/images/common/logos/partners/logo-${i + 11}.svg`);

const steps = [
  {
    num: '1',
    title: 'Select a trigger',
    desc: 'Choose an event or schedule that kicks off your workflow.',
    image: '/images/home/features/steps-image-1.png',
  },
  {
    num: '2',
    title: 'Connect your apps',
    desc: 'Sync Fusion AI with your tools—CRM, email, Slack, and more.',
    image: '/images/home/features/steps-image-2.png',
  },
  {
    num: '3',
    title: 'Let AI do the work',
    desc: 'Lets Fusion AI execute tasks automatically.',
    image: '/images/home/features/steps-image-3.png',
  },
];

const StepsSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <div className="gradient-badge inline-block mb-6">
            <div className="gradient-badge-inner px-4 py-1.5 font-['Inter'] font-medium text-[14px] leading-[16px] uppercase tracking-wider text-white">
              AI-Driven Features
            </div>
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-[60px] font-medium leading-[1.1] lg:leading-[60px] text-white">
            Automate workflows in<br className="hidden md:block" />three simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group border border-[#191919] p-2 rounded-xl">
              {/* Card Visual Area matching reference UI */}
              <div className="h-[285px] w-full bg-[#050505] rounded-xl overflow-hidden relative mb-6">
                {/* Specific Glows matching reference */}

                {i === 1 ? (
                  <>
                    {/* Background Image for Card 2 */}
                    <div className="absolute inset-0 z-0 p-1">
                      <img src={step.image} alt="" className="w-full h-full object-cover opacity-60 rounded-xl" />
                    </div>

                    {/* Marquee Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center gap-4 py-0 z-10 px-2">
                      {/* Row 1 - Left to Right */}
                      <div className="marquee-mask overflow-hidden rounded-xl">
                        <div className="flex animate-marquee-reverse" style={{ '--duration': '10s' } as React.CSSProperties}>
                          {[...row1Logos, ...row1Logos].map((src, j) => (
                            <div key={j} className="mx-2 flex-shrink-0">
                              <div className="w-16 h-16 rounded-2xl glass-card border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                <img src={src} alt="" className="w-8 h-8 object-contain opacity-100" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Row 2 - Right to Left */}
                      <div className="marquee-mask overflow-hidden rounded-xl">
                        <div className="flex animate-marquee" style={{ '--duration': '10s' } as React.CSSProperties}>
                          {[...row2Logos, ...row2Logos].map((src, j) => (
                            <div key={j} className="mx-2 flex-shrink-0">
                              <div className="w-16 h-16 rounded-2xl glass-card border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                <img src={src} alt="" className="w-8 h-8 object-contain opacity-100" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 z-0 p-1">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>

              {/* Card Text Content */}
              <div className="px-1 ml-2">
                <h3 className="font-['Inter'] text-[22px] font-medium text-white mb-3 tracking-tight">
                  {step.num}. {step.title}
                </h3>
                <p className="font-['Inter'] text-[16px] leading-[26px] text-white font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

