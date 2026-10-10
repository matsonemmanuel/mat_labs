import { ArrowUpRight } from 'lucide-react'

const partners = [
  {
    name: 'Partner One',
    shortName: 'P1',
  },
  {
    name: 'Partner Two',
    shortName: 'P2',
  },
  {
    name: 'Partner Three',
    shortName: 'P3',
  },
  {
    name: 'Partner Four',
    shortName: 'P4',
  },
  {
    name: 'Partner Five',
    shortName: 'P5',
  },
  {
    name: 'Partner Six',
    shortName: 'P6',
  },
]

function Partners() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-deep">
            Our Network
          </p>

          <h2 className="font-heading text-2xl font-extrabold tracking-[-0.03em] text-mat-deep sm:text-3xl lg:text-[38px]">
            Trusted by{' '}
            <span className="text-mat-gold">
              Forward-Thinking Organizations
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
            We believe strong technology is built through strong
            collaboration. Mat Labs works with organizations, teams and
            individuals who are committed to innovation and meaningful impact.
          </p>
        </div>

        {/* Logo track */}
        <div className="relative mt-10 overflow-hidden">
          {/* Fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          {/* Track */}
          <div className="flex w-max animate-[partner-scroll_28s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="mx-2 flex h-[82px] w-[155px] shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#f7f9fc] px-5 transition-all duration-300 hover:border-mat-gold/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(7,26,43,0.06)] sm:mx-3 sm:h-[90px] sm:w-[180px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-mat-deep text-[9px] font-extrabold text-mat-gold">
                    {partner.shortName}
                  </div>

                  <span className="font-heading text-[10px] font-bold text-slate-500">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 flex justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-mat-deep transition-colors hover:text-mat-gold"
          >
            Become a Partner
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[partner-scroll_28s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Partners