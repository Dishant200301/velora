import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/shared/CTASection';
import FadeIn from '@/components/ui/FadeIn';
import { blogPosts } from './Blog';
import { blogDetails } from '@/data/blogdetails';
import { useEffect } from 'react';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find detailed content
  const detail = blogDetails.find(p => p.slug === slug);
  // Find summary for related posts logic
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex] || blogPosts[0]; // Fallback if needed

  // Related posts: exclude current, take 3
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <Layout title="Blog Not Found - Velora" description="Blog post not found">
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center">
            <h1 className="text-2xl mb-4">Blog post not found</h1>
            <button onClick={() => navigate('/blog')} className="text-[#DA4E24] hover:underline">Back to Blog</button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${detail.title} - Velora`}
      description={detail.title}
      mergedBottom={true}
      mainClassName="bg-transparent"
      footerProps={{ transparent: true }}
    >
      <section className="relative pt-32 lg:pt-[160px] pb-20">
        {/* Background Image similar to Contact page */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />
        <div className="relative max-w-[800px] mx-auto px-4">

          {/* Header Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
            <button
              onClick={() => navigate('/blog')}
              className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors text-base leading-[26px] font-normal font-sans"
            >
              <img src="/images/common/icons/arrow-left.svg" alt="Back" className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> Back
            </button>
            <span className="text-[#DA4E24] text-sm font-medium leading-4 uppercase tracking-wider">{detail.category}</span>
            <span className="text-white ml-auto text-base leading-[26px] font-normal font-sans">{detail.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-[60px] leading-tight md:leading-[60px] font-medium text-white mb-12 font-sans">
            {detail.title}
          </h1>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12 bg-[#111]">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-auto md:w-[750px] md:h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {detail.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-white text-base leading-[26px] mb-8 font-sans font-normal">
                    {block.value as string}
                  </p>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} className="space-y-4 mb-8">
                    {(block.value as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white text-base leading-[26px] font-sans font-normal">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl md:text-[44px] leading-[53px] font-medium text-white mt-12 mb-6 font-sans">
                    {block.value as string}
                  </h2>
                );
              }
              return null;
            })}
          </div>

          {/* Share Section */}
          <div className="mt-16 bg-[#0A0A0A] border border-[#191919] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-white text-[18px] leading-[28px] font-medium font-sans">Share Blog</span>
            <div className="flex items-center gap-4">
              {[
                { icon: '/images/common/logos/facebook.svg', alt: 'Facebook' },
                { icon: '/images/common/logos/instagram.svg', alt: 'Instagram' },
                { icon: '/images/common/logos/x.svg', alt: 'X' },
                { icon: '/images/common/logos/linkedin.svg', alt: 'LinkedIn' },
              ].map((social, i) => (
                <button key={i} className="group transition-transform duration-300">
                  <img src={social.icon} alt={social.alt} className="w-6 h-6 brightness-0 invert opacity-100 group-hover:opacity-60 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <FadeIn>
        <section className="pb-20 bg-black">
          <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
            <h2 className="text-3xl md:text-[60px] leading-[60px] font-medium text-white mb-10 font-sans">Related blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((post, i) => (
                <Link key={i} to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-black border border-[#191919] rounded-[20px] p-5 h-full transition-all duration-300 flex flex-col">
                    <div className="rounded-xl overflow-hidden mb-6 w-full h-[250px]">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#DA4E24] text-sm font-medium leading-4 uppercase">{post.category}</span>
                      <span className="text-white text-sm font-medium leading-4">{post.date}</span>
                    </div>
                    <h3 className="text-[20px] leading-[30px] font-medium text-white group-hover:text-white transition-colors">
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
};

export default BlogDetail;

