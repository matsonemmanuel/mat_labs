import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import AfricaNetwork from '../common/AfricaNetwork.jsx'

function Footer() {
  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'Cybersecurity',
    'Computer Networking',
    'Electronic Engineering & IoT',
    'Data analytics & AI',
    'UI/UX & Graphic Design',
  ]

  
const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Our Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]


  const socials = [
    'LinkedIn',
    'Facebook',
    'Instagram',
    'GitHub',
  ]

  return (
    <footer className="relative overflow-hidden bg-mat-deep text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft blue glow */}
        <div className="absolute left-[-15%] top-[15%] h-[450px] w-[450px] rounded-full bg-mat-blue/[0.06] blur-[120px]" />

        {/* Soft gold glow */}
        <div className="absolute right-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-mat-gold/[0.05] blur-[130px]" />

        {/* Horizontal technology lines */}
        <div className="absolute left-0 top-[16%] h-px w-[42%] bg-gradient-to-r from-transparent via-mat-gold/20 to-transparent" />

        <div className="absolute right-0 top-[31%] h-px w-[32%] bg-gradient-to-r from-transparent via-mat-gold/15 to-transparent" />

        <div className="absolute left-0 top-[62%] h-px w-[28%] bg-gradient-to-r from-transparent via-mat-blue/20 to-transparent" />

        <div className="absolute right-0 bottom-[20%] h-px w-[35%] bg-gradient-to-r from-transparent via-mat-gold/10 to-transparent" />

        {/* Small decorative nodes */}
        <span className="absolute left-[7%] top-[18%] h-1.5 w-1.5 rounded-full bg-mat-gold/40" />
        <span className="absolute left-[30%] top-[26%] h-1 w-1 rounded-full bg-mat-gold/30" />
        <span className="absolute right-[38%] top-[18%] h-1.5 w-1.5 rounded-full bg-mat-gold/30" />
        <span className="absolute left-[14%] bottom-[24%] h-1 w-1 rounded-full bg-mat-blue/40" />
        <span className="absolute right-[12%] bottom-[31%] h-1.5 w-1.5 rounded-full bg-mat-gold/30" />

        {/* Africa */}
        <AfricaNetwork />
      </div>


      {/* =========================================================
          MAIN FOOTER CONTENT
      ========================================================== */}

      <div className="relative z-10">

        {/* =======================================================
            CTA
        ======================================================== */}

        <section className="border-b border-white/10">

          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">

              {/* CTA decorative glow */}
              <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[280px] w-[280px] rounded-full bg-mat-gold/[0.07] blur-3xl" />

              <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

                <div className="max-w-2xl">

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-mat-gold">
                    START A CONVERSATION
                  </p>

                  <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                    Have an idea?
                    <span className="block text-white/60">
                      Let's build it.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                    Whether you are building a digital product,
                    improving your systems, securing your infrastructure,
                    or exploring a new technology idea, Mat Labs brings
                    the right expertise together to make it happen.
                  </p>

                </div>


                {/* CTA Button */}
                <a
                  href="/GetQuote"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-mat-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-mat-deep transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(244,185,66,0.18)]"
                >
                  Start a Project

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mat-deep/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight size={14} />
                  </span>
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            FOOTER INFORMATION
        ======================================================== */}

        <section>

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

            <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">

              {/* =================================================
                  BRAND
              ================================================== */}

              <div className="max-w-sm">

                {/* Logo */}
                <a href="/" className="group inline-flex items-center gap-3">
                <img
                  src="/images/brand/mat2.png"
                  alt="Mat Labs"
                  className="h-[58px] w-auto object-contain"
                />
                  


                </a>


                <p className="mt-7 text-sm leading-7 text-white/45">
                  A multidisciplinary technology platform bringing
                  together expertise in design, development, software,
                  cybersecurity, networking, electronics and digital
                  innovation.
                </p>


                {/* Tagline */}
                <div className="mt-7">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-mat-gold">
                    Technology. Expertise. Innovation.
                  </p>

                </div>


                {/* Social Links */}
                <div className="mt-8 flex flex-wrap gap-2">

                  {socials.map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40 transition-all duration-300 hover:border-mat-gold/40 hover:bg-mat-gold/5 hover:text-mat-gold"
                    >
                      {social}
                    </a>
                  ))}

                </div>

              </div>


              {/* =================================================
                  COMPANY
              ================================================== */}

              <div>

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-mat-gold">
                  COMPANY
                </p>

                <ul className="space-y-3.5">

                  
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={11}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                      />
                    </a>
                  </li>
                ))}


                </ul>

              </div>


              {/* =================================================
                  SERVICES
              ================================================== */}

              <div>

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-mat-gold">
                  SERVICES
                </p>

                <ul className="space-y-3.5">

                  {services.map((service) => (
                    <li key={service}>

                      <a
                        href="#"
                        className="group inline-flex items-start gap-2 text-sm leading-5 text-white/45 transition-colors duration-300 hover:text-white"
                      >

                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mat-gold/40 transition-colors duration-300 group-hover:bg-mat-gold" />

                        {service}

                      </a>

                    </li>
                  ))}

                </ul>

              </div>


              {/* =================================================
                  CONTACT
              ================================================== */}

              <div>

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-mat-gold">
                  GET IN TOUCH
                </p>


                <div className="space-y-5">

                  {/* Email */}
                  <a
                    href="mailto:hello@matlabs.ug"
                    className="group flex items-start gap-3"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-mat-gold transition-all duration-300 group-hover:border-mat-gold/30 group-hover:bg-mat-gold/5">
                      <Mail size={15} />
                    </span>

                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-white/25">
                        Email
                      </p>

                      <p className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white">
                        info@matlbs.com
                      </p>
                    </div>

                  </a>


                  {/* Phone */}
                  <a
                    href="tel:+256000000000"
                    className="group flex items-start gap-3"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-mat-gold transition-all duration-300 group-hover:border-mat-gold/30 group-hover:bg-mat-gold/5">
                      <Phone size={15} />
                    </span>

                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-white/25">
                        Phone
                      </p>

                      <p className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white">
                        +256 777 268 968
                      </p>
                    </div>

                  </a>


                  {/* Location */}
                  <div className="flex items-start gap-3">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-mat-gold">
                      <MapPin size={15} />
                    </span>

                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-white/25">
                        Location
                      </p>

                      <p className="text-sm text-white/55">
                        Uganda
                      </p>
                    </div>

                  </div>

                </div>


                {/* Small note */}
                <div className="mt-8 border-l border-mat-gold/30 pl-4">

                  <p className="text-xs leading-6 text-white/30">
                    Local expertise.
                    <br />
                    Global possibilities.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            BOTTOM BAR
        ======================================================== */}

        <section className="border-t border-white/10">

          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

            <div className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">

              {/* Copyright */}
              <p className="text-[9px] text-white/30">
                © {new Date().getFullYear()} Mat Labs.
                All rights reserved.
              </p>


              {/* Legal links */}
              

                
              <div className="flex items-center gap-4 text-[9px] font-medium text-white/50 sm:gap-6">
                <a
                  href="/privacy-policy"
                  className="transition-colors hover:text-mat-gold"
                >
                  Privacy Policy
                </a>

                <span className="h-4 w-px bg-white/15" aria-hidden="true" />

                <a
                  href="/terms-of-service"
                  className="transition-colors hover:text-mat-gold"
                >
                  Terms of Service
                </a>
              </div>


              


              {/* =================================================
                  POWERED BY MAT LABS
              ================================================== */}

              <div className="flex items-center gap-2.5">

                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/25">
                  Powered by
                </span>

                <a
                  href="/"
                  aria-label="Powered by Mat Labs"
                  className="group flex items-center gap-2"
                >

                  {/* Mat Labs Logo */}
                  
                  <img
                    src="/images/brand/mat2.png"
                    alt="Mat Labs"
                    className="h-[38px] w-auto object-contain"
                  />

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            GOLD BOTTOM LINE
        ======================================================== */}

        <div className="h-[3px] bg-gradient-to-r from-mat-blue via-mat-gold to-mat-blue" />

      </div>

    </footer>
  )
}

export default Footer