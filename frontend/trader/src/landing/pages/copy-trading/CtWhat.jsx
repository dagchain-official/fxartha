import { Activity, Users } from 'lucide-react'
import ScrollReveal from '@/landing/components/animations/ScrollReveal'
import CtFaqList from './CtFaqList'

const faq = [
  { q: 'Do I need experience to use this?', a: 'No. It’s designed for both beginners and experienced users.' },
  { q: 'Do I lose control of my funds?',    a: 'No. You stay in full control and can stop anytime.' },
  { q: 'Is profit guaranteed?',             a: 'No. All trading involves risk.' },
]

export default function CtWhat() {
  return (
    <section className="fx-section" style={{ background: 'var(--fx-bg)' }}>
      <div className="fx-container">
        {/* ── Two-column intro ──────────────────────────────── */}
        <div className="fx-split-intro">
          <ScrollReveal variant="fadeUp">
            <div>
              <span className="fx-eyebrow mb-5">Definition</span>
              <h2 className="fx-headline text-3xl md:text-4xl lg:text-5xl mt-5">
                What is <span className="gradient-text">Copy Trading?</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <p className="text-base md:text-lg" style={{ color: 'var(--fx-text-2)' }}>
              Mirroring an experienced trader's moves, position by position, at the size you choose — no need to figure out your own setups.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Editorial explanation: prose + one quiet relationship diagram ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 md:mt-16 items-center">
          <ScrollReveal variant="fadeUp">
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-white">
                Copy trading automatically replicates the trades of experienced traders — the{' '}
                <span className="font-semibold" style={{ color: 'var(--fx-gold-light)' }}>
                  Master Traders
                </span>
                . When one opens or closes a position, the same move mirrors into your account,
                scaled to the amount you allocate.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'var(--fx-text-3)' }}>
                You don't build the strategy — you choose whose track record to follow, and at what
                size. Nothing moves without your allocation behind it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="fx-tile p-7 md:p-8">
              {/* Master → You, as a quiet vertical relationship (no mock UI) */}
              <div className="flex items-center gap-4">
                <div className="feature-icon shrink-0" style={{ width: 46, height: 46 }}>
                  <Activity size={20} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'var(--fx-text-3)' }}>
                    Master Trader
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white">Opens a position</div>
                </div>
              </div>

              <div className="ml-[22px] my-2.5 h-8 border-l" style={{ borderColor: 'var(--fx-line-strong)' }} />

              <div className="flex items-center gap-4">
                <div className="feature-icon shrink-0" style={{ width: 46, height: 46 }}>
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'var(--fx-text-3)' }}>
                    Your Account
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white">Mirrors it automatically</div>
                </div>
              </div>

              <div
                className="mt-6 pt-5 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--fx-line)' }}
              >
                <span className="text-sm" style={{ color: 'var(--fx-text-3)' }}>Your allocation</span>
                <span className="text-sm font-semibold text-white">$500 · 1× ratio</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
            <CtFaqList items={faq} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
