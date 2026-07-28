'use client'

import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function InHero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: 'var(--fx-bg)' }}
    >
      {/* Background banner */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/images/Insurance_hero.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,10,14,0.9) 0%, rgba(8,10,14,0.6) 32%, rgba(8,10,14,0.18) 58%, rgba(8,10,14,0) 82%), radial-gradient(60% 60% at 80% 25%, rgba(221,169,46,0.10) 0%, rgba(221,169,46,0) 60%)',
        }}
      />
      <div className="fx-container relative z-10 w-full pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="fx-fade-up mb-5">
              <span className="badge">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--fx-gold)', boxShadow: '0 0 8px rgba(221,169,46,0.7)' }}
                />
                Trade Insurance
              </span>
            </div>
            <h1 className="fx-headline text-[26px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] fx-fade-up fx-fade-up-d1">
              Trade With <br />
              <span className="fx-gold-text">Built-In Protection.</span>
            </h1>
            <p
              className="mt-5 max-w-xl text-base md:text-lg leading-relaxed fx-fade-up fx-fade-up-d2"
              style={{ color: 'var(--fx-text-2)' }}
            >
              Pick a coverage plan and stay protected across all your trading activity.
              Clear rules, no surprises — just structured risk control that works in the background.
            </p>
            <p
              className="mt-4 text-sm md:text-base font-semibold fx-fade-up fx-fade-up-d2"
              style={{ color: 'var(--fx-gold-light)' }}
            >
              Flexible coverage. Controlled risk. Smarter trading.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 fx-fade-up fx-fade-up-d3">
              <Link to="#coverage" className="fx-btn-primary justify-center">
                Explore Plans
                <ArrowRight size={18} />
              </Link>
              <Link to="/auth/register" className="fx-btn-ghost justify-center">
                <ShieldCheck size={16} />
                Activate Protection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
