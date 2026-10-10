const projects = [
  {
    number: '01',
    title: 'ShambaSmart',
    category: 'Agriculture Technology',
    description:
      'An AI-powered agricultural platform designed to help farmers access useful farming information, market insights and technology-driven agricultural support.',
    tags: ['AI', 'Web Platform', 'Agritech'],
    symbol: '◈',
    image: '/images/projects/educore.png',
  },
  {
    number: '02',
    title: 'CyberWatch',
    category: 'Cybersecurity',
    description:
      'A security monitoring platform designed to help organizations monitor events, identify potential threats and improve their cybersecurity visibility.',
    tags: ['Cybersecurity', 'Monitoring', 'Security'],
    symbol: '⌁',
    image: '/images/projects/cyberwatch.png',
  },
  {
    number: '03',
    title: 'Referral Management System',
    category: 'Software Development',
    description:
      'A digital case referral and management solution designed to improve referral tracking, communication, history management and organizational coordination.',
    tags: ['Java', 'MySQL', 'API'],
    symbol: '◫',
    image: '/images/projects/referral.jpg',
  },
  {
    number: '04',
    title: 'Mobile Solutions',
    category: 'Mobile Development',
    description:
      'Purpose-built mobile applications designed around user needs, accessibility, performance and practical real-world use cases.',
    tags: ['Mobile', 'UI/UX', 'Development'],
    symbol: '▣',
    image: '/images/projects/shamba.png',
  },
]

function ProjectsPreview() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">

            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-deep">
              Our Work
            </p>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] text-mat-deep sm:text-4xl lg:text-[44px]">
              Technology Built for
              <span className="text-mat-gold"> Real Impact.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Explore some of the digital and technological solutions we are
              building to solve real-world challenges and create meaningful
              value.
            </p>

          </div>

          <a
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-mat-deep transition-colors hover:text-mat-gold"
          >
            View All Projects

            <span
              aria-hidden="true"
              className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_18px_45px_rgba(7,26,43,0.10)]">

      {/* Project Image */}
      <div className="relative h-[230px] overflow-hidden bg-mat-deep sm:h-[270px]">

        <img
          src={project.image}
          alt={`${project.title} project`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mat-deep via-mat-deep/30 to-transparent" />

        {/* Project number */}
        <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-mat-deep/60 text-[9px] font-bold text-mat-gold backdrop-blur-sm">
          {project.number}
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-5">
          <div className="flex items-center gap-2">

            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-mat-gold/40 bg-mat-deep/50 text-[10px] text-mat-gold backdrop-blur-sm"
            >
              {project.symbol}
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white">
              {project.category}
            </span>

          </div>
        </div>

        {/* View indicator */}
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:border-mat-gold group-hover:bg-mat-gold group-hover:text-mat-deep">
          ↗
        </div>

      </div>

      {/* Project content */}
      <div className="p-5 sm:p-6">

        <h3 className="font-heading text-lg font-bold tracking-[-0.02em] text-mat-deep">
          {project.title}
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project link */}
        <a
          href="/work"
          className="group/link mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold text-mat-deep transition-colors hover:text-mat-gold"
        >
          Explore Project

          <span
            aria-hidden="true"
            className="text-sm transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          >
            ↗
          </span>
        </a>

      </div>
    </article>
  )
}

export default ProjectsPreview