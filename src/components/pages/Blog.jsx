import { useState } from 'react'
import { Link } from 'react-router'

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

export const articles = [
  {
  id: 1,
  title: '10 Essential Cybersecurity Practices for Small Businesses',
  category: 'Cybersecurity',
  author: 'Kevin Tumusiime',
  authorRole: 'Cybersecurity Contributor',
  authorBio:
    'Writes about cybersecurity awareness, digital safety and practical ways businesses can protect their technology systems.',
  authorImage: '/images/authors/kevin.jpg',
  date: 'Sep 28, 2025',
  readTime: '5 min read',
  image: '/images/blog/cyber.png',
  categoryClass: 'bg-emerald-100 text-emerald-700',
  icon: ShieldIcon,

  introduction:
    'Cybersecurity is no longer a concern reserved for large corporations. Small businesses increasingly depend on digital systems to manage customers, payments, communication and business operations. Without appropriate security measures, a single cyber incident can disrupt operations, expose sensitive information and damage customer trust.',

  takeaways: [
    'Use strong, unique passwords and enable multi-factor authentication.',
    'Keep operating systems, applications and devices updated.',
    'Train employees to identify phishing and suspicious messages.',
    'Back up important business information regularly.',
    'Restrict access to sensitive business information.',
  ],

  content: [
    {
      id: 'strong-passwords',
      heading: '1. Use Strong and Unique Passwords',
      paragraphs: [
        'Weak or reused passwords make it easier for attackers to access business accounts. Every important account should have a unique password that is difficult to guess.',
        'Consider using a reputable password manager to generate and securely store passwords. Enable multi-factor authentication wherever it is available.',
      ],
      points: [
        'Avoid using personal names, birthdays or predictable combinations.',
        'Never reuse business passwords across different platforms.',
        'Enable multi-factor authentication on email and financial accounts.',
      ],
    },
    {
      id: 'software-updates',
      heading: '2. Keep Software and Devices Updated',
      paragraphs: [
        'Software updates often contain security fixes that address vulnerabilities. Delaying updates can leave business computers, applications and mobile devices exposed to known security weaknesses.',
        'Enable automatic updates where practical and regularly check that business devices are running supported software.',
      ],
    },
    {
      id: 'employee-training',
      heading: '3. Educate Employees About Cyber Threats',
      paragraphs: [
        'Employees are often the first people to encounter suspicious emails, fraudulent links and unexpected requests for information.',
        'Regular cybersecurity awareness training helps staff recognise phishing attempts, verify unusual requests and report suspicious activity before it causes harm.',
      ],
    },
    {
      id: 'data-backups',
      heading: '4. Back Up Important Business Data',
      paragraphs: [
        'Regular backups help businesses recover important information following accidental deletion, hardware failure, ransomware or other disruptive incidents.',
        'Maintain protected backups, keep at least one copy separate from everyday business systems and periodically test whether your data can actually be restored.',
      ],
    },
    {
      id: 'access-control',
      heading: '5. Control Access to Business Information',
      paragraphs: [
        'Not every employee needs access to every business system or document. Grant users only the permissions necessary to perform their responsibilities.',
        'Review user accounts regularly and immediately remove access when employees leave or change roles.',
      ],
    },
  ],
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
    name: 'All',
    icon: GridIcon,
  },
  {
    name: 'Scholarships',
    icon: BookIcon,
  },
  {
    name: 'Fellowships',
    icon: UsersIcon,
  },
  {
    name: 'Internships',
    icon: DocumentIcon,
  },
  {
    name: 'Grants & Funding',
    icon: ChartIcon,
  },
  {
    name: 'Competitions',
    icon: LightbulbIcon,
  },
  {
    name: 'Career Resources',
    icon: DocumentIcon,
  },
  {
    name: 'Technology Insights',
    icon: CodeIcon,
  },
  {
    name: 'Cybersecurity',
    icon: ShieldIcon,
  },
  {
    name: 'Software Development',
    icon: MobileIcon,
  },
  {
    name: 'Networking',
    icon: NetworkIcon,
  },
]



// ============================================================
// BLOG PAGE
// ============================================================

function Blog() {

  const [activeCategory, setActiveCategory] = useState('All')

  const opportunities = [
  {
    id: 1,
    title: 'Scholarship opportunity to be announced',
    category: 'Scholarships',
    provider: 'Provider to be confirmed',
    location: 'To be confirmed',
    deadline: 'To be confirmed',
    funding: 'To be confirmed',
    status: 'Under research',
    description:
      'Our editorial team is researching scholarship opportunities and will publish verified application information here.',
  },
  {
    id: 2,
    title: 'Fellowship opportunity to be announced',
    category: 'Fellowships',
    provider: 'Provider to be confirmed',
    location: 'To be confirmed',
    deadline: 'To be confirmed',
    funding: 'To be confirmed',
    status: 'Under research',
    description:
      'Discover fellowship programmes supporting leadership, professional growth and community impact.',
  },
  {
    id: 3,
    title: 'Internship opportunity to be announced',
    category: 'Internships',
    provider: 'Provider to be confirmed',
    location: 'To be confirmed',
    deadline: 'To be confirmed',
    funding: 'To be confirmed',
    status: 'Under research',
    description:
      'We are identifying internship opportunities that help young professionals gain practical experience.',
  },
  {
    id: 4,
    title: 'Grant opportunity to be announced',
    category: 'Grants & Funding',
    provider: 'Provider to be confirmed',
    location: 'To be confirmed',
    deadline: 'To be confirmed',
    funding: 'To be confirmed',
    status: 'Under research',
    description:
      'Explore upcoming funding opportunities for organisations, innovators and community initiatives.',
  },
  {
    id: 5,
    title: 'Competition opportunity to be announced',
    category: 'Competitions',
    provider: 'Provider to be confirmed',
    location: 'To be confirmed',
    deadline: 'To be confirmed',
    funding: 'To be confirmed',
    status: 'Under research',
    description:
      'We are researching competitions that recognise creativity, innovation and emerging talent.',
  },
  {
    id: 6,
    title: 'Career resource to be announced',
    category: 'Career Resources',
    provider: 'Mat Labs Editorial Team',
    location: 'Online',
    deadline: 'Not applicable',
    funding: 'Not applicable',
    status: 'Coming soon',
    description:
      'Practical career guidance, professional development resources and tools for your next career step.',
  },
]

  
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
  activeCategory === 'All'
    ? articles
    : articles.filter(
        (article) => article.category === activeCategory
      )

  const filteredOpportunities =
  activeCategory === 'All'
    ? opportunities
    : opportunities.filter(
        (opportunity) => opportunity.category === activeCategory
      )


  return (
    <div className="min-h-screen bg-white text-mat-text">


      {/* ======================================================
          HERO
      ======================================================= */}

      
{/* ======================================================
    INSIGHTS & OPPORTUNITIES HERO
======================================================= */}

<section className="relative overflow-hidden bg-mat-deep">
  <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-mat-gold/10" />
  <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-mat-blue/20" />

  <div className="relative mx-auto grid min-h-[480px] max-w-[1400px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">

    {/* LEFT CONTENT */}
    <div className="relative z-10">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-mat-gold">
        MAT LABS INSIGHTS & OPPORTUNITIES
      </p>

      <h1 className="max-w-[680px] font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px]">
        Opportunities.
        <span className="block text-mat-gold">
          Knowledge.
        </span>
        <span className="block">
          Possibilities.
        </span>
      </h1>

      <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/70 sm:text-base">
        Discover carefully curated scholarships, fellowships,
        internships and funding opportunities, alongside practical
        insights to help you learn, grow and advance in a digital world.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#opportunities"
          className="inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3.5 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
        >
          Explore Opportunities
          <ArrowRightIcon />
        </a>

        <a
          href="#insights"
          className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3.5 text-[10px] font-bold text-white transition-all duration-300 hover:border-mat-gold hover:text-mat-gold"
        >
          Explore Insights
          <ArrowRightIcon />
        </a>
      </div>

      {/* TRUST INDICATORS */}
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6">
        <div>
          <p className="text-xs font-bold text-white">
            Carefully Curated
          </p>
          <p className="mt-1 text-[9px] text-white/50">
            Research-led publishing
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-white">
            Official Sources
          </p>
          <p className="mt-1 text-[9px] text-white/50">
            Direct application links
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-white">
            Knowledge Driven
          </p>
          <p className="mt-1 text-[9px] text-white/50">
            Insights that empower
          </p>
        </div>
      </div>
    </div>

    


{/* RIGHT VISUAL — CLEAN EDITORIAL FEATURE */}
<div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">

  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071A2B] shadow-2xl">

    {/* PHOTOGRAPH */}
    <div className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[370px]">
      <img
        src="/images/bloog/blog.png"
        alt="Mat Labs team collaborating on technology and opportunities"
        className="h-full w-full object-cover object-center"
      />
    </div>

    {/* INFORMATION PANEL */}
    <div className="relative border-t border-white/10 px-6 py-6 sm:px-8 sm:py-7">

      {/* GOLD ACCENT */}
      <div className="absolute left-8 top-0 h-[3px] w-14 -translate-y-1/2 bg-mat-gold" />

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-mat-gold" />
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-mat-gold">
          MAT LABS INSIGHTS & OPPORTUNITIES
        </p>
      </div>

      <h2 className="mt-3 max-w-[520px] font-heading text-xl font-extrabold leading-snug text-white sm:text-2xl">
        Your next opportunity could change your future.
      </h2>

      <p className="mt-3 max-w-[520px] text-xs leading-6 text-white/65 sm:text-sm">
        Discover opportunities, expand your knowledge and take
        meaningful steps towards your educational and professional goals.
      </p>

      {/* EDITORIAL FOOTER */}
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
          Research. Verify. Inform.
        </span>

        <span className="text-[9px] font-bold uppercase tracking-wider text-mat-gold">
          MAT LABS
        </span>
      </div>

    </div>
  </div>

</div>




  </div>
</section>



      
{/* ======================================================
    OPPORTUNITY CATEGORIES
======================================================= */}

<section
  id="opportunities"
  className="bg-white py-16 sm:py-20"
>
  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700">
          EXPLORE WHAT MATTERS
        </p>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-mat-text sm:text-4xl">
          Find Your Next
          <span className="text-mat-gold"> Opportunity</span>
        </h2>

        <p className="mt-3 max-w-[580px] text-sm leading-6 text-mat-muted">
          Explore carefully curated opportunities across education,
          professional development, funding and innovation.
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold text-mat-text">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Curated by Mat Labs
      </div>

    </div>

    
{/* CATEGORY CARDS */}
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

  {[
    {
      name: 'Scholarships',
      description: 'Explore undergraduate, postgraduate and doctoral funding opportunities.',
      icon: BookIcon,
      number: '01',
    },
    {
      name: 'Fellowships',
      description: 'Discover leadership, research and professional development programmes.',
      icon: UsersIcon,
      number: '02',
    },
    {
      name: 'Internships',
      description: 'Find practical placements and experiences to advance your career.',
      icon: DocumentIcon,
      number: '03',
    },
    {
      name: 'Grants & Funding',
      description: 'Find funding for research, entrepreneurship and innovation.',
      icon: ChartIcon,
      number: '04',
    },
    {
      name: 'Competitions',
      description: 'Discover innovation challenges, awards and technology competitions.',
      icon: LightbulbIcon,
      number: '05',
    },
    {
      name: 'Career Resources',
      description: 'Access practical guidance for CVs, applications and career growth.',
      icon: UsersIcon,
      number: '06',
    },
    {
      name: 'Technology Insights',
      description: 'Explore software, cybersecurity, networking and emerging technologies.',
      icon: CodeIcon,
      number: '07',
    },
  ].map((category) => {
    const Icon = category.icon
    const active = activeCategory === category.name

    return (
      <button
        key={category.name}
        type="button"
        onClick={() => {
          if (category.name === 'Technology Insights') {
            document.getElementById('insights')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
            return
          }

          setActiveCategory(category.name)

          document.getElementById('latest-opportunities')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }}
        className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(3,17,31,0.09)] ${
          active
            ? 'border-mat-gold bg-mat-deep text-white'
            : 'border-slate-200 bg-white text-mat-text hover:border-mat-gold/60'
        }`}
      >

        {/* CARD TOP */}
        <div className="flex items-center justify-between">

          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
            active
              ? 'bg-mat-gold text-mat-deep'
              : 'bg-slate-100 text-mat-deep group-hover:bg-mat-gold/15 group-hover:text-blue-700'
          }`}>
            <Icon className="h-5 w-5" />
          </div>

          <span className={`text-[10px] font-bold tracking-widest ${
            active ? 'text-white/40' : 'text-slate-300'
          }`}>
            {category.number}
          </span>

        </div>

        {/* CARD CONTENT */}
        <div className="mt-6">

          <h3 className="font-heading text-base font-extrabold">
            {category.name}
          </h3>

          <p className={`mt-2 text-xs leading-5 ${
            active ? 'text-white/65' : 'text-mat-muted'
          }`}>
            {category.description}
          </p>

        </div>

        {/* CARD FOOTER */}
        <div className={`mt-auto flex items-center gap-2 pt-6 text-[10px] font-bold ${
          active ? 'text-mat-gold' : 'text-blue-700'
        }`}>
          Explore category

          <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

      </button>
    )
  })}

</div>


  </div>
</section>



      
{/* ======================================================
    FEATURED OPPORTUNITY
======================================================= */}

<section
  id="featured-opportunity"
  className="bg-white py-16 sm:py-20"
>
  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADING */}
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700">
          HANDPICKED BY MAT LABS
        </p>

        <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-mat-text sm:text-4xl">
          Featured
          <span className="text-mat-gold"> Opportunity</span>
        </h2>

        <p className="mt-3 max-w-[570px] text-sm leading-6 text-mat-muted">
          A closer look at an opportunity selected by our editorial
          team for its potential to support education, professional
          development and innovation.
        </p>
      </div>

      <span className="flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-amber-800">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        Editorial preview
      </span>
    </div>

    {/* FEATURED OPPORTUNITY CARD */}
    <div className="mt-9 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(3,17,31,0.06)] lg:grid-cols-[1.35fr_0.85fr]">

      {/* LEFT: MAIN INFORMATION */}
      <div className="relative flex flex-col justify-between bg-mat-deep p-7 sm:p-10 lg:p-12">

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-mat-gold px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-mat-deep">
              Scholarship
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
              Featured selection
            </span>
          </div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-mat-gold">
            OPPORTUNITY TITLE
          </p>

          <h3 className="mt-3 max-w-[620px] font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Featured Scholarship Opportunity
          </h3>

          <p className="mt-5 max-w-[590px] text-sm leading-7 text-white/70">
            This space will introduce the scholarship, its purpose,
            the institution offering it and the value it provides
            to eligible applicants.
          </p>

          <div className="mt-8">
            <p className="text-[9px] font-bold uppercase tracking-wider text-white/45">
              OFFERED BY
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Official provider name
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-[9px] leading-5 text-white/45">
            This is a design preview. Opportunity details and
            application links will be added after official verification.
          </p>
        </div>

      </div>

      {/* RIGHT: OPPORTUNITY DETAILS */}
      <div className="flex flex-col justify-between bg-slate-50 p-7 sm:p-10">

        <div>
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-mat-deep shadow-sm">
              <BookIcon className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                OPPORTUNITY SNAPSHOT
              </p>
              <p className="mt-1 text-sm font-extrabold text-mat-text">
                Key Information
              </p>
            </div>
          </div>

          <div className="space-y-6 py-7">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                STUDY LEVEL
              </p>
              <p className="mt-2 text-sm font-semibold text-mat-text">
                To be confirmed
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                ELIGIBILITY
              </p>
              <p className="mt-2 text-sm font-semibold text-mat-text">
                To be confirmed
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                FUNDING COVERAGE
              </p>
              <p className="mt-2 text-sm font-semibold text-mat-text">
                To be confirmed
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                APPLICATION DEADLINE
              </p>
              <p className="mt-2 text-sm font-semibold text-mat-text">
                To be confirmed
              </p>
            </div>

          </div>
        </div>

        {/* APPLICATION ACTION */}
        <div className="border-t border-slate-200 pt-6">

          <div className="mb-4 flex items-center gap-2 text-mat-muted">
            <ShieldIcon className="h-4 w-4 text-emerald-600" />
            <span className="text-[10px] font-medium">
              Official source verification required
            </span>
          </div>

          <button
            type="button"
            disabled
            className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-lg bg-slate-300 px-5 py-4 text-[10px] font-bold text-slate-600"
          >
            Application link coming soon
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          <p className="mt-3 text-center text-[9px] leading-5 text-mat-muted">
            Application information will be published after
            verification by Mat Labs.
          </p>

        </div>

      </div>

    </div>
  </div>
</section>


{/* ======================================================
    LATEST OPPORTUNITIES
======================================================= */}
<section
  id="latest-opportunities"
  className="bg-slate-50 py-16 sm:py-20"
>
  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700">
          EXPLORE WHAT'S NEXT
        </p>

        <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-mat-text sm:text-4xl">
          Latest
          <span className="text-mat-gold"> Opportunities</span>
        </h2>

        <p className="mt-3 max-w-[580px] text-sm leading-6 text-mat-muted">
          Explore carefully researched opportunities designed to
          support your education, career development and ambitions.
        </p>
      </div>

      <span className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Mat Labs Editorial Desk
      </span>
    </div>

    {/* FILTER STATUS AND CATEGORY RESET */}
<div className="mt-9 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

  <div>
    <p className="text-xs font-semibold text-mat-text">
      {activeCategory === 'All'
        ? 'All opportunities'
        : activeCategory}
    </p>

    <p className="mt-1 text-xs text-mat-muted">
      Showing {filteredOpportunities.length} opportunities
    </p>
  </div>

  <div className="flex flex-wrap items-center gap-3">
    <button
      type="button"
      onClick={() => setActiveCategory('All')}
      className={`rounded-lg px-5 py-3 text-[10px] font-bold uppercase tracking-wider transition-all ${
        activeCategory === 'All'
          ? 'bg-mat-deep text-white shadow-md'
          : 'border border-slate-200 bg-white text-mat-text hover:border-mat-gold hover:text-blue-700'
      }`}
    >
      All Opportunities
    </button>
  </div>

</div>

    {/* OPPORTUNITY GRID */}
    {filteredOpportunities.length > 0 ? (
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOpportunities.map((opportunity) => (
          <article
            key={opportunity.id}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(3,17,31,0.07)]"
          >
            {/* CARD TOP */}
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-md bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-blue-700">
                {opportunity.category}
              </span>

              <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-amber-800">
                {opportunity.status}
              </span>
            </div>

            {/* TITLE AND DESCRIPTION */}
            <div className="mt-7 flex-1">
              <h3 className="font-heading text-lg font-extrabold leading-snug text-mat-text transition-colors group-hover:text-blue-700">
                {opportunity.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-mat-muted">
                {opportunity.description}
              </p>
            </div>

            {/* OPPORTUNITY DETAILS */}
            <div className="mt-7 space-y-4 border-t border-slate-100 pt-5">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                  Provider
                </span>
                <span className="max-w-[60%] text-right text-xs font-semibold text-mat-text">
                  {opportunity.provider}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                  Location
                </span>
                <span className="max-w-[60%] text-right text-xs font-semibold text-mat-text">
                  {opportunity.location}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                  Deadline
                </span>
                <span className="max-w-[60%] text-right text-xs font-semibold text-mat-text">
                  {opportunity.deadline}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-mat-muted">
                  Funding
                </span>
                <span className="max-w-[60%] text-right text-xs font-semibold text-mat-text">
                  {opportunity.funding}
                </span>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Mat Labs Research
              </span>

              <span className="flex items-center gap-2 text-[10px] font-bold text-blue-700">
                Details coming soon
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    ) : (
      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-lg font-bold text-mat-text">
          No opportunities in this category yet
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-mat-muted">
          Our editorial team is researching opportunities in this
          category. Please check back soon.
        </p>

        <button
          type="button"
          onClick={() => setActiveCategory('All')}
          className="mt-6 rounded-lg bg-mat-deep px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-800"
        >
          View all opportunities
        </button>
      </div>
    )}

  </div>
</section>


      {/* ======================================================
    LATEST INSIGHTS
======================================================= */}

<section
  id="insights"
  className="bg-white pb-9"
>
  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    <div className="flex items-end justify-between">

      <div>
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-blue-700">
          TECHNOLOGY, KNOWLEDGE & INNOVATION
        </p>

        <h2 className="font-heading text-lg font-extrabold text-mat-text sm:text-xl">
          LATEST <span className="text-mat-gold">INSIGHTS</span>
        </h2>

        <p className="mt-1 text-xs text-mat-muted">
          Discover practical technology insights, expert perspectives
          and knowledge designed to inspire innovation and support
          continuous learning.
        </p>
      </div>

      <a
        href="#articles"
        className="hidden items-center gap-2 text-[9px] font-bold text-blue-700 sm:flex"
      >
        View All Insights
        <ArrowRightIcon className="h-4 w-4" />
      </a>

    </div>

    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

      {articles.map((article) => {

        const Icon = article.icon

        return (
          <Link
            to={`/insights/${article.id}`}
            key={article.id}
            className="group block overflow-hidden rounded-[9px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_12px_30px_rgba(3,17,31,0.08)]"
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

                <span>{article.date}</span>

                <span>•</span>

                <span className="flex items-center gap-1">
                  <ClockIcon />
                  {article.readTime}
                </span>

              </div>

            </div>

          </Link>
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