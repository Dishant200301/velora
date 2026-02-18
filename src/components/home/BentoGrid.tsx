import GradientBadge from '@/components/ui/GradientBadge';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

const BentoCard = ({
  className = "",
  title,
  description,
  image,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className={`relative h-full rounded-[16px] border border-[#1e1e1e] p-[1px] overflow-hidden bg-[#191919] ${className}`}>
      {/* <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      /> */}
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[16px] bg-[#000000]">

        {/* Image Area */}
        <div className="flex-1 relative overflow-hidden m-2 mb-0 rounded-[12px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          {/* Image is set as background to match 'Fluence ai chart' spec */}
        </div>

        {/* Text Content */}
        <div className="h-[140px] md:h-[122px] px-[22px] pt-[20px] pb-6 flex flex-col justify-start">
          <h3 className="font-sans font-medium text-lg md:text-[23.4px] leading-[32px] text-white mb-2">{title}</h3>
          <p className="font-sans font-normal text-sm leading-[18px] md:text-[16px] md:leading-[26px] text-white opacity-70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-12 md:py-20 bg-black overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#FF4D00] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#0066FF] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1140px] mx-auto px-4 xl:px-0 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-[56px] relative">
          <div className="flex justify-center mb-6">
            <GradientBadge variant="primary">
              <span className="font-sans font-medium text-[14px] leading-[16px] text-white uppercase tracking-wider">
                AI-Driven Features
              </span>
            </GradientBadge>
          </div>

          <div className="relative mb-8 md:mb-[46px]">
            <h2 className="font-sans font-medium text-3xl md:text-[58.5px] leading-[1.1] md:leading-[60px] text-white">
              Build, scale and manage {" "}  <br className='hidden md:block' /> entire AI workforce
            </h2>
          </div>

          <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white max-w-[645px] mx-auto opacity-100">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, and make <br className='hidden md:block' /> smarter decisions with ease.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full auto-rows-[400px] md:auto-rows-[493px]">

          {/* Card 1: Seamless Integrations (Width ~40%) */}
          <BentoCard
            className="md:col-span-5"
            title="Seamless Integrations"
            description="Integrate Slack, HubSpot, Zendesk & more—automate data flow instantly."
            image="/images/home/bentogrid/seamless.png"
          />

          {/* Card 2: Conversational Actions (Width ~60%) */}
          <BentoCard
            className="md:col-span-7"
            title="Conversational Actions"
            description="Create records, assign tasks & queue emails with a simple prompt in seconds flat."
            image="/images/home/bentogrid/conversational.png"
          />

          {/* Card 3: Visual Workflow Designer (Width ~60%, Order swap in CSS grid if needed, but simple layout here works) */}
          <BentoCard
            className="md:col-span-7"
            title="Visual Workflow Designer"
            description="Drag & drop AI actions to build workflows visually—no coding required."
            image="/images/home/bentogrid/visual.png"
          />

          {/* Card 4: Multi-Channel Automation (Width ~40%) */}
          <BentoCard
            className="md:col-span-5"
            title="Multi-Channel Automation"
            description="Trigger email, SMS & chat messages automatically on schedule."
            image="/images/home/bentogrid/multi_automation.png"
          />

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

