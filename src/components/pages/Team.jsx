import { useState } from 'react'
 
// ============================================================
// INLINE SVG ICONS
// No lucide-react
// ============================================================

function UsersIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <circle
        cx="18"
        cy="17"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="32"
        cy="19"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M7 37C7 30 12 26 18 26C24 26 29 30 29 37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M29 29C31 28 33 28 35 29C39 30 41 33 41 37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}


function LeadershipIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="24"
        cy="13"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M13 37C13 29 17 23 24 23C31 23 35 29 35 37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M8 19L11 16L14 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M34 19L37 16L40 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function CodeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M18 14L8 24L18 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M30 14L40 24L30 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M27 10L21 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}


function MobileIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <rect
        x="13"
        y="5"
        width="22"
        height="38"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M20 11H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="36"
        r="2"
        fill="currentColor"
      />
    </svg>
  )
}


function SoftwareIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M24 7L38 15V31L24 39L10 31V15L24 7Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M10 15L24 23L38 15"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M24 23V39"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}


function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M24 5L39 11V22C39 31 33 38 24 43C15 38 9 31 9 22V11L24 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M17 24L22 29L32 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <rect
        x="19"
        y="5"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="5"
        y="33"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="33"
        y="33"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M24 15V25M10 33V27H38V33"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}


function ChipIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <rect
        x="13"
        y="13"
        width="22"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="19"
        y="19"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path d="M18 7V13" stroke="currentColor" strokeWidth="2" />
      <path d="M24 7V13" stroke="currentColor" strokeWidth="2" />
      <path d="M30 7V13" stroke="currentColor" strokeWidth="2" />

      <path d="M18 35V41" stroke="currentColor" strokeWidth="2" />
      <path d="M24 35V41" stroke="currentColor" strokeWidth="2" />
      <path d="M30 35V41" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}


function DesignIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M16 32L29 19L34 24L21 37L15 38L16 32Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M27 21L32 26"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}


function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M6.2 8.4H2.7V21H6.2V8.4ZM4.45 3A2.05 2.05 0 1 0 4.45 7.1A2.05 2.05 0 0 0 4.45 3ZM21.3 13.8C21.3 10 19.3 8.1 16.6 8.1C14.4 8.1 13.4 9.3 12.8 10.1V8.4H9.3V21H12.8V14.8C12.8 13.2 13.1 11.7 15.1 11.7C17.1 11.7 17.1 13.5 17.1 14.9V21H20.6L21.3 13.8Z" />
    </svg>
  )
}


function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24C2 16.76 4.87 20.59 8.84 21.95C9.34 22.05 9.52 21.73 9.52 21.45C9.52 21.2 9.51 20.54 9.5 19.65C6.73 20.28 6.14 18.28 6.14 18.28C5.69 17.09 5.04 16.77 5.04 16.77C4.14 16.14 5.11 16.16 5.11 16.16C6.1 16.24 6.62 17.2 6.62 17.2C7.5 18.76 8.93 18.31 9.55 18.03C9.64 17.34 9.9 16.89 10.19 16.63C7.98 16.37 5.66 15.5 5.66 11.48C5.66 10.34 6.05 9.41 6.69 8.68C6.59 8.42 6.23 7.36 6.79 5.94C6.79 5.94 7.62 5.67 9.5 6.99C10.29 6.76 11.14 6.65 12 6.65C12.86 6.65 13.71 6.76 14.5 6.99C16.38 5.67 17.21 5.94 17.21 5.94C17.77 7.36 17.41 8.42 17.31 8.68C17.95 9.41 18.34 10.34 18.34 11.48C18.34 15.51 16.01 16.36 13.8 16.62C14.17 16.95 14.5 17.61 14.5 18.62C14.5 20.07 14.49 21.24 14.49 21.45C14.49 21.73 14.67 22.05 15.17 21.95C19.14 20.59 22 16.76 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}


function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M3 10H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


// ============================================================
// TEAM DATA
// ============================================================

const teamMembers = [
  {
    name: 'Emmanuel Matson',
    role: 'Founder & Team Lead',
    category: 'Leadership',
    image: '/images/team/emma.png',
    description:
      'Leads strategy, project coordination and ensures quality delivery across all services.',
    skills: [
      'Strategy',
      'Project Management',
      'Client Relations',
    ],
    socials: ['linkedin', 'github', 'email'],
    icon: LeadershipIcon,
    badge: 'leadership',
  },

  {
    name: 'Mashagiro Charles',
    role: 'Frontend Developer',
    category: 'Web Development',
    image: '/images/team/charles.jpg',
    description:
      'Builds modern, responsive and user-friendly websites and web applications.',
    skills: [
      'React',
      'Tailwind CSS',
      'UI/UX',
    ],
    socials: ['linkedin', 'github', 'email'],
    icon: CodeIcon,
    badge: 'web',
  },

  {
    name: 'Gaspard Jimmy',
    role: 'Backend Developer',
    category: 'Software Development',
    image: '/images/team/jimmy.jpg',
    description:
      'Develops secure, scalable and high-performance systems tailored to client needs.',
    skills: [
      'Java',
      'Python',
      'APIs',
    ],
    socials: ['linkedin', 'github', 'email'],
    icon: SoftwareIcon,
    badge: 'software',
  },

  {
    name: 'Divine Nobuhuro',
    role: 'Mobile App Developer',
    category: 'Mobile Apps',
    image: '/images/team/divine.jpg',
    description:
      'Creates innovative Android and iOS applications with great user experiences.',
    skills: [
      'Flutter',
      'React Native',
      'UI/UX',
    ],
    socials: ['linkedin', 'github', 'email'],
    icon: MobileIcon,
    badge: 'mobile',
  },

  {
    name: 'Deogracias Olweny',
    role: 'Cybersecurity Specialist',
    category: 'Cybersecurity',
    image: '/images/team/deo.jpg',
    description:
      'Protects systems, networks and data through security assessment and monitoring.',
    skills: [
      'Pen Testing',
      'Threat Analysis',
      'Security Audits',
    ],
    socials: ['linkedin', 'email'],
    icon: ShieldIcon,
    badge: 'cybersecurity',
  },

  {
    name: 'Mushange Byiringiro',
    role: 'Data Analyst & Network Engineer',
    category: 'Computer Networking',
    image: '/images/team/mushange.jpg',
    description:
      'Designs and manages reliable and secure network infrastructure for organizations.',
    skills: [
      'Network Design',
      'Routing',
      'System Administration',
    ],
    socials: ['linkedin', 'email'],
    icon: NetworkIcon,
    badge: 'networking',
  },

  {
    name: 'Giranyutha Alfred',
    role: 'Electronics Engineer',
    category: 'Electronics & IoT',
    image: '/images/team/alfred.jpg',
    description:
      'Works on hardware, IoT and embedded systems solutions for real-world applications.',
    skills: [
      'IoT',
      'Embedded Systems',
      'Hardware Design',
    ],
    socials: ['linkedin', 'email'],
    icon: ChipIcon,
    badge: 'electronics',
  },

  {
    name: 'Bata Lucky',
    role: 'UI/UX & Graphic Designer',
    category: 'Design & Branding',
    image: '/images/team/lucky.jpg',
    description:
      'Creates intuitive user experiences, branding and visual designs that bring ideas to life.',
    skills: [
      'UI/UX Design',
      'Branding',
      'Logo Design',
    ],
    socials: ['linkedin', 'email'],
    icon: DesignIcon,
    badge: 'design',
  },
]


// ============================================================
// FILTERS
// ============================================================

const filters = [
  {
    name: 'All',
    icon: UsersIcon,
  },
  {
    name: 'Leadership',
    icon: LeadershipIcon,
  },
  {
    name: 'Web Development',
    icon: CodeIcon,
  },
  {
    name: 'Mobile Apps',
    icon: MobileIcon,
  },
  {
    name: 'Software Development',
    icon: SoftwareIcon,
  },
  {
    name: 'Cybersecurity',
    icon: ShieldIcon,
  },
  {
    name: 'Networking',
    value: 'Computer Networking',
    icon: NetworkIcon,
  },
  {
    name: 'Electronics & IoT',
    icon: ChipIcon,
  },
  {
    name: 'Design & Branding',
    icon: DesignIcon,
  },
]


// ============================================================
// BADGE STYLES
// ============================================================

const badgeStyles = {
  leadership: 'bg-amber-100 text-amber-800',
  web: 'bg-blue-100 text-blue-700',
  software: 'bg-violet-100 text-violet-700',
  mobile: 'bg-emerald-100 text-emerald-700',
  cybersecurity: 'bg-red-100 text-red-700',
  networking: 'bg-cyan-100 text-cyan-700',
  electronics: 'bg-orange-100 text-orange-700',
  design: 'bg-pink-100 text-pink-700',
}


// ============================================================
// TEAM PAGE
// ============================================================

function Team() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredMembers =
    activeFilter === 'All'
      ? teamMembers
      : teamMembers.filter(
          (member) => member.category === activeFilter,
        )

  return (
    <div className="min-h-screen bg-white text-mat-text">


      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-mat-deep">

        <div className="relative mx-auto grid min-h-[450px] max-w-[1400px] lg:grid-cols-[0.9fr_1.25fr]">

          {/* LEFT CONTENT */}

          <div className="relative z-20 flex flex-col justify-center px-6 pb-12 pt-24 sm:px-10 lg:px-14 lg:py-20">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.38em] text-white">
              OUR TEAM
            </p>


            <h1 className="font-heading text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[54px]">

              Different Expertise.

              <span className="block text-mat-gold">
                One Strong Team.
              </span>

            </h1>


            <p className="mt-5 max-w-[540px] text-sm leading-6 text-white/70">
              At Mat Labs, we are a group of passionate IT and
              technology specialists working together to deliver
              high-quality, innovative and reliable solutions.
            </p>


            {/* HERO HIGHLIGHTS */}

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">

              <div className="flex items-center gap-3">

                <div className="text-mat-gold">
                  <UsersIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Collaboration
                  </p>

                  <p className="mt-1 text-[8px] text-white/50">
                    We work together
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3">

                <div className="text-mat-gold">
                  <CodeIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Diverse Skills
                  </p>

                  <p className="mt-1 text-[8px] text-white/50">
                    Multiple specialties
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3">

                <div className="text-mat-gold">
                  <LeadershipIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Better Solutions
                  </p>

                  <p className="mt-1 text-[8px] text-white/50">
                    For greater impact
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[450px]">

            <img
              src="/images/team/team.png"
              alt="Mat Labs technology team"
              className="absolute inset-0 h-full w-full object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep/35 to-transparent" />

          </div>

        </div>

      </section>


      {/* ======================================================
          TEAM INTRODUCTION
      ======================================================= */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-14">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <div className="relative">

            <div className="max-w-[850px]">

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
                OUR TEAM BY EXPERTISE
              </p>


              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.04em] text-mat-deep sm:text-4xl lg:text-[44px]">
                Meet the Specialists Behind{' '}
                <span className="text-mat-gold">
                  Mat Labs
                </span>
              </h2>


              <p className="mt-2 max-w-[850px] text-xs leading-5 text-mat-muted sm:text-sm">
                We bring together professionals with different skills
                and experiences to design, develop, secure and improve
                technology solutions. Each team member plays a key role
                in helping us deliver exceptional results for our clients.
              </p>

            </div>


            {/* SIDE MESSAGE */}

            <div className="absolute right-0 top-0 hidden rounded-[30px] bg-slate-50 px-7 py-5 lg:block">

              <div className="border-l-2 border-mat-gold pl-4">

                <p className="font-heading text-sm font-bold leading-5 text-mat-text">
                  Many Skills.
                  <br />
                  One Team.
                  <br />
                  Greater Impact.
                </p>

              </div>

            </div>

          </div>


          {/* ==================================================
              FILTERS
          =================================================== */}

          <div className="mt-6 flex gap-1.5 overflow-x-auto rounded-lg border border-slate-200 bg-white p-1.5 scrollbar-none">

            {filters.map((filter) => {

              const Icon = filter.icon

              const active =
                activeFilter === filter.name

              return (
                <button
                  key={filter.name}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter.value || filter.name)
                  }
                  className={`flex min-w-max items-center gap-2 rounded-md px-4 py-3 text-[8px] font-semibold transition-all duration-300 sm:text-[9px] ${
                    active
                      ? 'bg-mat-deep text-white shadow-sm'
                      : 'text-mat-muted hover:bg-slate-50 hover:text-mat-text'
                  }`}
                >

                  <Icon />

                  {filter.name}

                </button>
              )
            })}

          </div>


          {/* ==================================================
              TEAM GRID
          =================================================== */}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {filteredMembers.map((member) => {

              const Icon = member.icon

              return (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white p-3.5 shadow-[0_4px_15px_rgba(3,17,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/50 hover:shadow-[0_15px_35px_rgba(3,17,31,0.10)]"
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative h-[230px] overflow-hidden rounded-[8px] bg-slate-100 sm:h-[240px]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />


                    {/* BADGE */}

                    <div
                      className={`absolute right-2.5 top-2.5 rounded-md px-2.5 py-1.5 text-[7px] font-bold ${badgeStyles[member.badge]}`}
                    >
                      {member.category}
                    </div>

                  </div>


                  {/* =================================================
                      NAME
                  ================================================== */}

                  <div className="pt-3">

                    <h3 className="font-heading text-[14px] font-extrabold leading-5 text-mat-text">
                      {member.name}
                    </h3>


                    <p className="mt-0.5 text-[10px] font-medium text-blue-700">
                      {member.role}
                    </p>


                    <p className="mt-3 min-h-[58px] text-[9.5px] leading-4 text-mat-muted">
                      {member.description}
                    </p>


                    {/* =================================================
                        SOCIALS
                    ================================================== */}

                    <div className="mt-2.5 flex items-center gap-3 text-slate-600">

                      {member.socials.includes('linkedin') && (
                        <a
                          href="#"
                          aria-label={`${member.name} LinkedIn`}
                          className="transition-colors hover:text-blue-600"
                        >
                          <LinkedinIcon />
                        </a>
                      )}


                      {member.socials.includes('github') && (
                        <a
                          href="#"
                          aria-label={`${member.name} GitHub`}
                          className="transition-colors hover:text-mat-deep"
                        >
                          <GithubIcon />
                        </a>
                      )}


                      {member.socials.includes('email') && (
                        <a
                          href="mailto:"
                          aria-label={`Email ${member.name}`}
                          className="transition-colors hover:text-mat-gold-dark"
                        >
                          <MailIcon />
                        </a>
                      )}

                    </div>


                    {/* =================================================
                        SKILLS
                    ================================================== */}

                    <div className="mt-3 flex flex-wrap gap-1.5">

                      {member.skills.map((skill) => (

                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[7px] font-medium text-mat-muted"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>


                    {/* =================================================
                        PROFILE BUTTON
                    ================================================== */}

                    <button
                      type="button"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-mat-gold/50 px-3 py-2.5 text-[9px] font-bold text-mat-text transition-all duration-300 hover:bg-mat-gold hover:text-mat-deep"
                    >

                      View Profile

                      <ArrowRightIcon />

                    </button>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          CTA
      ======================================================= */}

      <section className="relative overflow-hidden bg-mat-deep">

        {/* Decorative lines */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[5%] top-[25%] h-px w-[35%] rotate-[-7deg] bg-mat-blue/30" />

          <div className="absolute left-[18%] bottom-[20%] h-px w-[45%] rotate-[7deg] bg-mat-gold/15" />

          <div className="absolute right-[5%] top-[40%] h-px w-[35%] rotate-[8deg] bg-mat-blue/30" />

          <div className="absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-mat-gold" />

          <div className="absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-mat-gold" />

        </div>


        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-7 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-14">

          <div className="border-l-[3px] border-mat-gold pl-5">

            <h2 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
              Want to work with our team?
            </h2>


            <p className="mt-2 max-w-[560px] text-xs leading-5 text-white/60">
              Let’s bring your idea to life. Our team is ready to help
              you design, develop, secure and grow your next project.
            </p>

          </div>


          <div className="flex flex-wrap gap-3">

            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
            >
              Get a Quote
              <ArrowRightIcon />
            </a>


            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border border-mat-gold/70 px-6 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-mat-gold hover:text-mat-deep"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}


export default Team