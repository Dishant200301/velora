import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    q: 'What is Velora and how does it work?',
    a: 'Velora is an AI-powered automation platform that helps you build, manage, and scale AI agents. It connects with your existing tools and automates repetitive workflows, allowing your team to focus on high-value tasks.',
  },
  {
    q: 'Which apps can I integrate?',
    a: 'Velora supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more.',
  },
  {
    q: 'How does Velora automate tasks?',
    a: 'Velora uses intelligent AI agents that understand natural language commands. You can create workflows, set triggers, and let AI handle everything from data entry to customer support automatically.',
  },
  {
    q: 'Is my data secure with Velora?',
    a: 'Yes, we use enterprise-grade encryption, SOC 2 compliance, and strict data access controls. Your data is never shared with third parties and is encrypted both in transit and at rest.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'We offer 24/7 email support, live chat during business hours, comprehensive documentation, and dedicated account managers for enterprise plans.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 md:px-2 lg:px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[40%_55%] gap-8 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="gradient-badge inline-block mb-6">
              <div className="gradient-badge-inner px-4 py-1.5 uppercase tracking-wider font-sans font-medium text-sm leading-4 text-white">
                FAQ
              </div>
            </div>
            <h2 className="mb-6 lg:mb-10 text-[32px] leading-[1.2] lg:text-[60px] lg:leading-[60px] font-sans font-medium text-white">
              Frequently<br className="hidden lg:block" /> asked<br className="hidden lg:block" /> questions
            </h2>
            <div>
              <p className="mb-2 font-sans font-medium text-lg leading-7 text-white">
                Got any Questions?
              </p>
              <p className="mb-6 max-w-xs mx-auto lg:mx-0 font-sans font-normal text-base leading-[26px] text-white">
                Let us know! Reach out and our team will get right back to you.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-3 rounded-lg border border-[#333333] transition-all duration-300 group"
              >
                <div className="text-slide-up overflow-hidden h-[26px]">
                  <div className="text-slide-inner flex flex-col">
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
          </div>

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-white/20' : ''
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 md:p-4 text-left"
                >
                  <span className={`transition-colors duration-300 font-sans font-medium text-lg lg:text-2xl leading-7 lg:leading-8 ${openIndex === i ? 'text-white' : 'text-[#B3B3B3]'}`}>
                    {item.q}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-5 pb-5 md:pb-4 font-sans font-normal text-base leading-[26px] text-white">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
