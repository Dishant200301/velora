const logos = [
  { src: '/images/common/icons/application.png', alt: 'Application', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
  { src: '/images/common/icons/company.png', alt: 'Company', className: 'h-10 w-auto opacity-50 grayscale  transition-all duration-300' },
  { src: '/images/common/icons/business.png', alt: 'Business', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
  { src: '/images/common/logos/logoipsum.png', alt: 'Logoipsum', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
  { src: '/images/common/logos/statup-logo.png', alt: 'Startup', className: 'h-10 w-auto opacity-100 grayscale  transition-all duration-300' },
];

const TrustSection = () => {
  return (
    <section
      className="py-16 md:py-24 relative"

    >
      <div className="max-w-[1140px] mx-auto px-4">
        <p className="text-center text-white text-[18px] font-medium mb-10">
          Trusted by 150,000+ users worldwide
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex animate-marquee" style={{ '--duration': '10s' } as React.CSSProperties}>
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-10 opacity-100  transition-opacity duration-300 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

