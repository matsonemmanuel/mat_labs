import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote:
      'Mat Labs brought together the right technical expertise to turn our idea into a practical solution. The collaborative approach made a real difference.',
    name: 'Client Name',
    role: 'Organization / Position',
    initials: 'CN',
  },
  {
    quote:
      'What stood out was the attention to detail. The team looked beyond simply building the system and considered usability, security and long-term reliability.',
    name: 'Client Name',
    role: 'Organization / Position',
    initials: 'CN',
  },
  {
    quote:
      'We appreciated having different technical perspectives involved in the project. It gave us confidence that the solution had been properly reviewed.',
    name: 'Client Name',
    role: 'Organization / Position',
    initials: 'CN',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  // Automatically move to the next testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )
  }

  const testimonial = testimonials[active]

  return (
    <section className="relative overflow-hidden bg-mat-deep py-16 sm:py-20 lg:py-24">
      {/* Decorative quote */}
      <div className="pointer-events-none absolute -right-5 top-4 font-serif text-[220px] leading-none text-white/[0.025]">
        ”
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Left content */}
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-gold">
              Client Experience
            </p>

            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
              What People
              <br />
              <span className="text-mat-gold">
                Say About Us.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Our work is ultimately about the people and organizations we
              serve. Here is what our clients and collaborators have to say
              about working with Mat Labs.
            </p>

            {/* Navigation */}
            <div className="mt-7 flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-mat-gold hover:bg-mat-gold hover:text-mat-deep"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-mat-gold hover:bg-mat-gold hover:text-mat-deep"
              >
                <ArrowRight size={15} />
              </button>

              {/* Indicators */}
              <div className="ml-3 flex items-center gap-1.5">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name + index}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === active
                        ? 'w-7 bg-mat-gold'
                        : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-slide indicator */}
            <div className="mt-5 flex items-center gap-2">
              <div className="h-1 w-24 overflow-hidden rounded-full bg-white/10">
                <div
                  key={active}
                  className="h-full origin-left rounded-full bg-mat-gold"
                  style={{
                    animation: 'testimonial-progress 10s linear forwards',
                  }}
                />
              </div>

              <span className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                Auto
              </span>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-xl border-l border-t border-mat-gold/40" />

            <article
              key={active}
              className="relative rounded-xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm animate-[testimonial-enter_700ms_ease-out] sm:p-8 lg:p-10"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-mat-gold text-mat-deep">
                  <Quote size={19} fill="currentColor" />
                </div>

                <div className="flex gap-1 text-mat-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-7 max-w-3xl font-heading text-xl font-semibold leading-[1.45] tracking-[-0.02em] text-white sm:text-2xl lg:text-[26px]">
                “{testimonial.quote}”
              </blockquote>

              {/* Client */}
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mat-gold text-[10px] font-extrabold text-mat-deep">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-[11px] font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-[9px] text-white/40">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute bottom-7 right-7 hidden text-right sm:block">
                <p className="font-heading text-xl font-bold text-white/20">
                  0{active + 1}
                </p>

                <p className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                  of 0{testimonials.length}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes testimonial-enter {
          from {
            opacity: 0;
            transform: translateX(25px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes testimonial-progress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
          }

          [style*="testimonial-progress"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials