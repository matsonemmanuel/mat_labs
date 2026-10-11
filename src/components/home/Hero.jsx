import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-mat-deep pt-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[520px] overflow-hidden">

          {/* Background / Hero Image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-main.jpg"
              alt="Mat Labs multidisciplinary technology team"
              className="h-full w-full object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-mat-deep/45" />

            {/* Left-side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep/85 to-transparent" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mat-deep/90 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-[520px] items-center">
            <div className="w-full px-6 py-20 sm:px-10 lg:px-14 xl:px-16">

              <div className="max-w-[650px]">

                {/* Eyebrow */}
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.38em] text-mat-gold sm:text-[10px]">
                  Technology Solutions
                </p>

                {/* Heading */}
                <h1 className="font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                  Ideas. Expertise.
                  <br />
                  <span className="text-mat-gold">
                    Real Solutions.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-[570px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  Mat Labs is a multidisciplinary team of IT specialists
                  delivering innovative, reliable and impactful technology
                  solutions for individuals, businesses and organizations.
                </p>

                {/* CTA Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-2 rounded-md bg-mat-gold px-5 py-3 text-[11px] font-bold text-mat-deep transition-all duration-300 hover:bg-[#ffc95d] hover:shadow-[0_10px_35px_rgba(244,185,66,0.22)]"
                >
                  Get a Quote
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>


                  <a
                    href="/services"
                    className="group inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/[0.04] px-5 py-3 text-[11px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-mat-gold hover:text-mat-gold"
                  >
                    Explore Our Services
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Technology Words */}
          <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-1.5 border-l border-mat-gold/30 pl-4">
              {[
                'DESIGN',
                'DEVELOP',
                'SECURE',
                'CONNECT',
                'INNOVATE',
                'EMPOWER',
              ].map((word) => (
                <span
                  key={word}
                  className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/80"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Hero Highlights */}
      <div className="relative z-20 border-y border-white/10 bg-mat-deep">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          <HeroHighlight
            number="01"
            title="Multidisciplinary Team"
            description="Experts in different fields"
          />

          <HeroHighlight
            number="02"
            title="Quality & Security"
            description="Reliable and secure solutions"
          />

          <HeroHighlight
            number="03"
            title="Client-Centered"
            description="Your goals, our priority"
          />

          <HeroHighlight
            number="04"
            title="Real Impact"
            description="Turning ideas into value"
          />

        </div>
      </div>
    </section>
  )
}

function HeroHighlight({ number, title, description }) {
  return (
    <div className="flex items-center gap-3 border-white/10 px-5 py-4 first:border-r last:border-l sm:px-7 lg:border-r lg:px-8 lg:py-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mat-gold/50 text-[10px] font-bold text-mat-gold">
        {number}
      </div>

      <div>
        <h3 className="text-[10px] font-bold text-white sm:text-[11px]">
          {title}
        </h3>

        <p className="mt-0.5 text-[8px] text-white/50 sm:text-[9px]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Hero