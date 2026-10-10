import { ArrowRight, CheckCircle2 } from 'lucide-react'

const values = [
  {
    title: 'Expertise',
    description: 'Specialists across multiple technology disciplines.',
  },
  {
    title: 'Collaboration',
    description: 'Different minds working together for better solutions.',
  },
  {
    title: 'Innovation',
    description: 'Creative technology built around real-world needs.',
  },
]

function AboutPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left Content */}
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-deep">
              About Mat Labs
            </p>

            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-mat-deep sm:text-4xl lg:text-[44px]">
              Many Minds.
              <br />
              <span className="text-mat-gold">
                Greater Solutions.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Mat Labs brings together technology specialists from different
              disciplines to design, develop, secure and improve innovative
              digital and technological solutions.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              We believe great technology is rarely built by one person alone.
              By combining expertise, collaboration and continuous learning,
              we help transform ideas into reliable solutions that create real
              value.
            </p>

            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-mat-deep transition-colors hover:text-mat-gold"
            >
              Discover Mat Labs

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right Visual */}
          <div>
            <div className="relative overflow-hidden rounded-xl bg-mat-deep">

              <img
                src="/images/about/About.png"
                alt="Mat Labs technology team"
                className="h-[300px] w-full object-cover object-center sm:h-[380px] lg:h-[430px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mat-deep/80 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-mat-gold">
                    Our Approach
                  </p>

                  <p className="mt-1 font-heading text-lg font-bold text-white">
                    Expertise Meets Collaboration
                  </p>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-mat-gold backdrop-blur-sm sm:flex">
                  <CheckCircle2 size={17} />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-slate-200 bg-[#f7f9fc] p-4 transition-all duration-300 hover:border-mat-gold/40 hover:bg-white"
                >
                  <div className="mb-3 h-1 w-7 rounded-full bg-mat-gold" />

                  <h3 className="font-heading text-[13px] font-bold text-mat-deep">
                    {value.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPreview