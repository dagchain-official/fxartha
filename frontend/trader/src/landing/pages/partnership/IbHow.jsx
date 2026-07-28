import { FileSignature, ShieldCheck, Share2, Activity, Coins } from 'lucide-react'
import ScrollReveal from '@/landing/components/animations/ScrollReveal'
import CtFaqList from '@/landing/pages/copy-trading/CtFaqList'

const steps = [
  { icon: FileSignature, title: 'Apply for Partnership', desc: 'Submit your application to join the program.' },
  { icon: ShieldCheck,   title: 'Get Approved',          desc: 'Receive your partner dashboard and referral infrastructure.' },
  { icon: Share2,        title: 'Introduce Traders',     desc: 'Share your partner link or onboarding system.' },
  { icon: Activity,      title: 'Users Start Trading',   desc: 'Traders join the FX Artha ecosystem.' },
  { icon: Coins,         title: 'Earn Rewards',          desc: 'Earn based on trading activity generated through your network.', highlight: true },
]

const faq = [
  { q: 'How are rewards calculated?',          a: 'Based on trading activity generated through your introduced users.' },
  { q: 'Do users pay extra because of IBs?',   a: 'No. IB rewards are integrated into platform economics.' },
]

export default function IbHow() {
  return (
    <section className="fx-section" style={{ background: 'var(--fx-bg-elev)' }}>
      <div className="fx-container">
        {/* ── Two-column intro ──────────────────────────────── */}
        <div className="fx-split-intro">
          <ScrollReveal variant="fadeUp">
            <div>
              <span className="fx-eyebrow mb-5">How It Works</span>
              <h2 className="fx-headline text-3xl md:text-4xl lg:text-5xl mt-5">
                How the FX Artha <span className="gradient-text">IB Program Works</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <p className="text-base md:text-lg" style={{ color: 'var(--fx-text-2)' }}>
              Five steps from filling out the application to your first commission.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Numbered vertical timeline ────────────────────── */}
        <div className="mt-10 md:mt-14">
          <ScrollReveal variant="fadeUp">
            <div className="fx-tile p-6 sm:p-7 md:p-8 max-w-3xl mx-auto">
              <span className="fx-accent-bar mb-4" />
              <div className="relative space-y-6 md:space-y-7">
                {steps.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <ScrollReveal key={s.title} variant="fadeUp" delay={i * 0.12}>
                      <div className="group relative flex items-start gap-5">
                        {/* connector to the next node only — sits behind the opaque
                            nodes so the line never crosses a number */}
                        {i < steps.length - 1 && (
                          <span
                            aria-hidden
                            className="absolute left-[22px] top-[44px] -bottom-6 md:-bottom-7 w-px -translate-x-1/2 z-0"
                            style={{
                              background:
                                'linear-gradient(180deg, rgba(221,169,46,0.55), rgba(221,169,46,0.14))',
                            }}
                          />
                        )}

                        <span
                          className="relative z-[1] shrink-0 flex items-center justify-center rounded-full text-sm font-bold transition-transform duration-300 group-hover:scale-105"
                          style={{
                            width: 44,
                            height: 44,
                            background: s.highlight
                              ? 'linear-gradient(180deg, var(--fx-gold-light) 0%, var(--fx-gold) 100%)'
                              : 'var(--fx-bg-elev-2)',
                            color: s.highlight ? '#1c1608' : 'var(--fx-gold-light)',
                            border: s.highlight
                              ? '1px solid rgba(247,216,115,0.5)'
                              : '1px solid rgba(221,169,46,0.3)',
                            boxShadow: s.highlight
                              ? '0 0 0 5px rgba(221,169,46,0.14), 0 12px 26px -8px rgba(221,169,46,0.6)'
                              : '0 8px 18px -8px rgba(0,0,0,0.85)',
                          }}
                        >
                          {i + 1}
                        </span>

                        <div className="pt-1.5">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon size={16} style={{ color: 'var(--fx-gold-light)' }} />
                            <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                              {s.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'var(--fx-text-2)' }}>
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="mt-10 max-w-3xl mx-auto">
            <CtFaqList items={faq} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
