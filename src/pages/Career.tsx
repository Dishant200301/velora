
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import CareerHero from '@/components/career/CareerHero';
import CareerValues from '@/components/career/CareerValues';
import CareerTimeline from '@/components/career/CareerTimeline';
import CareerInvestors from '@/components/career/CareerInvestors';
import CareerTeam from '@/components/career/CareerTeam';
import CareerCulture from '@/components/career/CareerCulture';
import CareerOpenings from '@/components/career/CareerOpenings';
import CTASection from '@/components/shared/CTASection';

const Career = () => {
    return (
        <Layout
            title="Careers - Velora"
            description="Join our team and help shape the future of AI."
            mergedBottom={true}
            mainClassName="bg-transparent"
            footerProps={{ transparent: true }}
        >
            <FadeIn><CareerHero /></FadeIn>
            <FadeIn><CareerValues /></FadeIn>
            <FadeIn><CareerTimeline /></FadeIn>
            <FadeIn><CareerInvestors /></FadeIn>
            <FadeIn><CareerTeam /></FadeIn>
            <FadeIn><CareerCulture /></FadeIn>
            <FadeIn><CareerOpenings /></FadeIn>
            <FadeIn><CTASection transparent={true} /></FadeIn>
        </Layout>
    );
};

export default Career;
