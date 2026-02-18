import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import CTASection from '@/components/shared/CTASection';
import GradientBadge from '@/components/ui/GradientBadge';

const integrations = [
  { name: 'OpenAI', desc: "OpenAI's groundbreaking models empower Fusion AI to deliver natural, human-like conversations and creative assistance.", icon: '/images/common/logos/openai.svg' },
  { name: 'Claude', desc: "Claude's advanced reasoning and context understanding make Fusion AI smarter and more intuitive for deep problem-solving.", icon: '/images/common/logos/clude.svg' },
  { name: 'Google Gemini', desc: "Gemini's innovative AI features enrich Fusion AI with cutting-edge tools for creativity, data analysis, and seamless collaboration.", icon: '/images/common/logos/gemini.svg' },
  { name: 'Cohere', desc: "Cohere's robust natural language processing powers Fusion AI with exceptional text understanding and analysis capabilities.", icon: '/images/common/logos/cohere.svg' },
  { name: 'Grok', desc: 'Grok brings rapid responsiveness and insightful AI solutions to Fusion AI, enhancing productivity and delivering dynamic user experiences.', icon: '/images/common/logos/grok.svg' },
  { name: 'Perplexity', desc: "Perplexity's focus on precision and exploration enhances Fusion AI's search and discovery features, delivering accurate, in-depth insights.", icon: '/images/common/logos/perplexity.svg' },
  { name: 'Llama', desc: "Meta's LLaMA represents a cutting-edge effort in generative AI, offering advanced capabilities for natural language understanding.", icon: '/images/common/logos/llama.svg' },
  { name: 'DeepSeek', desc: "DeepSeek's new R1 model is a breakthrough in AI-driven search, combining semantic understanding with advanced contextual analysis.", icon: '/images/common/logos/deepseek.svg' },
  { name: 'Deepgram', desc: 'Deepgram TTS leverages end-to-end deep learning to deliver remarkably natural, real-time voice synthesis.', icon: '/images/common/logos/deepgram.svg' },
  { name: 'Eleven Labs', desc: "Eleven Labs' TTS stands out for its hyper-realistic voice generation, supporting multiple voices and languages.", icon: '/images/common/logos/elevenlabs.svg' },
  { name: 'Runway', desc: 'Runway is an applied research company building the next era of art, entertainment, and human creativity.', icon: '/images/common/logos/runway.svg' },
];

const Integration = () => (
  <Layout
    title="Integrations - Fusion AI"
    description="Connect Fusion AI to Your Entire Stack"
    mergedBottom={true}
    mainClassName="bg-transparent"
    footerProps={{ transparent: true }}
  >
    <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-36">
      {/* Background Image similar to Contact page */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />
      <FadeIn>
        <div className="relative max-w-[1140px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <GradientBadge variant="primary" className="mb-6">
                <span className="font-sans font-medium text-sm leading-4 text-white uppercase tracking-wider">INTEGRATIONS</span>
              </GradientBadge>
              <h1 className="text-3xl md:text-[50px] md:leading-[50px] lg:text-[64px] lg:leading-[72px] font-medium text-white mb-6 font-sans">
                Connect Fusion <br className="hidden md:block" /> AI to Your Entire <br className="hidden md:block" /> Stack
              </h1>
              <p className="text-[#C6C6C6] text-[18px] leading-[28px] font-normal mb-8 max-w-[500px] mx-auto lg:mx-0 font-sans">
                One-click connectors sync Slack, HubSpot, Salesforce, and 50+ tools—automate instantly. Open API covers the rest.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/integration/INTEGRATIONS.png" alt="Integrations" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>

    <FadeIn>
      <section className="pb-20">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <div key={i} className="bg-transparent border border-[#1e1e1e] rounded-[20px] p-6 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-xl  flex items-center justify-center mb-6 transition-colors">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('text-white', 'font-bold', 'text-xl');
                      if (e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = item.name.slice(0, 1);
                    }}
                  />
                </div>
                <h3 className="text-[24px] leading-[32px] font-medium text-white mb-3 font-sans">{item.name}</h3>
                <p className="text-[#b4b4b4] text-[16px] leading-[26px] font-normal font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn><CTASection transparent={true} /></FadeIn>
  </Layout>
);

export default Integration;

