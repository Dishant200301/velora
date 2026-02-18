import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  footerProps?: {
    transparent?: boolean;
  };
  wrapperClassName?: string;
  mainClassName?: string;
  mergedBottom?: boolean;
}

const Layout = ({
  children,
  title = 'Velora - AI Workflow Automation',
  description = 'Automate Your AI Workflows with AI Agent',
  footerProps = {},
  wrapperClassName = "",
  mainClassName = "bg-black",
  mergedBottom = false
}: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <div className={`relative bg-black ${wrapperClassName}`}>
        <main className={`min-h-screen ${mainClassName} relative z-10`}>{children}</main>
        <div className="relative z-10">
          <Footer {...footerProps} />
        </div>

        {mergedBottom && (
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none z-0"
            style={{ '--bg-height': '1200px' } as React.CSSProperties}
          >
            {/* Shared background for CTASection and Footer — perfectly merged */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[var(--bg-height)]"
              style={{
                backgroundImage: "url('/images/common/backgrounds/footer-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Top gradient to blend the merged background with the pure black content above it */}
            <div
              className="absolute left-0 right-0 bg-gradient-to-b from-black to-transparent h-64"
              style={{ bottom: 'var(--bg-height)' }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;

