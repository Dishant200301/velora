import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import TrustSection from '@/components/home/TrustSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';
import GradientBadge from '@/components/ui/GradientBadge';
import GradientButton from '@/components/ui/GradientButton';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 'Free', yearly: 'Free' },
    desc: 'Get started with Fluence AI at no cost',
    popular: false,
    features: [
      '400 AI credits at signup',
      '20,000 AI token inputs',
      'Calendar integration & syncing',
      'Guest sharing and links',
    ],
  },
  {
    name: 'Plus',
    price: { monthly: '$22', yearly: '$18' },
    desc: 'Unlock more powerful features',
    popular: true,
    features: [
      'Unlimited AI credits',
      '100,000 AI token inputs',
      'Calendar sync',
      'Guest sharing and links',
    ],
  },
  {
    name: 'Pro',
    price: { monthly: '$69', yearly: '$55' },
    desc: 'Take your business to the next level',
    popular: false,
    features: [
      'Unlimited AI creation',
      '250 000 token inputs',
      'Calendar integration & syncing',
      'User feedback and insights',
      'Social integrations',
    ],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <Layout
      title="Pricing - Velora"
      description="Choose the Plan That's Right for You"
      mergedBottom={true}
      mainClassName="bg-transparent"
      footerProps={{ transparent: true }}
    >
      <FadeIn>
        <section className="relative pt-32 md:pt-[160px] pb-12 md:pb-20">
          {/* Background Image similar to Contact page */}
          <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />
          <div className="relative max-w-[1140px] mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <GradientBadge variant="primary" className="mb-6">
                <span className="font-sans font-medium text-white text-sm leading-4">PRICING & PLANS</span>
              </GradientBadge>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-[76px] lg:leading-[76px] font-medium text-white mb-12 font-sans">
              Choose the Plan That's<br className='hidden lg:block' />Right for You
            </h1>

            {/* Toggle */}
            <div className="relative inline-flex bg-[#0F0F0F] rounded-sm p-1 mb-16 border border-[#191919]">
              <div
                className={`absolute top-1 bottom-1 left-1 w-32 bg-white rounded-sm transition-transform duration-300 ease-in-out ${yearly ? 'translate-x-full' : 'translate-x-0'
                  }`}
              />
              <button
                onClick={() => setYearly(false)}
                className={`relative z-10 w-32 py-1.5 rounded-sm text-[16px] leading-[26px] font-medium transition-colors duration-300 font-sans ${!yearly ? 'text-black' : 'text-[#808080] hover:text-white'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`relative z-10 w-32 py-1.5 rounded-sm text-[16px] leading-[26px] font-medium transition-colors duration-300 font-sans ${yearly ? 'text-black' : 'text-[#808080] hover:text-white'
                  }`}
              >
                Yearly
              </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto text-left">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col h-full  ${plan.popular
                    ? 'bg-[#000000] border-[#191919]/50 shadow-[0_0_40px_-10px_rgba(218,78,36,0.3)]'
                    : 'bg-black border-[#191919]'
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-6 right-6 bg-[#DA4E24] text-white text-[14px] leading-[16px] font-medium uppercase tracking-wider px-2 py-1 rounded-lg font-sans">
                      POPULAR
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-[24px] leading-[32px] font-medium text-white mb-2 font-sans">{plan.name}</h3>
                    <p className="text-white text-[16px] leading-[26px] font-normal font-sans">{plan.desc}</p>
                  </div>

                  <div className="mb-8">
                    {plan.name === 'Starter' ? (
                      <span className="text-[44px] leading-[53px] font-medium text-white font-sans">Free</span>
                    ) : (
                      <div className="flex items-baseline">
                        <div className="h-[53px] overflow-hidden">
                          <div className={`flex flex-col transition-transform duration-500 ease-in-out ${yearly ? '-translate-y-[53px]' : 'translate-y-0'}`}>
                            <span className="text-[44px] leading-[53px] font-medium text-white font-sans block h-[53px]">{plan.price.monthly}</span>
                            <span className="text-[44px] leading-[53px] font-medium text-white font-sans block h-[53px]">{plan.price.yearly}</span>
                          </div>
                        </div>
                        <span className="text-[#808080] text-[14px] leading-[21px] font-normal ml-2 font-sans">/month, per user</span>
                      </div>
                    )}
                  </div>

                  <Link to="/contact" className="block mb-10 w-full group/btn">
                    {plan.popular ? (
                      <GradientButton size="lg" className="w-full text-[16px] leading-[26px] font-medium font-sans">
                        Get Started
                      </GradientButton>
                    ) : (
                      <div className="w-full py-2.5 rounded-xl border border-[#333333] text-white flex items-center justify-center transition-all duration-300">
                        <div className="overflow-hidden h-[26px]">
                          <div className="flex flex-col transition-transform duration-300 group-hover/btn:-translate-y-[26px]">
                            <span className="font-sans font-medium text-[16px] leading-[26px] flex items-center justify-center h-[26px]">Get Started</span>
                            <span className="font-sans font-medium text-[16px] leading-[26px] flex items-center justify-center h-[26px]">Get Started</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Link>

                  <div>
                    <p className="text-[#808080] text-[16px] leading-[26px] font-medium mb-6 font-sans">What's Included</p>
                    <ul className="space-y-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <img src="/images/common/icons/star.png" alt="star" className="w-5 h-5 object-contain" />
                          <span className="text-white text-[16px] leading-[26px] font-medium font-sans">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn><TrustSection /></FadeIn>
      <FadeIn><TestimonialSection /></FadeIn>
      <FadeIn><FAQSection /></FadeIn>
      <FadeIn><CTASection transparent={true} /></FadeIn>
    </Layout>
  );
};

export default Pricing;

