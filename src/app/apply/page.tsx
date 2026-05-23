"use client";

import Link from "next/link";
import { CONFIG } from "@/config";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";

export default function ApplyPricingPage() {
  return (
    <>
      <TopAppBar />
      <main className="min-h-screen flex flex-col justify-center bg-background text-on-surface antialiased pt-[90px] pb-16 relative overflow-hidden">
        {/* Background grids and blurs */}
        <div className="absolute inset-0 z-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 md:px-12">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in-up flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md text-emerald-400 text-[9px] uppercase font-bold tracking-widest">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Govt. MSME Registered Organization
            </div>
            <h1 className="text-headline-lg md:text-display-lg text-on-surface mb-1 tracking-tight font-bold font-display">
              Internship Programs
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Structured learning tracks built by an MSME registered technology organization. Start your application below to master computer programming, software development, and AI engineering workflows.
            </p>
            {/* Upgrade Banner Link */}
            <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <span className="text-label-caps text-primary">Already a student?</span>
              <Link href="/upgrade" className="text-label-caps text-on-surface hover:text-primary underline font-bold flex items-center gap-1 transition-colors">
                Upgrade Your Plan Here
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* ===== 5-Week AI Industry Readiness Program Details ===== */}
          <div className="glass-panel p-6 md:p-8 rounded-xl border border-outline-variant/15 max-w-[1280px] mx-auto mb-12 shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-tertiary/30 to-primary/30" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Program Overview */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
                  <span className="material-symbols-outlined text-[16px] text-primary">rocket_launch</span>
                  <span className="text-[10px] text-primary uppercase font-bold tracking-widest">Industry Readiness</span>
                </div>
                <h2 className="text-headline-sm font-bold text-on-surface font-display leading-tight">
                  5-Week AI Industry Readiness Program
                </h2>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  A comprehensive program featuring a 1-week intensive Core Training phase followed by a 4-week Project Internship. You are paying strictly for the comprehensive training and mentorship in Week 1. Upon successful selection after the training phase, you are admitted to the hands-on project internship.
                </p>
              </div>

              {/* Program Weeks Timeline */}
              <div className="lg:col-span-7 flex flex-col gap-4 bg-surface-container/30 p-5 rounded-lg border border-outline-variant/10">
                <h3 className="text-label-caps text-on-surface font-bold mb-2">Program Sequence</h3>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-display shrink-0 text-body-sm">
                    W1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-body-sm font-bold text-on-surface">Week 1: Core Training & Foundations (Paid Phase)</h4>
                    <p className="text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Receive intensive guided training sessions, learning resources, mentorship, and practical assignments. Your program fee is strictly for this training and validation.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-outline-variant/10 my-1" />

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary font-bold font-display shrink-0 text-body-sm">
                    W2+
                  </div>
                  <div className="flex-1">
                    <h4 className="text-body-sm font-bold text-on-surface">Weeks 2–5: Project Internship Phase (Earned Selection)</h4>
                    <p className="text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Students who successfully complete Week 1 assignments and meet selection criteria are admitted directly to the 4-week internship phase to build real enterprise projects at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note Disclaimer callout */}
            <div className="mt-6 p-4 rounded-lg bg-warning/5 border border-warning/20 flex gap-3 text-warning-variant leading-relaxed">
              <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">info_outline</span>
              <p className="text-[11.5px] text-on-surface-variant">
                <span className="font-bold text-on-surface">Important Note:</span> The program registration fee is paid strictly for the Week 1 Core Training, learning systems, and expert mentorship. Direct admission to the subsequent 4-week Project Internship is merit-based and granted to students who demonstrate capability and successful selection during Week 1 training.
              </p>
            </div>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch stagger-children max-w-[1280px] mx-auto">
            {/* Lite Tier */}
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col border border-outline-variant/10 relative card-hover hover:border-outline-variant/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold font-display text-on-surface tracking-widest">LITE</span>
              </div>
              <div className="flex items-baseline gap-2 mt-3 mb-4 flex-wrap">
                <span className="text-4xl font-extrabold text-on-surface">₹349</span>
                <span className="text-body-sm text-on-surface-variant line-through opacity-60">₹599</span>
                <span className="text-body-sm text-on-surface-variant">/program</span>
              </div>
              <p className="text-body-sm text-on-surface-variant mb-8 min-h-[40px]">
                Perfect for exploring AI fundamentals and getting started with our community.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Weekly live sessions",
                  "Temporary LMS access",
                  "Notes & resources",
                  "Community access",
                  "Participation certificate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0 select-none">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CONFIG.registrationGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-outline-variant/30 text-on-surface text-label-caps py-3.5 rounded-lg hover:bg-surface-container transition-all active:scale-[0.98] text-center font-bold tracking-widest"
              >
                GET STARTED
              </a>
            </div>

            {/* Regular Tier — POPULAR */}
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col border-2 border-primary/40 relative card-hover animate-glow-pulse transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-primary text-on-primary text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  MOST POPULAR
                </span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold font-display text-primary tracking-widest">REGULAR</span>
              </div>
              <div className="flex items-baseline gap-2 mt-3 mb-4 flex-wrap">
                <span className="text-4xl font-extrabold text-on-surface">₹749</span>
                <span className="text-body-sm text-on-surface-variant line-through opacity-60">₹999</span>
                <span className="text-body-sm text-on-surface-variant">/program</span>
              </div>
              <p className="text-body-sm text-on-surface-variant mb-8 min-h-[40px]">
                Full internship experience with real project work and structured mentorship.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Everything in Lite",
                  "Internship certificate",
                  "Real project work",
                  "Recorded sessions",
                  "More assignments",
                  "Better mentor support",
                  "Structured workflow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0 select-none">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CONFIG.registrationGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-on-primary text-label-caps py-3.5 rounded-lg hover:bg-primary-fixed transition-all active:scale-[0.98] text-center font-bold tracking-widest block shadow-[0_0_20px_rgba(171,199,255,0.2)]"
              >
                APPLY NOW
              </a>
            </div>

            {/* Pro Tier */}
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col border border-outline-variant/10 relative card-hover hover:border-outline-variant/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold font-display text-tertiary tracking-widest">PRO</span>
              </div>
              <div className="flex items-baseline gap-2 mt-3 mb-4 flex-wrap">
                <span className="text-4xl font-extrabold text-on-surface">₹1249</span>
                <span className="text-body-sm text-on-surface-variant line-through opacity-60">₹1599</span>
                <span className="text-body-sm text-on-surface-variant">/program</span>
              </div>
              <p className="text-body-sm text-on-surface-variant mb-8 min-h-[40px]">
                Premium tier with lifetime access, 1-on-1 mentorship, and career services.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Everything in Regular",
                  "Lifetime LMS access",
                  "Lifetime recordings",
                  "Advanced content",
                  "Premium projects",
                  "1-on-1 mentorship",
                  "Resume review",
                  "LinkedIn optimization",
                  "Priority support",
                  "Course completion cert",
                  "Recommendation letters",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 select-none">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CONFIG.registrationGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-outline-variant/30 text-on-surface text-label-caps py-3.5 rounded-lg hover:bg-surface-container transition-all active:scale-[0.98] text-center font-bold tracking-widest"
              >
                GO PREMIUM
              </a>
            </div>
          </div>

          {/* Secure Note */}
          <div className="text-center mt-12">
            <p className="text-body-sm text-on-surface-variant flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-success">lock</span>
              Secure Form Registration • Verification within 24-48 hours
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
