import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import logo from '/images/common/logos/logo.jpg';
import GradientButton from '@/components/ui/GradientButton';

// Industry Images
import supportImg from '/images/home/ai_powered/Customer_Support.png';
import healthcareImg from '/images/home/ai_powered/Healthcare.png';
import marketingImg from '/images/home/ai_powered/Marketing.png';
import educationImg from '/images/home/ai_powered/Education.png';
import financeImg from '/images/home/ai_powered/Finance.png';

// Chat Avatars
import userAvatar from '/images/home/ai_powered/user.png';
import aiAvatar from '/images/common/icons/star.png';

const industries = [
  { img: supportImg, label: 'Customer Support' },
  { img: healthcareImg, label: 'Healthcare' },
  { img: marketingImg, label: 'Marketing' },
  { img: educationImg, label: 'Education' },
  { img: financeImg, label: 'Finance' },
];

// Full conversation script — Q&A pairs that loop infinitely
const conversationScript = [
  {
    user: 'Hey, can you generate a customer follow-up list',
    ai: 'Hey Mark - Done—compiled 60 leads and emailed the list to you. Ready for your outreach!',
  },
  {
    user: "That's awesome, thanks!",
    ai: 'Want me to draft a quick template for your outreach?',
  },
  {
    user: "Yes please—that'd be a huge help!",
    ai: "Done! I've drafted a personalized outreach template and saved it to your CRM.",
  },
  {
    user: 'Can you schedule follow-up meetings too?',
    ai: "Absolutely! I've scheduled 10 follow-up calls for next week and sent calendar invites.",
  },
];

// Input card typing texts
const typingTexts = [
  'Generate weekly sales summary',
  'Create CRM contact from email',
  'Schedule follow-up meetings',
  'Analyze customer data trends',
];

type ChatMessage = { role: 'user' | 'ai'; text: string };

const AIPoweredSection = () => {
  // ── Animated chat state ──────────────────────────────────────────────────
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [chatPhase, setChatPhase] = useState<'show_user' | 'show_ai' | 'pause'>('show_user');

  // ── Input card typing state ──────────────────────────────────────────────
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [inputPhase, setInputPhase] = useState<'typing' | 'waiting' | 'deleting' | 'next'>('typing');

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  // ── Infinite chat loop: user → ai → pause → next pair → repeat ──────────
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const pair = conversationScript[scriptIndex % conversationScript.length];

    if (chatPhase === 'show_user') {
      timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, { role: 'user', text: pair.user }]);
        setChatPhase('show_ai');
      }, 800);
    } else if (chatPhase === 'show_ai') {
      timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, { role: 'ai', text: pair.ai }]);
        setChatPhase('pause');
      }, 1500);
    } else if (chatPhase === 'pause') {
      timeout = setTimeout(() => {
        const nextIndex = scriptIndex + 1;
        if (nextIndex >= conversationScript.length) {
          setVisibleMessages([]);
          setScriptIndex(0);
        } else {
          setScriptIndex(nextIndex);
        }
        setChatPhase('show_user');
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [chatPhase, scriptIndex]);

  // ── Input card typing animation loop ────────────────────────────────────
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = typingTexts[currentTextIndex % typingTexts.length];

    if (inputPhase === 'typing') {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 55);
      } else {
        setInputPhase('waiting');
      }
    } else if (inputPhase === 'waiting') {
      timeout = setTimeout(() => setInputPhase('deleting'), 1800);
    } else if (inputPhase === 'deleting') {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 30);
      } else {
        setInputPhase('next');
      }
    } else if (inputPhase === 'next') {
      timeout = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
        setInputPhase('typing');
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayText, inputPhase, currentTextIndex]);

  return (
    <section className="py-10 px-4 sm:py-14 sm:px-6 md:py-20 md:px-4 lg:py-24 lg:px-4 bg-black overflow-hidden relative flex flex-col items-center justify-center gap-10">

      <div className="max-w-[1240px] w-full mx-auto relative z-10">

        {/* ── Title Section ─────────────────────────────────────────────── */}
        <div className="text-center mb-8 lg:mb-16 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 mb-2">
            <img
              src={logo}
              alt="Velora"
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-44 lg:h-44 mb-3 lg:mb-8 rounded-full animate-spin-slow"
            />
            <h2 className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[140px] font-medium leading-[1em] tracking-tight text-white font-sans text-center lg:text-left">
              AI <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#0098F3_0%,#00BFFB_37.5%,#FF521D_70%,#9F4E00_100%)]">Powered</span>
            </h2>
          </div>
        </div>

        {/* ── Dashboard UI Frame — Large screens only (lg+) ────────────── */}
        <div className="hidden lg:block relative w-full max-w-[1138px] md:max-w-[1138px] lg:w-[1200px] xl:max-w-[1138px] h-[805px] mx-auto rounded-[20px] box-border border border-white/[0.19] bg-[#050505] overflow-hidden shadow-2xl mb-24 z-20">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home/dashboard/dashboard-Img.png')" }}
          />

          {/* ── Chat Panel Wrapper ──────────────────────────────────────── */}
          <div className="absolute right-[94px] md:right-[94px] lg:right-[160px] xl:right-[94px] bottom-[29px] w-[700px] h-[409px]">

            {/* Messages Area — dynamic animated chat */}
            <div
              ref={chatContainerRef}
              className="absolute top-0 left-0 right-0 bottom-[190px] overflow-hidden flex flex-col justify-end gap-[12px] pb-2"
            >
              {visibleMessages.slice(-3).map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="w-[46px] h-[46px] rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img src={aiAvatar} alt="AI" className="w-[20px] h-[20px] object-contain" />
                    </div>
                  )}
                  <div className="relative flex items-center px-5 py-3 rounded-xl bg-white/[0.02] backdrop-blur-[1.25px] box-border border border-white/[0.08] max-w-[420px]">
                    <span className="font-inter text-[14px] leading-[21px] text-white">
                      {msg.text}
                    </span>
                  </div>
                  {msg.role === 'user' && (
                    <div
                      className="w-[46px] h-[46px] rounded-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${userAvatar})` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Dashboard Input Card */}
            <div className="absolute top-[228px] left-0 right-0 h-[180px] rounded-[20px]">

              {/* Card Container */}
              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#000000] p-6 shadow-2xl h-[186px]">

                {/* Top Bar: Model Selector & Globe */}
                <div className="absolute top-[16px] left-[16px] flex items-center gap-2">
                  {/* GPT Selector */}
                  <button className="flex h-[37px] w-[163px] items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 backdrop-blur-[1px] transition-colors hover:bg-white/10">
                    <div className="relative flex items-center justify-center">
                      <img src="/images/common/logos/partners/logo-1.svg" alt="GPT" className="w-[20px] h-[20px] opacity-80" />
                    </div>
                    <span className="font-inter text-sm text-white">GPT 4.5</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-auto opacity-50">
                      <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Globe Icon */}
                  <button className="flex h-[37px] w-[37px] items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-[3px] transition-colors hover:bg-white/10">
                    <Globe className="h-5 w-5 text-white/50" />
                  </button>
                </div>

                {/* Middle: Input Area - Typing Animation */}
                <div className="absolute top-[77px] left-[16px] right-[16px]">
                  <div className="flex items-center text-[17px] font-medium text-white/90 font-inter">
                    {displayText}
                    <span className="ml-[2px] h-5 w-[2px] animate-pulse bg-white/50" />
                  </div>
                </div>

                {/* Bottom: Action Buttons */}
                <div className="absolute bottom-[16px] left-[16px] right-[16px] flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-x-auto flex-1 [&::-webkit-scrollbar]:hidden pr-2">
                    {['Chat', 'Launch Workflow', 'Data Analysis'].map((item, index) => (
                      <button
                        key={index}
                        className="flex h-[37px] items-center rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white backdrop-blur-[3px] transition-colors hover:bg-white/10"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Send Button */}
                  <div className="w-[86px] h-[36px]">
                    <GradientButton size="sm" className="!p-0 w-full h-full flex items-center justify-center !text-sm">
                      <img src="/images/common/icons/star.png" alt="star" className="w-[20px] h-[20px] mr-1" />
                      <span className="mr-2">Send</span>
                    </GradientButton>
                  </div>
                </div>

              </div>
            </div>
            {/* end Dashboard Input Card */}

          </div>
          {/* end Chat Panel Wrapper */}

        </div>
        {/* end Dashboard UI Frame */}

        {/* ── Mobile + Tablet Chat Card — shown below lg ────────────────── */}
        <div className="lg:hidden w-full rounded-[20px] border border-white/[0.19] bg-[#050505] overflow-hidden shadow-2xl mb-10 z-20">

          {/* Messages Area */}
          <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-6 min-h-[240px] sm:min-h-[280px] md:min-h-[320px] justify-end">
            {visibleMessages.slice(-3).map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-end gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-[36px] h-[36px] rounded-lg flex-shrink-0 flex items-center justify-center bg-white/5">
                    <img src={aiAvatar} alt="AI" className="w-[16px] h-[16px] object-contain" />
                  </div>
                )}
                <div className="relative flex items-center px-4 py-2.5 rounded-xl bg-white/[0.04] box-border border border-white/[0.08] max-w-[75%] md:max-w-[65%]">
                  <span className="font-inter text-[13px] leading-[20px] text-white">
                    {msg.text}
                  </span>
                </div>
                {msg.role === 'user' && (
                  <div
                    className="w-[36px] h-[36px] rounded-full flex-shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${userAvatar})` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input Card */}
          <div className="border-t border-white/[0.08] bg-black p-4 sm:p-5">
            {/* Top Bar */}
            <div className="flex items-center gap-2 mb-3">
              <button className="flex h-[34px] w-[140px] sm:w-[160px] md:w-[180px] items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 backdrop-blur-[1px]">
                <img src="/images/common/logos/partners/logo-1.svg" alt="GPT" className="w-[16px] h-[16px] opacity-80" />
                <span className="font-inter text-xs text-white">GPT 4.5</span>
                <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="ml-auto opacity-50">
                  <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Globe className="h-4 w-4 text-white/50" />
              </button>
            </div>

            {/* Typing text */}
            <div className="flex items-center text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white/80 font-inter mb-3 min-h-[24px]">
              {displayText}
              <span className="ml-[2px] h-4 w-[2px] animate-pulse bg-white/50" />
            </div>

            {/* Action buttons row */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden flex-1">
                {['Chat', 'Launch Workflow', 'Data Analysis'].map((item, index) => (
                  <button
                    key={index}
                    className="flex-shrink-0 flex h-[32px] items-center rounded-lg border border-white/10 bg-white/5 px-3 text-[12px] text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex-shrink-0 w-[76px] h-[32px]">
                <GradientButton size="sm" className="!p-0 w-full h-full flex items-center justify-center !text-xs">
                  <img src="/images/common/icons/star.png" alt="star" className="w-[14px] h-[14px] mr-1" />
                  <span className="mr-1">Send</span>
                </GradientButton>
              </div>
            </div>
          </div>

        </div>
        {/* end Mobile Chat Card */}

        {/* ── Industry Cards ────────────────────────────────────────────── */}
        <div className="max-w-[1138px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group relative rounded-[16px] p-4 sm:p-5 md:p-6 flex flex-col items-center text-center h-[160px] sm:h-[180px] md:h-[200px] border border-[#1e1e1e] bg-black transition-all duration-300"
            >
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={ind.img}
                    alt={ind.label}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
                <span className="text-[17px] font-medium text-white">{ind.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIPoweredSection;

