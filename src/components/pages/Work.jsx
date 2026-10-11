import Navbar from '../layout/Navbar.jsx'
import Footer from '../layout/Footer.jsx'
import { Link } from 'react-router'


// ============================================================
// INLINE SVG ICONS
// No lucide-react
// ============================================================

function CodeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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


function SupportIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 24C15 18 19 14 24 14C29 14 33 18 33 24"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 23H10V29H15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M34 23H38V29H33"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M33 30C31 34 28 36 24 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}


function SettingsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <path
        d="M24 6V10M24 38V42M6 24H10M38 24H42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}


function UsersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5">
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


function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <path
        d="M24 6L29 18L42 19L32 28L35 41L24 34L13 41L16 28L6 19L19 18L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 24H41"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 7C29 12 31 18 31 24C31 30 29 36 24 41"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 7C19 12 17 18 17 24C17 30 19 36 24 41"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}


function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <rect
        x="7"
        y="15"
        width="34"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 15V11C17 9.3 18.3 8 20 8H28C29.7 8 31 9.3 31 11V15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 25H41"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}


function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
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


function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
      <path
        d="M4 10L8 14L16 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  {
    title: 'THEHASA Website',
    category: 'Web Development',
    description:
      'A modern nonprofit website to support girls in refugee communities featuring donation gateway and impact stories.',
    image: '/images/work/thehasa-website.jpg',
    icon: CodeIcon,
    badge: 'blue',
    technologies: ['React', 'Tailwind', 'JavaScript', 'Node'],
  },

  {
    title: 'Community Support App',
    category: 'Mobile App',
    description:
      'A mobile app connecting donors, volunteers and communities for social impact.',
    image: '/images/work/community-app.jpg',
    icon: MobileIcon,
    badge: 'green',
    technologies: ['Flutter', 'Firebase', 'Android', 'iOS'],
  },

  {
    title: 'Resource Management System',
    category: 'Software Development',
    description:
      'A complete system for managing inventory, users, reports and operations for organizations.',
    image: '/images/work/resource-system.jpg',
    icon: SoftwareIcon,
    badge: 'purple',
    technologies: ['Laravel', 'Vue', 'MySQL', 'Docker'],
  },

  {
    title: 'Security Assessment',
    category: 'Cybersecurity',
    description:
      'Comprehensive security assessment and penetration testing for a financial institution.',
    image: '/images/work/security-assessment.jpg',
    icon: ShieldIcon,
    badge: 'red',
    technologies: ['Kali Linux', 'Security', 'Networking', 'Testing'],
  },

  {
    title: 'Network Infrastructure',
    category: 'Networking',
    description:
      'Design and implementation of a secure and scalable network infrastructure for a growing business.',
    image: '/images/work/network-infrastructure.jpg',
    icon: NetworkIcon,
    badge: 'gold',
    technologies: ['Cisco', 'Ubiquiti', 'MikroTik', 'Servers'],
  },

  {
    title: 'Smart Agriculture System',
    category: 'Electronics & IoT',
    description:
      'IoT-based soil monitoring and irrigation system to improve agricultural productivity.',
    image: '/images/work/smart-agriculture.jpg',
    icon: ChipIcon,
    badge: 'green',
    technologies: ['Arduino', 'Raspberry Pi', 'IoT', 'Python'],
  },

  {
    title: 'Brand Identity Design',
    category: 'UI/UX & Design',
    description:
      'Complete brand identity including logo, visual guidelines and marketing materials for a business.',
    image: '/images/work/brand-identity.jpg',
    icon: DesignIcon,
    badge: 'pink',
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
  },

  {
    title: 'IT Support & Maintenance',
    category: 'Technical Support',
    description:
      'Ongoing technical support, maintenance and training for organizations.',
    image: '/images/work/it-support.jpg',
    icon: SupportIcon,
    badge: 'blue',
    technologies: ['Windows', 'Linux', 'Networking', 'Cloud'],
  },
]


const categories = [
  {
    name: 'All Projects',
    icon: null,
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
    icon: NetworkIcon,
  },
  {
    name: 'Electronics & IoT',
    icon: ChipIcon,
  },
  {
    name: 'UI/UX & Design',
    icon: DesignIcon,
  },
]


// ============================================================
// BADGE COLORS
// ============================================================

const badgeStyles = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  purple: 'bg-violet-100 text-violet-700',
  red: 'bg-red-100 text-red-700',
  gold: 'bg-amber-100 text-amber-700',
  pink: 'bg-pink-100 text-pink-700',
}


// ============================================================
// OUR WORK PAGE
// ============================================================

function Work() {

  return (
    <div className="min-h-screen bg-white text-mat-text">


      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-mat-deep">

        <div className="relative mx-auto grid min-h-[500px] max-w-[1400px] lg:grid-cols-[0.9fr_1.25fr]">

          {/* LEFT */}

          <div className="relative z-20 flex flex-col justify-center px-6 pb-12 pt-24 sm:px-10 lg:px-14 lg:py-20">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.38em] text-white">
              OUR WORK
            </p>


            <h1 className="font-heading text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[54px]">

              Ideas Transformed

              <span className="block text-mat-gold">
                Into Real Solutions
              </span>

            </h1>


            <p className="mt-5 max-w-[520px] text-sm leading-6 text-white/70">
              Here are some of the projects we have designed,
              developed, secured and implemented for our clients.
              Each project reflects our commitment to quality,
              innovation and real-world impact.
            </p>


            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
              >
                Start Your Project
                <ArrowRightIcon />
              </a>


              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-md border border-mat-gold/70 px-6 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-mat-gold hover:text-mat-deep"
              >
                Our Services
                <ArrowRightIcon />
              </a>

            </div>


            {/* HERO STATS */}

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">

              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <SettingsIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Real Projects
                  </p>
                  <p className="text-[8px] text-white/45">
                    Delivered to clients
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <UsersIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Multiple Industries
                  </p>
                  <p className="text-[8px] text-white/45">
                    Diverse solutions
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <ShieldIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Quality Assured
                  </p>
                  <p className="text-[8px] text-white/45">
                    Reviewed by experts
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <BriefcaseIcon />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Measurable Impact
                  </p>
                  <p className="text-[8px] text-white/45">
                    Solving real problems
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[500px]">

            <img
              src="/images/work/session.png"
              alt="Mat Labs projects"
              className="absolute inset-0 h-full w-full object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep/35 to-transparent" />


            {/* SIDE WORDS */}

            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block">

              <div className="border-l-2 border-mat-gold pl-4">

                <div className="space-y-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/80">

                  <p>DESIGN</p>
                  <p>DEVELOP</p>
                  <p>SECURE</p>
                  <p>IMPROVE</p>
                  <p>DELIVER</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FEATURED PROJECTS
      ======================================================= */}

      <section className="bg-white py-10 sm:py-14 lg:py-16">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          {/* Heading */}

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
                EXPLORE OUR WORK
              </p>


              <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-mat-text sm:text-4xl">

                Featured
                <span className="text-mat-gold">
                  {' '}Projects
                </span>

              </h2>

            </div>


            <p className="max-w-[390px] text-xs leading-5 text-mat-muted">
              Browse through our recent work across different
              technology disciplines. Use the filters to view projects
              by category.
            </p>

          </div>


          {/* CATEGORY FILTERS */}

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">

            {categories.map((category, index) => {

              const Icon = category.icon

              return (
                <button
                  key={category.name}
                  type="button"
                  className={`flex shrink-0 items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[9px] font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'border-mat-deep bg-mat-deep text-white'
                      : 'border-slate-200 bg-white text-mat-text hover:border-mat-gold hover:text-mat-gold'
                  }`}
                >

                  {Icon && (
                    <Icon />
                  )}

                  {category.name}

                </button>
              )
            })}

          </div>


          {/* PROJECT GRID */}

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {projects.map((project) => {

              const Icon = project.icon

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_4px_15px_rgba(3,17,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_15px_35px_rgba(3,17,31,0.10)]"
                >

                  {/* IMAGE */}

                  <div className="relative m-2.5 mb-0 h-[145px] overflow-hidden rounded-[7px]">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />


                    <div className="absolute inset-0 bg-mat-deep/10" />


                    {/* CATEGORY */}

                    <div
                      className={`absolute left-2.5 top-2.5 rounded-md px-2.5 py-1.5 text-[8px] font-bold ${badgeStyles[project.badge]}`}
                    >
                      {project.category}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="px-3.5 pb-4 pt-3">

                    <h3 className="font-heading text-[14px] font-extrabold text-mat-text">
                      {project.title}
                    </h3>


                    <p className="mt-1.5 min-h-[52px] text-[9.5px] leading-4 text-mat-muted">
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="mt-3 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="rounded bg-slate-50 px-1.5 py-1 text-[7px] font-semibold text-mat-muted"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>


                    <a
                      href="/contact"
                      className="group/link mt-4 inline-flex items-center gap-2 text-[9px] font-bold text-mat-text transition-colors hover:text-mat-gold"
                    >
                      View Project

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          IMPACT NUMBERS
      ======================================================= */}

      <section className="px-4 pb-8 sm:px-6">

        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[12px] bg-mat-deep">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex items-center gap-4 px-7 py-6">

              <div className="text-mat-gold">
                <BriefcaseIcon />
              </div>

              <div>
                <p className="font-heading text-2xl font-extrabold text-white">
                  50+
                </p>
                <p className="text-[9px] text-white/55">
                  Projects Delivered
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 border-t border-white/10 px-7 py-6 sm:border-l lg:border-t-0">

              <div className="text-mat-gold">
                <UsersIcon />
              </div>

              <div>
                <p className="font-heading text-2xl font-extrabold text-white">
                  30+
                </p>
                <p className="text-[9px] text-white/55">
                  Happy Clients
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 border-t border-white/10 px-7 py-6 lg:border-l lg:border-t-0">

              <div className="text-mat-gold">
                <GlobeIcon />
              </div>

              <div>
                <p className="font-heading text-2xl font-extrabold text-white">
                  5+
                </p>
                <p className="text-[9px] text-white/55">
                  Industries Served
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 border-t border-white/10 px-7 py-6 lg:border-l lg:border-t-0">

              <div className="text-mat-gold">
                <StarIcon />
              </div>

              <div>
                <p className="font-heading text-2xl font-extrabold text-white">
                  98%
                </p>
                <p className="text-[9px] text-white/55">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FEATURED CASE STUDY
      ======================================================= */}

      <section className="bg-white pb-14 sm:pb-18">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
            FEATURED CASE STUDY
          </p>


          <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-mat-text sm:text-4xl">

            From Challenge to
            <span className="text-mat-gold">
              {' '}Real Impact
            </span>

          </h2>


          <div className="mt-6 grid overflow-hidden rounded-[12px] bg-slate-50 lg:grid-cols-[0.9fr_1.1fr]">

            {/* IMAGE */}

            <div className="relative min-h-[280px]">

              <img
                src="/images/work/thehasa.png"
                alt="THEHASA website case study"
                className="absolute inset-0 h-full w-full object-cover"
              />

            </div>


            {/* CONTENT */}

            <div className="p-7 sm:p-9">

              <h3 className="font-heading text-xl font-extrabold text-mat-text sm:text-2xl">
                THEHASA – Nonprofit Website & Donation Platform
              </h3>


              <p className="mt-3 text-xs leading-5 text-mat-muted sm:text-sm">
                We designed and developed a modern, responsive website
                for THEHASA with secure donation gateway, impact stories,
                blog, and a user-friendly content management system.
              </p>


              {/* FEATURES */}

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">

                <div className="rounded-lg border border-slate-200 bg-white p-3">

                  <div className="text-mat-gold">
                    <GlobeIcon />
                  </div>

                  <p className="mt-2 text-[8px] font-semibold text-mat-text">
                    Modern & Responsive
                  </p>

                  <p className="mt-1 text-[7px] text-mat-muted">
                    Design
                  </p>

                </div>


                <div className="rounded-lg border border-slate-200 bg-white p-3">

                  <div className="text-mat-gold">
                    <ShieldIcon />
                  </div>

                  <p className="mt-2 text-[8px] font-semibold text-mat-text">
                    Secure
                  </p>

                  <p className="mt-1 text-[7px] text-mat-muted">
                    Donation Gateway
                  </p>

                </div>


                <div className="rounded-lg border border-slate-200 bg-white p-3">

                  <div className="text-mat-gold">
                    <SettingsIcon />
                  </div>

                  <p className="mt-2 text-[8px] font-semibold text-mat-text">
                    Easy Content
                  </p>

                  <p className="mt-1 text-[7px] text-mat-muted">
                    Management
                  </p>

                </div>


                <div className="rounded-lg border border-slate-200 bg-white p-3">

                  <div className="text-mat-gold">
                    <UsersIcon />
                  </div>

                  <p className="mt-2 text-[8px] font-semibold text-mat-text">
                    Increased
                  </p>

                  <p className="mt-1 text-[7px] text-mat-muted">
                    Community Engagement
                  </p>

                </div>

              </div>


              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-mat-deep hover:text-white"
              >
                View Full Case Study
                <ArrowRightIcon />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ======================================================= */}

      <section className="relative overflow-hidden bg-mat-deep">

        {/* Decorative network lines */}

        <div className="pointer-events-none absolute inset-0 opacity-40">

          <div className="absolute left-[4%] top-[30%] h-px w-[40%] rotate-[-8deg] bg-mat-blue/50" />

          <div className="absolute left-[20%] top-[60%] h-px w-[45%] rotate-[5deg] bg-mat-gold/20" />

          <div className="absolute right-[5%] top-[45%] h-px w-[35%] rotate-[8deg] bg-mat-blue/40" />

          <div className="absolute left-[12%] top-[20%] h-1.5 w-1.5 rounded-full bg-mat-gold" />
          <div className="absolute right-[20%] top-[25%] h-1 w-1 rounded-full bg-mat-gold" />
          <div className="absolute right-[12%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-mat-gold" />

        </div>


        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-7 px-6 py-11 sm:px-10 lg:flex-row lg:items-center lg:px-14">

          <div>

            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-white/70">
              LET'S BUILD TOGETHER
            </p>


            <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">

              Have a
              <span className="text-mat-gold">
                {' '}Project in Mind?
              </span>

            </h2>


            <p className="mt-2 text-xs text-white/55 sm:text-sm">
              Let’s bring your idea to life with the right team and
              the right expertise.
            </p>

          </div>


          <div className="flex flex-wrap gap-3">

            
          <Link
            to="/get-quote"
            className="inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
          >
            Get a Quote
            <ArrowRightIcon />
          </Link>



            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border border-mat-gold/70 px-6 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-mat-gold hover:text-mat-deep"
            >
              Discuss Project
            </a>

          </div>

        </div>

      </section>


    </div>
  )
}


export default Work