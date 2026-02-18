const features = [
  {
    title: 'Instant, One-Command Actions',
    desc: 'Type an action once—Fusion AI executes it across Slack, WhatsApp, HubSpot, Calendar, and more.',
    bullets: [
      'Draft & send multi-channel messages',
      'Create CRM contacts on the fly',
      'Cancel meetings or raise issues instantly',
    ],
    image: '/images/home/features/Features-images-1.png',
  },
  {
    title: 'No-Code Workflow Builder',
    desc: 'Design complex, multi-step automations with drag-and-drop ease—no coding required.',
    bullets: [
      'Visual workflow canvas',
      'Pre-built action blocks',
      'Conditional logic & branching',
    ],
    image: '/images/home/features/Features-images-2.png',
  },
  {
    title: 'Natural-Language Interaction',
    desc: 'Chat with your AI agents to run tasks, query data, or generate content—just type what you need.',
    bullets: [
      'Context-aware Q&A',
      'Instant task execution',
      'Follow-up action chaining',
    ],
    image: '/images/home/features/Features-images-3.png',
  },
];

const FeatureStack = () => {
  return (
    <section className="section-padding bg-black relative">
      <div className="max-w-[1140px] mx-auto px-4 md:px-24 lg:px-4 xl:px-0">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <div className="gradient-badge inline-block mb-6">
            <div
              className="p-[1px] rounded-[99px]"
              style={{
                background: 'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)'
              }}
            >
              <div className="bg-black px-4 py-1.5 rounded-[14px]">
                <p className="font-sans text-[16px] leading-[14px] font-medium text-white tracking-widest uppercase">
                  AI-Driven Features
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[30px] md:text-[60px] leading-[1.1] md:leading-[60px] font-medium mb-6 text-white font-['General_Sans',_sans-serif]">
            Build, scale and manage {" "} <br className="hidden md:block" />entire AI workforce
          </h2>
          <p className="text-[18px] leading-[28px] font-normal max-w-[720px] mx-auto text-white font-['Inter']">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-12 lg:gap-24 relative">
          {features.map((feature, i) => (
            <div
              key={i}
              className="static lg:sticky transition-all duration-500 will-change-transform"
              style={{
                top: `${120 + i * 0}px`, // Stacking offset
                zIndex: i + 1,
              }}
            >
              <div
                className={`rounded-xl p-4 md:p-8 lg:py-2 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center border border-white/10 bg-black overflow-hidden ${i % 2 === 1 ? 'lg:pr-16 lg:pl-0' : 'lg:pl-16 lg:pr-0'
                  }`}
              >
                {/* Left Content */}
                <div className={`order-2 md:p-2 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-[28px] md:text-[44px] leading-[1.2] md:leading-[53px] font-medium mb-6 text-white font-['General_Sans',_sans-serif]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[26px] font-normal mb-6 md:mb-10 max-w-[500px] text-white font-['Inter']">
                    {feature.desc}
                  </p>

                  <ul className="space-y-6">
                    {feature.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-5 group">
                        <div className="w-8 h-8 rounded-sm bg-black border border-[#191919] flex items-center justify-center flex-shrink-0">
                          <img
                            src="/images/common/icons/star.png"
                            alt="star"
                            className="w-6 h-6 object-contain opacity-80 "
                          />
                        </div>
                        <span className="text-[16px] md:text-[18px] leading-[28px] font-medium text-white font-['Inter']">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className={`order-1 h-[250px] md:h-[500px] lg:h-[450px] w-full md:w-[500px] lg:w-full flex items-center justify-center relative ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}>

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStack;

