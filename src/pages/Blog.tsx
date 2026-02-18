import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import CTASection from '@/components/shared/CTASection';
import GradientBadge from '@/components/ui/GradientBadge';
import GradientButton from '@/components/ui/GradientButton';

export const blogPosts = [
  { slug: 'building-long-lasting-customer-in-saas', title: 'Building Long-Lasting Customer in SaaS', category: 'FINANCE', date: 'Oct 10, 2024', image: '/images/blog/blog-1.png', featured: true, excerpt: 'Tailor your site\'s design to meet your financial targets. Easily adjust layouts, colors, and fonts to match your brand without extra cost.' },
  { slug: 'maximizing-your-roi-with-effective-saas-solutions', title: 'Maximizing Your ROI with Effective SaaS Solutions', category: 'SAAS', date: 'MAR 13, 2025', image: '/images/blog/blog-2.png' },
  { slug: 'essential-financial-metrics', title: 'Essential Financial Metrics for Sustainable SaaS Success', category: 'FINANCE', date: 'FEB 16, 2025', image: '/images/blog/blog-3.png' },
  { slug: 'integrating-payment-gateways', title: 'Integrating Payment Gateways for Seamless Transactions', category: 'AI', date: 'FEB 16, 2025', image: '/images/blog/blog-4.png' },
  { slug: 'why-data-security-is-vital', title: 'Why Data Security is Vital for Every SaaS Platform', category: 'SAAS', date: 'FEB 16, 2025', image: '/images/blog/blog-5.png' },
  { slug: 'site-optimization-techniques', title: 'Site Optimization Techniques to Boost Conversions', category: 'STARTUP', date: 'FEB 16, 2025', image: '/images/blog/blog-6.png' },
  { slug: 'efficient-strategies-scaling', title: 'Efficient Strategies for Scaling Your SaaS Business', category: 'AI', date: 'FEB 16, 2025', image: '/images/blog/blog-7.png' },
];

const Blog = () => (
  <Layout
    title="Blog - Velora"
    description="Stay on top of Industry News"
    mergedBottom={true}
    mainClassName="bg-transparent"
    footerProps={{ transparent: true }}
  >
    <FadeIn>
      <section className="relative pt-32 lg:pt-[160px] pb-12 lg:pb-20">
        {/* Background Image similar to Contact page */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />
        <div className="relative max-w-[1140px] mx-auto px-4 xl:px-0 text-center">
          <GradientBadge variant="primary" className="mb-6">
            <span className="text-sm font-medium leading-4 text-white uppercase">Blog</span>
          </GradientBadge>
          <h1 className="text-3xl md:text-[60px] md:leading-[60px] lg:text-[76px] lg:leading-[76px] font-medium text-white mb-10 lg:mb-16">
            Stay on the top of {" "} <br className="hidden lg:block" />Industry News
          </h1>

          {/* Featured */}
          <Link to={`/blog/${blogPosts[0].slug}`} className="block">
            <div className="bg-black rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left transition-all duration-300 items-center border border-white/5">
              <div>
                <span className="text-[#DA4E24] text-sm font-normal leading-[22px] uppercase mb-2 block">FEATURED</span>
                <h2 className="text-2xl md:text-[44px] md:leading-[53px] font-medium text-white mb-4">{blogPosts[0].title}</h2>
                <p className="text-base leading-[26px] font-normal text-white mb-6">{blogPosts[0].excerpt}</p>
                <GradientButton size="md" className="text-base leading-[26px]">Read More</GradientButton>
              </div>
              <div className="rounded-xl overflow-hidden flex justify-end">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full md:w-[750px] md:h-[450px] lg:w-[520px] h-[250px] lg:h-[380px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className="pb-12 lg:pb-20">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <h2 className="text-3xl md:text-[60px] md:leading-[60px] font-medium text-white mb-8 lg:mb-10">All blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-black border border-[#191919] rounded-[20px] p-5 h-full transition-all duration-300 flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-6 w-full h-[250px]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#DA4E24] text-sm font-medium leading-4 uppercase">{post.category}</span>
                    <span className="text-white text-sm font-medium leading-4">{post.date}</span>
                  </div>
                  <h3 className="text-[20px] leading-[30px] font-medium text-[#C6C6C6] group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn><CTASection transparent={true} /></FadeIn>
  </Layout>
);

export default Blog;

