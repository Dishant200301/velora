import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import TrustSection from '@/components/home/TrustSection';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';
import GradientBadge from '@/components/ui/GradientBadge';
import GradientButton from '@/components/ui/GradientButton';

const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout
      title="Contact - Velora"
      description="Chat with the Velora team"
      mergedBottom={true}
      mainClassName="bg-transparent"
      footerProps={{ transparent: true }}
    >
      <FadeIn>
        <section className="relative pt-24 pb-12 md:pt-[160px] md:pb-20 min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 pointer-events-none bg-[url('/images/common/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat" />

          <div className="relative max-w-3xl mx-auto px-4 text-center w-full">
            {/* Badge */}
            <GradientBadge variant="primary" className="mb-6">
              <span className="font-sans font-medium text-sm leading-4 text-white">
                Contact Us
              </span>
            </GradientBadge>

            {/* Heading */}
            <h1 className="mb-4 text-4xl leading-tight md:text-[76px] md:leading-[76px] font-sans font-medium text-white">
              Chat with the team
            </h1>

            {/* Subtitle */}
            <p className="max-w-[600px] mx-auto mb-8 md:mb-12 text-base md:text-[18px] leading-relaxed md:leading-[28px] font-sans font-normal text-white">
              Velora helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-black backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 text-left ">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="mb-2 block font-sans font-normal text-base leading-[26px] text-white">
                    First Name
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    placeholder="First name"
                    className="w-full bg-black/40 border border-[#171717] rounded-sm px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50 font-sans font-normal text-base leading-[19px] text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans font-normal text-base leading-[26px] text-white">
                    Last Name
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Last name"
                    className="w-full bg-black/40 border border-[#171717] rounded-sm px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50 font-sans font-normal text-base leading-[19px] text-white"
                  />
                </div>
              </div>

              {/* Second Row: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="mb-2 block font-sans font-normal text-base leading-[26px] text-white">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full bg-black/40 border border-[#171717] rounded-sm px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50 font-sans font-normal text-base leading-[19px] text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans font-normal text-base leading-[26px] text-white">
                    Phone Number
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your phone"
                    className="w-full bg-black/40 border border-[#171717] rounded-sm px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50 font-sans font-normal text-base leading-[19px] text-white"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="mb-2 block font-sans font-normal text-base leading-[26px] text-white">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message"
                  rows={4}
                  className="w-full bg-black/40 border border-[#171717] rounded-sm px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50 font-sans font-normal text-base leading-[19px] text-white"
                />
              </div>

              {/* Submit Button */}
              <GradientButton type="submit" size="lg" fullWidth>
                <span className="font-sans font-medium text-base leading-[26px] text-white">
                  Submit
                </span>
              </GradientButton>

              {/* Privacy Policy */}
              <p className="text-center mt-4 font-sans font-normal text-sm leading-[21px] text-white">
                By submitting this form you agree to our friendly <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </section>
      </FadeIn>

      <FadeIn><TrustSection /></FadeIn>
      <FadeIn><FAQSection /></FadeIn>
      <FadeIn><CTASection transparent={true} /></FadeIn>
    </Layout>
  );
};

export default Contact;

