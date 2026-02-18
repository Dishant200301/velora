
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/shared/CTASection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout
      title="404 - Not Found"
      mergedBottom={true}
      mainClassName="bg-transparent"
      footerProps={{ transparent: true }}
    >
      <FadeIn>
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-4 pt-20">
          <div className="max-w-4xl w-full flex flex-col items-center">
            {/* 404 Image */}
            <div className="mb-8 relative w-full h-[40vh] max-h-[400px] flex items-center justify-center">
              <img
                src="/images/common/Notfound.png"
                alt="404 Not Found"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <p className="text-white text-xl md:text-2xl font-medium mb-12 max-w-md mx-auto leading-relaxed font-sans">
              Hmmmm... I couldn't find that page. It's just me playing the guitar :)
            </p>

            {/* Back to Home Button */}
            <Link
              to="/"
              className="group relative inline-flex items-center justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#FF4D00] to-[#0066FF] opacity-50 blur-md transition duration-500 group-hover:opacity-80"></div>

              {/* Button Structure with Gradient Border */}
              <div className="relative rounded-xl bg-gradient-to-r from-[#FF4D00] to-[#0066FF] p-[1px]">
                <div className="bg-black rounded-xl overflow-hidden transition ">
                  <div className="px-32 py-3"> {/* Increased PX to match image width look */}
                    <div className="text-slide-up overflow-hidden h-[26px]">
                      <div className="text-slide-inner flex flex-col">
                        <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                          Back to home
                        </span>
                        <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                          Back to home
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </FadeIn>
      <FadeIn><CTASection transparent={true} /></FadeIn>
    </Layout>
  );
};

export default NotFound;

