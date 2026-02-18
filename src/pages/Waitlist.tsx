import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import GradientBadge from '@/components/ui/GradientBadge';
import GradientButton from '@/components/ui/GradientButton';
import CTASection from '@/components/shared/CTASection';

const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count.toLocaleString()}+</>;
};

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  const avatars = [
    '/images/waitlist/waitlist-image-1.png',
    '/images/waitlist/waitlist-image-2.png',
    '/images/waitlist/waitlist-image-3.png'
  ];

  return (
    <Layout
      title="Waitlist - Velora"
      description="Join the Velora Waitlist"
      mergedBottom={true}
      mainClassName="bg-transparent"
      footerProps={{ transparent: true }}
    >
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FadeIn>
          <div className="relative max-w-[900px] mx-auto px-4 text-center pt-[140px] pb-24 md:pb-64  md:mt-8">
            {/* Launching Soon Badge */}
            <GradientBadge variant="primary" className="mb-6 md:mb-8">
              <span className="font-sans font-medium text-sm leading-4 text-white">
                Launching Soon
              </span>
            </GradientBadge>

            {/* Main Heading */}
            <h1 className="mb-6 md:mb-8 text-[40px] leading-[1.1] md:text-[76px] md:leading-[76px] font-sans font-medium text-white">
              Join the Waitlist
            </h1>

            {/* Subtitle */}
            <p className="max-w-[700px] mx-auto mb-8 font-sans font-normal text-base md:text-lg leading-6 md:leading-7 text-white px-4 md:px-0">
              Be first to try the AI-agent template, get launch updates, private previews, and early-bird pricing.
            </p>

            {/* Timer Has Ended */}
            <h2 className="mb-10 md:mb-16 text-2xl md:text-[32px] font-sans font-medium text-white">
              Timer Has Ended
            </h2>

            {/* Email Form or Success Message */}
            {submitted ? (
              <div className="rounded-sm p-8 max-w-[500px] mx-auto">
                <p className="text-lg font-medium text-primary">🎉 You're on the list!</p>
                <p className="text-sm text-muted-foreground mt-2">We'll notify you when we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-[500px] mx-auto mb-8 md:mb-12 bg-[#060606] border border-[#191919] rounded-2xl p-2 pl-4 sm:rounded-2xl transition-colors focus-within:border-white/20 hover:border-white/20">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 w-full bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder:text-muted-foreground/50 px-2 py-2 font-sans font-normal text-base leading-[19px] text-center sm:text-left"
                />
                <GradientButton type="submit" size="md" className="flex-shrink-0 w-full sm:w-auto rounded-xl sm:rounded-xl px-8 mt-2 sm:mt-0">
                  <span className="font-sans font-medium text-base leading-[26px] text-white">
                    Join Waitlist
                  </span>
                </GradientButton>
              </form>
            )}

            {/* User Count */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3">
              <div className="flex -space-x-3 mb-2 sm:mb-0">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative z-0 hover:z-10 transition-all"
                  >
                    <img src={src} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="font-sans font-normal text-sm sm:text-base leading-[26px] text-white/80">
                <span className="font-semibold text-white mr-1">
                  <CountUp end={2300} />
                </span>
                Peoples already joined
              </span>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Waitlist;

