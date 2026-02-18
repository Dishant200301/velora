import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import BentoGrid from '@/components/home/BentoGrid';
import AIPoweredSection from '@/components/home/AIPoweredSection';
import FeatureStack from '@/components/home/FeatureStack';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import IntegrationMarquee from '@/components/home/IntegrationMarquee';
import TestimonialSection from '@/components/home/TestimonialSection';
import StepsSection from '@/components/home/StepsSection';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const Index = () => (
  <Layout
    mergedBottom={true}
    mainClassName="bg-transparent"
    footerProps={{ transparent: true }}
  >
    {/* HeroSection is above the fold — no FadeIn needed */}
    <HeroSection />

    <FadeIn>
      <TrustSection />
    </FadeIn>

    <FadeIn>
      <BentoGrid />
    </FadeIn>

    <FadeIn>
      <AIPoweredSection />
    </FadeIn>

    <FadeIn>
      <FeatureStack />
    </FadeIn>

    <FadeIn>
      <ShowcaseSection />
    </FadeIn>

    <FadeIn>
      <IntegrationMarquee />
    </FadeIn>

    <FadeIn>
      <TestimonialSection />
    </FadeIn>

    <FadeIn>
      <StepsSection />
    </FadeIn>

    <FadeIn>
      <FAQSection />
    </FadeIn>

    <FadeIn>
      <CTASection transparent={true} />
    </FadeIn>
  </Layout>
);

export default Index;
