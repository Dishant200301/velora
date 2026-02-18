
import Layout from '@/components/layout/Layout';
import GradientBadge from '@/components/ui/GradientBadge';
import FadeIn from '@/components/ui/FadeIn';
import CTASection from '@/components/shared/CTASection';

const images = {
    nano: '/images/common/icons/nano.png',
    chatgpt: '/images/common/logos/chatgpt.png',
    gemini: '/images/common/logos/gemini.png'
};

const changelogData = [
    {
        update: "August Update",
        version: "v1.8",
        date: "Aug 10, 2025",
        image: images.nano,
        title: "Nano-Banana: Fast + Visual",
        description: "Two fresh model options to speed up everyday tasks and handle screen work. Your agents respond quicker and understand images right in chat.",
        features: [
            "Faster instant replies for follow-ups, summaries, DIY ops",
            "Banana: more fun, performant data organization",
            "One-tap model switch per workflow",
            "Smarter routing picks the best model",
            "New visual prompts for support tickets"
        ]
    },
    {
        update: "August Update",
        version: "v1.7",
        date: "Aug 05, 2025",
        image: images.chatgpt,
        title: "ChatGPT: Better Writing",
        description: "Cleaner drafts and tighter summaries for emails, posts, and support. Expect friendlier tone and quicker \"first pass\" content.",
        features: [
            "\"Smart Edit\" checks for tone and grammar",
            "Improved context support keeps chats cohesive",
            "Stronger long-form summaries",
            "Tone presets: Friendly, Formal, Concise",
            "Suggested next steps after answers"
        ]
    },
    {
        update: "July Update",
        version: "v1.1",
        date: "Jul 12, 2025",
        image: images.gemini,
        title: "Gemini: Research & Answers",
        description: "Added Gemini for faster lookups and clearer explanations. Great for comparing docs and pulling key stats fast.",
        features: [
            "Deep knowledge lookups from web sites",
            "Quick citations for sources shown",
            "Multi-doc comparisons",
            "Better Q&A on product docs",
            "Auto-translation boost"
        ]
    }
];

const Changelog = () => {
    return (
        <Layout
            title="Changelog - Velora"
            description="Latest updates and improvements to the Velora platform."
            mergedBottom={true}
            mainClassName="bg-transparent"
            footerProps={{ transparent: true }}
        >
            <div className="relative min-h-screen">

                {/* Background Image similar to Contact page */}
                <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-20 md:py-32 relative z-10">
                    {/* Header */}
                    <FadeIn>
                        <div className="text-center mb-16 md:mb-24 pt-16 md:pt-20">
                            {/* Gradient Badge: Inter, 500, 14px/16px, White */}
                            <GradientBadge variant="primary" className="mb-6">
                                <span className="font-['Inter'] font-medium text-xs md:text-[14px] leading-[16px] text-white uppercase tracking-wider">
                                    UPDATES
                                </span>
                            </GradientBadge>

                            {/* Heading: General Sans, 500, 76px/76px, White */}
                            <h1 className="font-['Inter'] font-medium text-3xl md:text-[76px] leading-[1.1] md:leading-[76px] text-white tracking-tight">
                                Changelog
                            </h1>
                        </div>
                    </FadeIn>

                    {/* Changelog Entries */}
                    <div className="space-y-16 md:space-y-32">
                        {changelogData.map((item, index) => (
                            <FadeIn key={index}>
                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                                    {/* Left Side - Sticky Date Info (40% width on desktop) */}
                                    <div className="lg:w-[40%] flex-shrink-0 lg:sticky lg:top-32">
                                        <h3 className="font-['Inter'] font-medium text-[24px] leading-[32px] text-white mb-2">
                                            {item.update}
                                        </h3>
                                        <div className="space-y-1">
                                            <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-white">
                                                Release {item.version}
                                            </p>
                                            <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-white">
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side - Content (60% width on desktop) */}
                                    <div className="lg:w-[60%]">
                                        <div className="rounded-xl overflow-hidden mb-8 border border-white/10 bg-[#0A0A0A]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full object-cover"
                                                style={{
                                                    aspectRatio: '700/362'
                                                }}
                                            />
                                        </div>

                                        <h2 className="font-['Inter'] font-medium text-[32px] md:text-[44px] leading-[40px] md:leading-[53px] text-white mb-4">
                                            {item.title}
                                        </h2>

                                        <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-white mb-8">
                                            {item.description}
                                        </p>

                                        <ul className="space-y-3">
                                            {item.features.map((feature, i) => (
                                                <li key={i} className="flex items-start font-['Inter'] font-normal text-[16px] leading-[26px] text-white">
                                                    <span className="mr-3 text-primary mt-[0.6rem] w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                                    <span className="">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
            <FadeIn><CTASection transparent={true} /></FadeIn>
        </Layout>
    );
};

export default Changelog;

