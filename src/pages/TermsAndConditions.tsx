import Layout from "@/components/layout/Layout";
import CTASection from "@/components/shared/CTASection";
import FadeIn from "@/components/ui/FadeIn";

const TermsAndConditions = () => {
    return (
        <Layout
            title="Terms & Conditions - Velora"
            description="Our Terms & Conditions govern your use of the Velora platform and services."
            mergedBottom={true}
            mainClassName="bg-transparent"
            footerProps={{ transparent: true }}
        >
            <FadeIn>
                <div className="relative pt-32 pb-20 overflow-hidden ">
                    {/* Background Image similar to Contact page */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />


                    <div className="container mx-auto px-4 relative z-10 mt-8">
                        {/* Header */}
                        <div className="text-center mb-16 md:mb-24">
                            <div className="gradient-badge inline-block mb-4 md:mb-6">
                                <div className="gradient-badge-inner px-4 py-1.5 uppercase tracking-wider text-xs font-medium text-white font-inter">
                                    TERMS & CONDITIONS
                                </div>
                            </div>
                            <h1 className="mb-4 md:mb-6 text-[40px] leading-[1.1] md:text-[76px] md:leading-[76px] font-sans font-medium text-white">
                                Terms & Conditions
                            </h1>
                            <p className="mb-4 md:mb-6 font-sans font-normal text-base leading-[26px] text-white">
                                Last Updated: November 15, 2024
                            </p>
                        </div>

                        {/* Content */}
                        <div className="max-w-[800px] mx-auto space-y-10 md:space-y-16">
                            {/* Overview */}
                            <section>
                                <h2 className="mb-4 md:mb-6 text-2xl leading-[30px] md:text-[32px] md:leading-[38px] font-sans font-medium text-white">
                                    Overview
                                </h2>
                                <p className="font-sans font-normal text-base leading-[26px] text-white">
                                    By downloading or using this template ("Fusion AI"), you agree to these Terms. If you're acting for a company, you confirm you're authorized to bind it.
                                </p>
                            </section>

                            {/* License & Permitted Use */}
                            <section>
                                <h2 className="mb-4 md:mb-6 text-2xl leading-[30px] md:text-[32px] md:leading-[38px] font-sans font-medium text-white">
                                    License & Permitted Use
                                </h2>
                                <p className="font-sans font-normal text-base leading-[26px] text-white">
                                    One license = use in <strong className="text-white">one</strong> end project (personal or commercial). You may modify the Product to fit your brand, export assets, and publish your finished site.
                                </p>
                            </section>

                            {/* Restrictions */}
                            <section>
                                <h2 className="mb-4 md:mb-6 text-2xl leading-[30px] md:text-[32px] md:leading-[38px] font-sans font-medium text-white">
                                    Restrictions
                                </h2>
                                <p className="font-sans font-normal text-base leading-[26px] text-white">
                                    Do not resell, redistribute, share the source, or claim authorship. Don't use the Product to create competing templates/themes or offer it as a downloadable asset.
                                </p>
                            </section>

                            {/* Payments, Updates & Support */}
                            <section>
                                <h2 className="mb-4 md:mb-6 text-2xl leading-[30px] md:text-[32px] md:leading-[38px] font-sans font-medium text-white">
                                    Payments, Updates & Support
                                </h2>
                                <p className="font-sans font-normal text-base leading-[26px] text-white">
                                    The Product is provided "as is" without warranties. We're not liable for any indirect or consequential losses. We may update these Terms; continued use means acceptance.
                                </p>
                            </section>

                            {/* Contact Us */}
                            <section>
                                <h2 className="mb-4 md:mb-6 text-2xl leading-[30px] md:text-[32px] md:leading-[38px] font-sans font-medium text-white">
                                    Contact Us
                                </h2>
                                <p className="font-sans font-normal text-base leading-[26px] text-white">
                                    If you have questions, need assistance, or want to know more about our data practices, we encourage you to contact us. Transparency is integral to our approach, and we are here to provide clarity whenever needed. Whether it's a simple query or a detailed concern, our team is ready to address your inquiries promptly and professionally.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <FadeIn><CTASection transparent={true} /></FadeIn>
        </Layout>
    );
};

export default TermsAndConditions;

