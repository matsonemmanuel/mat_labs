const articles = [
  {
    category: 'Technology',
    title: 'Building Better Technology Through Collaboration',
    excerpt:
      'Why bringing together specialists from different technology disciplines can lead to stronger and more reliable solutions.',
    date: 'Coming Soon',
    image: '/images/blog/tech.png',
  },
  {
    category: 'Cybersecurity',
    title: 'Why Security Should Be Part of Every Digital Solution',
    excerpt:
      'Understanding the importance of considering security throughout the design and development of technology solutions.',
    date: 'Coming Soon',
    image: '/images/blog/cyber.png',
  },
  {
    category: 'Innovation',
    title: 'Turning Ideas Into Real-World Technology Solutions',
    excerpt:
      'How technology teams can move from an idea to a practical solution through structured planning, development and review.',
    date: 'Coming Soon',
    image: '/images/blog/innovation.png',
  },
]

function BlogPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-3xl">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-mat-deep">
              Insights & Resources
            </p>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] text-mat-deep sm:text-4xl lg:text-[44px]">
              Ideas, Knowledge &
              <span className="text-mat-gold"> Innovation.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Explore perspectives, practical knowledge and ideas from the
              world of technology and innovation.
            </p>
          </div>

          <a
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-mat-deep transition-colors hover:text-mat-gold"
          >
            View All Insights

            <span
              aria-hidden="true"
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Articles */}
        <div className="grid gap-4 md:grid-cols-3">

          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-mat-gold/40 hover:shadow-[0_18px_40px_rgba(7,26,43,0.08)]"
            >

              {/* Image */}
              <div className="relative h-[210px] overflow-hidden bg-mat-deep">

                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mat-deep/75 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-mat-gold px-3 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-mat-deep">
                  {article.category}
                </span>

                {/* Open indicator */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-mat-deep/50 text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:border-mat-gold group-hover:bg-mat-gold group-hover:text-mat-deep">
                  ↗
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Date */}
                <div className="flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.1em] text-slate-400">
                  <span
                    aria-hidden="true"
                    className="text-[10px] text-slate-400"
                  >
                    ▣
                  </span>

                  {article.date}
                </div>

                {/* Title */}
                <h3 className="mt-3 font-heading text-[16px] font-bold leading-6 tracking-[-0.02em] text-mat-deep">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <a
                  href="/blog"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-mat-deep transition-colors hover:text-mat-gold"
                >
                  Read More

                  <span
                    aria-hidden="true"
                    className="text-sm transition-transform duration-300 group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default BlogPreview