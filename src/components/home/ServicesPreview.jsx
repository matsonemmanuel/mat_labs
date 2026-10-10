import {
  Globe,
  Smartphone,
  Code2,
  ShieldCheck,
  Network,
  Cpu,
  Palette,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive and scalable websites.',
    icon: Globe,
    color: 'blue',
  },
  {
    title: 'Mobile App Development',
    description: 'Android, iOS and cross-platform applications.',
    icon: Smartphone,
    color: 'gold',
  },
  {
    title: 'Software Development',
    description: 'Custom systems for your unique needs.',
    icon: Code2,
    color: 'navy',
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your systems and data.',
    icon: ShieldCheck,
    color: 'gold',
  },
  {
    title: 'Computer Networking',
    description: 'Reliable and secure network infrastructure.',
    icon: Network,
    color: 'blue',
  },
  {
    title: 'Electronics & IoT',
    description: 'Innovative hardware and embedded solutions.',
    icon: Cpu,
    color: 'gold',
  },
  {
    title: 'UI/UX & Graphic Design',
    description: 'User-centered designs that bring ideas to life.',
    icon: Palette,
    color: 'blue',
  },
  {
    title: 'Technical Support & Training',
    description: 'Ongoing support and capacity building.',
    icon: GraduationCap,
    color: 'gold',
  },
]

function ServicesPreview() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-deep">
              Our Services
            </p>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.03em] text-mat-deep sm:text-4xl lg:text-[42px]">
              Comprehensive{' '}
              <span className="text-mat-gold">
                Technology Solutions
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
              We provide a wide range of technology services through a
              multidisciplinary team of specialists, delivering high-quality
              solutions tailored to your needs.
            </p>
          </div>

          <a
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold text-mat-deep transition-colors hover:text-mat-gold"
          >
            View All Services
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon

  const iconStyles = {
    blue: 'border-blue-200 bg-blue-50 text-blue-700',
    gold: 'border-amber-200 bg-amber-50 text-mat-gold',
    navy: 'border-slate-200 bg-slate-100 text-mat-deep',
  }

  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(7,26,43,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_14px_35px_rgba(7,26,43,0.09)]">

      {/* Icon */}
      <div
        className={`mb-5 flex h-10 w-10 items-center justify-center rounded-md border ${iconStyles[service.color]} transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon size={19} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="font-heading text-[15px] font-bold leading-5 text-mat-deep">
        {service.title}
      </h3>

      <p className="mt-2 min-h-[40px] text-[11px] leading-5 text-slate-500">
        {service.description}
      </p>

      {/* Link */}
      <a
        href="/services"
        className="group/link mt-4 inline-flex items-center gap-1 text-[10px] font-bold text-mat-deep transition-colors hover:text-mat-gold"
      >
        Learn More
        <ArrowRight
          size={12}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </a>
    </article>
  )
}

export default ServicesPreview