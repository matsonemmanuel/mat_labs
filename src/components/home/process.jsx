import {
  Lightbulb,
  ClipboardList,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We listen, ask the right questions and understand your goals, challenges and requirements.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We define the solution, technical approach, scope and roadmap before development begins.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'Our specialists work together to design and build a reliable, scalable and user-focused solution.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Review',
    description:
      'Relevant specialists review the solution for quality, usability, security and technical reliability.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'We launch the solution, provide support and help you move confidently toward your goals.',
    icon: Rocket,
  },
]

function Process() {
  return (
    <section className="relative overflow-hidden bg-mat-deep py-16 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-mat-gold/10" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-mat-blue/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-gold">
            How We Work
          </p>

          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
            From Idea
            <span className="text-mat-gold"> to Impact.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-[15px] sm:leading-7">
            We combine structured processes with multidisciplinary expertise
            to turn ideas into technology solutions that are reliable,
            secure and built for real-world impact.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-12 lg:mt-16">
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="absolute left-[10%] right-[10%] top-[30px] hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.number}
                    className="group relative text-center"
                  >
                    {/* Number / icon */}
                    <div className="relative z-10 mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border border-mat-gold/50 bg-mat-deep text-mat-gold transition-all duration-300 group-hover:border-mat-gold group-hover:bg-mat-gold group-hover:text-mat-deep group-hover:shadow-[0_0_30px_rgba(244,185,66,0.16)]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    {/* Step number */}
                    <p className="mt-4 text-[8px] font-bold tracking-[0.25em] text-mat-gold/70">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 font-heading text-[15px] font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-[10px] leading-5 text-white/45">
                      {step.description}
                    </p>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute right-[-14px] top-[23px] z-20 hidden text-white/20 lg:block">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-6 text-center sm:mt-14">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            One team. Multiple disciplines. One shared goal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Process