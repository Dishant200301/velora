import { Link } from 'react-router-dom';
import logo from '/images/common/logos/logo.jpg';

const footerLinks = {
  'Main Page': [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/contact' },
    { label: 'Blogs', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  'Quick Links': [
    { label: 'Integration', path: '/integration' },
    { label: 'Waitlist', path: '/waitlist' },
    { label: 'Changelog', path: '/changelog' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Condition', path: '/terms-and-conditions' },

  ],
  // Others: [
  //   { label: 'Privacy Policy', path: '/privacy' },
  //   { label: 'Terms & Condition', path: '/terms-and-conditions' },
  //   { label: 'Waitlist', path: '/waitlist' },
  //   { label: 'Changelog', path: '/blog' },
  // ],
};

const Footer = ({ transparent = false }: { transparent?: boolean }) => {
  return (
    <footer className={`w-full px-4 md:px-6 pt-12 md:pt-20 pb-4 md:pb-8 ${transparent
        ? 'bg-transparent'
        : "bg-[url('/images/common/backgrounds/footer-bg.png')] bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
      }`}>
      <div className="max-w-[1140px] bg-black rounded-xl mx-auto px-7 pt-8 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Velora" className="w-12 h-12 rounded-full" />
              <span className="text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] font-sans font-medium text-white">
                Velora AI
              </span>
            </Link>
            <p className="mb-4 max-w-[220px] font-sans font-normal text-base leading-[26px] text-white">
              Velora and let AI handle your routine tasks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-5 font-sans font-medium text-lg leading-7 text-[#808080]">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="transition-colors duration-300 text-[#B3B3B3] hover:text-white font-sans font-normal text-base leading-[26px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.15] mt-8 md:mt-10 pt-4 -mx-7 px-7 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
          <p className="font-sans font-normal text-sm md:text-base leading-[26px] text-white">
            © {new Date().getFullYear()} year Design & Developed by <a href="https://tryzeniq.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TryzenIQ</a>
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: '/images/common/logos/instagram.svg', link: '#' },
              { icon: '/images/common/logos/facebook.svg', link: '#' },
              { icon: '/images/common/logos/x.svg', link: '#' },
              { icon: '/images/common/logos/linkedin.svg', link: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group"
              >
                <img src={social.icon} alt="social" className="w-6 h-6 brightness-0 invert opacity-100 group-hover:opacity-60 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

