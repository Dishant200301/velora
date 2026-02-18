import Layout from '@/components/layout/Layout';
import CTASection from '@/components/shared/CTASection';
import GradientBadge from '@/components/ui/GradientBadge';
import FadeIn from '@/components/ui/FadeIn';

const PrivacyPolicy = () => {
    return (
        <Layout
            title="Privacy Policy - Velora"
            description="Read our Privacy Policy to understand how we collect, use, and protect your data."
            mergedBottom={true}
            mainClassName="bg-transparent"
            footerProps={{ transparent: true }}
        >
            <FadeIn>
                <section className="relative min-h-screen pt-24 pb-12 md:pt-[160px] md:pb-20 overflow-hidden mt-8">
                    {/* Background Image similar to Contact page */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />


                    <div className="relative max-w-4xl mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-10 md:mb-16">
                            <GradientBadge variant="primary" className="mb-6">
                                <span className="font-sans font-medium text-sm leading-4 text-white">
                                    Privacy Policy
                                </span>
                            </GradientBadge>
                            <h1 className="text-4xl md:text-[76px] md:leading-[76px] font-medium mb-4 font-sans text-white">
                                Privacy Policy
                            </h1>
                            <p className="text-white font-sans font-normal text-sm md:text-[16px] md:leading-[26px] uppercase tracking-wide">
                                Last Updated: November 15, 2024
                            </p>
                        </div>

                        {/* Content */}
                        <div className="space-y-8 md:space-y-12 text-left">
                            {/* Information We Collect */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-[32px] md:leading-[38px] font-medium font-sans text-white">
                                    Information We Collect
                                </h2>
                                <p className="font-sans font-normal text-base md:text-[16px] md:leading-[26px] text-white leading-relaxed">
                                    We collect data to ensure seamless interactions and personalized experiences. When you use our services, we may collect personal details such as your name, email, and phone number. Additionally, we track your interactions with our website, including the pages you visit, the device you use, and the time spent on specific sections. Cookies are also used to store preferences and enhance functionality. All data collected is handled responsibly to maintain transparency and build trust.
                                </p>
                            </div>

                            {/* How We Use Your Data */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-[32px] md:leading-[38px] font-medium font-sans text-white">
                                    How We Use Your Data
                                </h2>
                                <p className="font-sans font-normal text-base md:text-[16px] md:leading-[26px] text-white leading-relaxed">
                                    The information you share with us is used to improve and personalize your experience. It helps us communicate effectively, optimize our services, and understand user preferences. Whether we're tailoring recommendations, sending updates, or improving website functionality, your data remains secure and confidential.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-[32px] md:leading-[38px] font-medium font-sans text-white">
                                    Your Rights
                                </h2>
                                <p className="font-sans font-normal text-base md:text-[16px] md:leading-[26px] text-white leading-relaxed">
                                    We believe in empowering users to manage their personal data. You have the right to request access, update inaccuracies, or delete your information when necessary. If you no longer wish to receive updates or want to manage your cookie preferences, you can do so easily. Our commitment is to give you full control over your data while ensuring you remain informed about how it's used.
                                </p>
                            </div>

                            {/* Data Protection */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-[32px] md:leading-[38px] font-medium font-sans text-white">
                                    Data Protection
                                </h2>
                                <p className="font-sans font-normal text-base md:text-[16px] md:leading-[26px] text-white leading-relaxed">
                                    We employ state-of-the-art measures to protect the information entrusted to us. From encryption to secure servers, your data is stored and managed with industry-leading security protocols. We also conduct regular system checks to prevent unauthorized access. While no system is completely immune to threats, our continuous efforts minimize risks and provide you with a safe online environment.
                                </p>
                            </div>

                            {/* Contact Us */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-[32px] md:leading-[38px] font-medium font-sans text-white">
                                    Contact Us
                                </h2>
                                <p className="font-sans font-normal text-base md:text-[16px] md:leading-[26px] text-white leading-relaxed">
                                    If you have questions, need assistance, or want to know more about our data practices, we encourage you to contact us. Transparency is integral to our approach, and we are here to provide clarity whenever needed. Whether it's a simple query or a detailed concern, our team is ready to address your inquiries promptly and professionally.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn><CTASection transparent={true} /></FadeIn>
        </Layout>
    );
};

export default PrivacyPolicy;

