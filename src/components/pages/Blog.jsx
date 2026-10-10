import { useState } from 'react'

// ============================================================
// INLINE SVG ICONS
// No lucide-react
// ============================================================

function GridIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}


function CodeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 6L3 12L9 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6L21 12L15 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4L10 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}


function MobileIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 5.5H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="18.5" r="1" fill="currentColor" />
    </svg>
  )
}


function ShieldIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5L19 5.5V11C19 15.8 16.2 19.3 12 21.5C7.8 19.3 5 15.8 5 11V5.5L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 12L11 14.5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function NetworkIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="9" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="2.5" y="15.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="15.5" y="15.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8.5V12H5.5V15.5M12 12H18.5V15.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}


function ChipIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 2V6M12 2V6M15 2V6M9 18V22M12 18V22M15 18V22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 9H6M2 12H6M2 15H6M18 9H22M18 12H22M18 15H22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}


function DesignIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 16L15.5 8.5L18 11L10.5 18.5L7.5 19L8 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 10L16 12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}


function ChartIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 19V5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 19H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 15L10 11L13 13L19 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function DocumentIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 3H14L18 7V21H7V3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M14 3V7H18" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.5 11H15.5M9.5 14.5H15.5M9.5 18H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}


function UsersIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.5" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.5 20C3.5 15.8 5.8 13.5 9 13.5C12.2 13.5 14.5 15.8 14.5 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5C17.5 13.5 20.5 15.5 20.5 19.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}


function BookIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H11C12.1 4 13 4.9 13 6V20C12.2 19.2 11.2 18.8 10 18.8H5.5C4.7 18.8 4 18.1 4 17.3V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M20 5.5C20 4.7 19.3 4 18.5 4H13C11.9 4 11 4.9 11 6V20C11.8 19.2 12.8 18.8 14 18.8H18.5C19.3 18.8 20 18.1 20 17.3V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}


function LightbulbIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 18H15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.5 21H14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.5 14.5C7.5 13.4 7 12 7 10.5C7 7.5 9.2 5 12 5C14.8 5 17 7.5 17 10.5C17 12 16.5 13.4 15.5 14.5C15 15 14.8 15.5 14.8 16H9.2C9.2 15.5 9 15 8.5 14.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function MailIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
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


function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6V10L12.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M18 10C18 6.7 15.8 4 12 4C8.2 4 6 6.7 6 10V14L4 17H20L18 14V10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 20H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}


// ============================================================
// BLOG DATA
// ============================================================

const articles = [
  {
    id: 1,
    title: '10 Essential Cybersecurity Practices for Small Businesses',
    category: 'Cybersecurity',
    author: 'Kevin Tumusiime',
    date: 'Sep 28, 2025',
    readTime: '5 min read',
    image: '/images/blog/cyber.png',
    categoryClass: 'bg-emerald-100 text-emerald-700',
    icon: ShieldIcon,
  },

  {
    id: 2,
    title: 'Flutter vs React Native: Which is Right for Your Project?',
    category: 'Mobile Apps',
    author: 'Grace Achieng',
    date: 'Sep 20, 2025',
    readTime: '7 min read',
    image: '/images/blog/flutter.png',
    categoryClass: 'bg-violet-100 text-violet-700',
    icon: MobileIcon,
  },

  {
    id: 3,
    title: 'How IoT is Transforming Agriculture in Africa',
    category: 'Electronics & IoT',
    author: 'James Muwanguzi',
    date: 'Sep 15, 2025',
    readTime: '6 min read',
    image: '/images/blog/iot.png',
    categoryClass: 'bg-amber-100 text-amber-800',
    icon: ChipIcon,
  },

  {
    id: 4,
    title: 'A Beginner’s Guide to Setting Up a Small Office Network',
    category: 'Networking',
    author: 'Ruth Katusiime',
    date: 'Aug 30, 2025',
    readTime: '6 min read',
    image: '/images/blog/networking.jpg',
    categoryClass: 'bg-cyan-100 text-cyan-700',
    icon: NetworkIcon,
  },

  {
    id: 5,
    title: 'The Importance of UI/UX in Modern Software Solutions',
    category: 'UI/UX & Design',
    author: 'Peter Kazungu',
    date: 'Aug 22, 2025',
    readTime: '5 min read',
    image: '/images/blog/uiux.jpg',
    categoryClass: 'bg-pink-100 text-pink-700',
    icon: DesignIcon,
  },

  {
    id: 6,
    title: 'Clean Code Practices Every Developer Should Follow',
    category: 'Software Development',
    author: 'David Okello',
    date: 'Aug 18, 2025',
    readTime: '7 min read',
    image: '/images/blog/clean-code.jpg',
    categoryClass: 'bg-violet-100 text-violet-700',
    icon: CodeIcon,
  },

  {
    id: 7,
    title: 'How Technology Can Help Nonprofits Create Greater Impact',
    category: 'Business & Tech',
    author: 'Sarah Nambasa',
    date: 'Aug 12, 2025',
    readTime: '6 min read',
    image: '/images/blog/nonprofit-tech.jpg',
    categoryClass: 'bg-emerald-100 text-emerald-700',
    icon: ChartIcon,
  },
]


const categories = [
  {
    name: 'All Articles',
    icon: GridIcon,
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
  {
    name: 'Business & Tech',
    icon: ChartIcon,
  },
  {
    name: 'Tips & Resources',
    icon: DocumentIcon,
  },
]


// ============================================================
// BLOG PAGE
// ============================================================

function Blog() {

  const [activeCategory, setActiveCategory] = useState('All Articles')

  
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    type: '',
    message: '',
  })

  
  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (isSubscribing) return

    setIsSubscribing(true)
    setSubscriptionStatus({ type: '', message: '' })

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed. Please try again.')
      }

      setSubscriptionStatus({
        type: 'success',
        message: data.message || 'You have subscribed successfully!',
      })

      setEmail('')
    } catch (error) {
      setSubscriptionStatus({
        type: 'error',
        message:
          error.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubscribing(false)
    }
  }




  const popularArticles = articles.filter(
    (article) =>
      [
        'Cybersecurity',
        'Mobile Apps',
        'Electronics & IoT',
      ].includes(article.category),
  )


  const filteredArticles =
    activeCategory === 'All Articles'
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory,
        )


  return (
    <div className="min-h-screen bg-white text-mat-text">


      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-mat-deep">

        <div className="relative mx-auto grid min-h-[500px] max-w-[1400px] lg:grid-cols-[0.9fr_1.25fr]">

          {/* LEFT */}

          <div className="relative z-20 flex flex-col justify-center px-6 pb-12 pt-24 sm:px-10 lg:px-14 lg:py-20">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white">
              OUR BLOG
            </p>


            <h1 className="font-heading text-[39px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[52px]">

              Insights, Ideas and

              <span className="block text-mat-gold">
                Technology for a
              </span>

              <span className="block text-mat-gold">
                Better Tomorrow
              </span>

            </h1>


            <p className="mt-5 max-w-[530px] text-sm leading-5 text-white/75">
              Stay informed with expert insights, practical guides and
              the latest trends in technology. Our blog is a place where
              we share knowledge, experiences and solutions to help
              individuals, businesses and communities grow in the
              digital world.
            </p>


            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="#articles"
                className="inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
              >
                Explore Articles
                <ArrowRightIcon />
              </a>


              <a
                href="#newsletter"
                className="inline-flex items-center gap-3 rounded-md border border-mat-gold/70 px-6 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-mat-gold hover:text-mat-deep"
              >
                Subscribe
                <BellIcon />
              </a>

            </div>


            {/* HERO FEATURES */}

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">

              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <UsersIcon />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-white">
                    Expert Insights
                  </p>
                  <p className="text-[7px] text-white/50">
                    From real specialists
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <GridIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-white">
                    Practical Guides
                  </p>
                  <p className="text-[7px] text-white/50">
                    Step-by-step tutorials
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <ChartIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-white">
                    Industry Trends
                  </p>
                  <p className="text-[7px] text-white/50">
                    Stay ahead
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-2.5">

                <div className="text-mat-gold">
                  <BookIcon />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-white">
                    Real Experiences
                  </p>
                  <p className="text-[7px] text-white/50">
                    Lessons from our work
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[500px]">

            <img
              src="/images/bloog/blog.png"
              alt="Mat Labs technology blog"
              className="absolute inset-0 h-full w-full object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep/35 to-transparent" />


            {/* SIDE WORDS */}

            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block">

              <div className="border-l-2 border-mat-gold pl-4">

                <div className="space-y-2 text-[8px] font-semibold uppercase tracking-[0.27em] text-white/80">
                  <p>LEARN</p>
                  <p>SHARE</p>
                  <p>INNOVATE</p>
                  <p>GROW</p>
                  <p>TOGETHER</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          CATEGORY FILTER
      ======================================================= */}

      <section
        id="articles"
        className="bg-white pt-7"
      >

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
            BROWSE BY CATEGORY
          </p>


          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">

            {categories.map((category) => {

              const Icon = category.icon

              const active =
                activeCategory === category.name

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.name)
                  }
                  className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2.5 text-[8px] font-semibold transition-all duration-300 sm:text-[9px] ${
                    active
                      ? 'border-mat-deep bg-mat-deep text-white'
                      : 'border-slate-200 bg-white text-mat-text hover:border-mat-gold hover:text-mat-gold'
                  }`}
                >

                  <Icon />

                  {category.name}

                </button>
              )
            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          FEATURED ARTICLE
      ======================================================= */}

      <section className="bg-white py-8">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <div className="flex items-end justify-between gap-5">

            <div>

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
                FEATURED ARTICLE
              </p>


              <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-mat-text sm:text-4xl">

                Latest from
                <span className="text-mat-gold">
                  {' '}Mat Labs
                </span>

              </h2>

            </div>


            <a
              href="#popular"
              className="hidden items-center gap-2 text-[9px] font-bold text-mat-text transition-colors hover:text-mat-gold sm:flex"
            >
              View All Articles
              <ArrowRightIcon />
            </a>

          </div>


          <div className="mt-5 grid gap-5 lg:grid-cols-[1.55fr_0.95fr]">

            {/* FEATURED */}

            <article className="group relative min-h-[350px] overflow-hidden rounded-[10px]">

              
              <img
                src="/images/projects/cyberwatch.png"
                alt="Mat Labs technology team collaborating in their office"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />



              <div className="absolute inset-0 bg-gradient-to-t from-mat-deep via-mat-deep/75 to-mat-deep/10" />


              <div className="relative flex min-h-[350px] flex-col justify-end p-6 sm:p-7">

                <span className="mb-3 w-fit rounded-md bg-blue-100 px-3 py-1.5 text-[8px] font-bold text-blue-700">
                  Web Development
                </span>


                <h3 className="max-w-[610px] font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Building Modern and Scalable Web Applications in 2025
                </h3>


                <p className="mt-3 max-w-[580px] text-xs leading-5 text-white/75 sm:text-sm">
                  Discover the best practices, tools and technologies
                  for building scalable, secure and high-performing
                  web applications in 2025.
                </p>


                <div className="mt-4 flex flex-wrap items-center gap-4 text-[8px] text-white/70">

                  <span>
                    By Emmanuel Matson
                  </span>

                  <span>
                    Oct 5, 2025
                  </span>

                  <span className="flex items-center gap-1">
                    <ClockIcon />
                    8 min read
                  </span>

                </div>


                <a
                  href="/blog/building-modern-web-applications"
                  className="mt-5 inline-flex w-fit items-center gap-3 rounded-md bg-mat-gold px-5 py-3 text-[9px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
                >
                  Read Full Article
                  <ArrowRightIcon />
                </a>

              </div>

            </article>


            {/* SIDE ARTICLES */}

            <div className="space-y-3">

              {popularArticles.map((article) => {

                const Icon = article.icon

                return (
                  <article
                    key={article.id}
                    className="group grid grid-cols-[115px_1fr] gap-3 overflow-hidden rounded-[8px] border border-slate-200 bg-white p-1.5 transition-all duration-300 hover:border-mat-gold/40 hover:shadow-md"
                  >

                    <div className="relative h-[88px] overflow-hidden rounded-[6px]">

                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    </div>


                    <div className="py-1 pr-2">

                      <span
                        className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[7px] font-bold ${article.categoryClass}`}
                      >
                        <Icon className="h-3 w-3" />
                        {article.category}
                      </span>


                      <h3 className="mt-1.5 line-clamp-2 font-heading text-[11px] font-extrabold leading-[1.3] text-mat-text">
                        {article.title}
                      </h3>


                      <div className="mt-2 flex items-center gap-2 text-[7px] text-mat-muted">

                        <span>
                          By {article.author}
                        </span>

                        <span>
                          •
                        </span>

                        <span>
                          {article.date}
                        </span>

                        <span className="flex items-center gap-1">
                          <ClockIcon />
                          {article.readTime}
                        </span>

                      </div>

                    </div>

                  </article>
                )
              })}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          POPULAR ARTICLES
      ======================================================= */}

      <section
        id="popular"
        className="bg-white pb-9"
      >

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <div className="flex items-end justify-between">

            <div>

              <h2 className="font-heading text-lg font-extrabold text-mat-text sm:text-xl">
                POPULAR ARTICLES
              </h2>

              <p className="mt-1 text-xs text-mat-muted">
                Most read articles from our community.
              </p>

            </div>


            <a
              href="#articles"
              className="hidden items-center gap-2 text-[9px] font-bold text-blue-700 sm:flex"
            >
              View All Popular
              <ArrowRightIcon />
            </a>

          </div>


          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {articles.slice(3, 7).map((article) => {

              const Icon = article.icon

              return (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-[9px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_12px_30px_rgba(3,17,31,0.08)]"
                >

                  <div className="relative h-[145px] overflow-hidden">

                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />


                    <span
                      className={`absolute left-3 top-3 rounded-md px-2.5 py-1.5 text-[7px] font-bold ${article.categoryClass}`}
                    >
                      {article.category}
                    </span>

                  </div>


                  <div className="p-3.5">

                    <h3 className="font-heading text-[12px] font-extrabold leading-[1.35] text-mat-text">
                      {article.title}
                    </h3>


                    <p className="mt-2 text-[8px] text-mat-muted">
                      By {article.author}
                    </p>


                    <div className="mt-2 flex items-center gap-2 text-[7px] text-mat-muted">

                      <span>
                        {article.date}
                      </span>

                      <span>
                        •
                      </span>

                      <span className="flex items-center gap-1">
                        <ClockIcon />
                        {article.readTime}
                      </span>

                    </div>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          NEWSLETTER
      ======================================================= */}

      <section
        id="newsletter"
        className="px-4 pb-10 sm:px-6"
      >

        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[12px] bg-mat-deep">

          {/* Decorative background */}

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-20 -top-32 h-[350px] w-[550px] rounded-full border border-mat-gold/10 rotate-[-12deg]" />

            <div className="absolute right-[5%] bottom-[-130px] h-[300px] w-[500px] rounded-full border border-mat-blue/20 rotate-[10deg]" />

            <div className="absolute right-[25%] top-[15%] h-1 w-1 rounded-full bg-mat-gold" />

            <div className="absolute right-[18%] top-[60%] h-1.5 w-1.5 rounded-full bg-mat-gold/60" />

          </div>


          <div className="relative grid items-center gap-7 px-6 py-7 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10">

            {/* LEFT */}

            <div className="flex items-center gap-5">

              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-mat-gold/50 text-mat-gold sm:flex">
                <MailIcon className="h-7 w-7" />
              </div>


              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/70">
                  STAY UPDATED
                </p>


                <h2 className="mt-1 font-heading text-xl font-extrabold text-white sm:text-2xl">

                  Get the Latest Articles in
                  <span className="text-mat-gold">
                    {' '}Your Inbox
                  </span>

                </h2>


                <p className="mt-1.5 max-w-[560px] text-[10px] leading-4 text-white/60 sm:text-xs">
                  Subscribe to our newsletter and never miss new insights,
                  tutorials and technology updates from the Mat Labs team.
                </p>

              </div>

            </div>


            
          {/* FORM */}
          <form onSubmit={handleSubscribe} className="min-w-0">
            <div className="flex overflow-hidden rounded-md bg-white">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={254}
                autoComplete="email"
                placeholder="Enter your email address"
                aria-label="Email address for Mat Labs Insights"
                disabled={isSubscribing}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[10px] text-mat-text outline-none placeholder:text-slate-400 disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={isSubscribing}
                className="flex shrink-0 items-center gap-2 bg-mat-gold px-5 py-3 text-[9px] font-bold text-mat-deep transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                {!isSubscribing && <ArrowRightIcon />}
              </button>
            </div>

            {subscriptionStatus.message && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-2 text-[10px] ${
                  subscriptionStatus.type === 'success'
                    ? 'text-emerald-300'
                    : 'text-red-300'
                }`}
              >
                {subscriptionStatus.message}
              </p>
            )}

            <p className="mt-2 text-[8px] text-white/60">
              Receive Mat Labs Insights by email. Unsubscribe anytime.
            </p>
          </form>


          </div>

        </div>

      </section>


      {/* ======================================================
          BLOG GOALS
      ======================================================= */}

      <section className="bg-white pb-12">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-text">
            OUR BLOG GOALS
          </p>


          <h2 className="font-heading text-2xl font-extrabold tracking-[-0.03em] text-mat-text sm:text-3xl">

            Knowledge for a
            <span className="text-mat-gold">
              {' '}Better Digital Future
            </span>

          </h2>


          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* EDUCATE */}

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mat-gold text-mat-gold">
                <BookIcon />
              </div>


              <div>

                <h3 className="font-heading text-[11px] font-extrabold text-mat-text">
                  Educate
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-mat-muted">
                  Share practical and actionable knowledge.
                </p>

              </div>

            </div>


            {/* EMPOWER */}

            <div className="flex gap-4 border-l-0 border-slate-200 lg:border-l lg:pl-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mat-gold text-mat-gold">
                <UsersIcon />
              </div>


              <div>

                <h3 className="font-heading text-[11px] font-extrabold text-mat-text">
                  Empower
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-mat-muted">
                  Help individuals and businesses grow through technology.
                </p>

              </div>

            </div>


            {/* INSPIRE */}

            <div className="flex gap-4 border-l-0 border-slate-200 lg:border-l lg:pl-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mat-gold text-mat-gold">
                <LightbulbIcon />
              </div>


              <div>

                <h3 className="font-heading text-[11px] font-extrabold text-mat-text">
                  Inspire
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-mat-muted">
                  Show real-world applications and success stories.
                </p>

              </div>

            </div>


            {/* BUILD COMMUNITY */}

            <div className="flex gap-4 border-l-0 border-slate-200 lg:border-l lg:pl-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mat-gold text-mat-gold">
                <UsersIcon />
              </div>


              <div>

                <h3 className="font-heading text-[11px] font-extrabold text-mat-text">
                  Build Community
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-mat-muted">
                  Create a community of learners, innovators and problem solvers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}


export default Blog