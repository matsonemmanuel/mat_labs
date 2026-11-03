import { useParams, Link, Navigate } from 'react-router'
import { articles } from './Blog.jsx'
import { useEffect, useState } from 'react'

function InsightDetails() {
  const { id } = useParams()
  const [readingProgress, setReadingProgress] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (documentHeight <= 0) {
        setReadingProgress(0)
        return
      }

      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / documentHeight) * 100)
      )

      setReadingProgress(progress)
    }

    window.addEventListener('scroll', updateReadingProgress, {
      passive: true,
    })

    updateReadingProgress()

    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
    }
  }, [id])

  const article = articles.find(
    (item) => item.id === Number(id)
  )

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className="min-h-screen bg-white">
      {/* READING PROGRESS BAR */}
      <div className="pointer-events-none fixed left-0 right-0 top-[60px] z-[9999] h-[4px] bg-slate-200">
        <div
          className="h-full bg-mat-gold transition-[width] duration-150 ease-out"
          style={{
            width: `${readingProgress}%`,
          }}
        />
      </div>

      {/* ARTICLE HEADER */}
      <section className="bg-mat-deep px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1000px]">

          <Link
            to="/blog#insights"
            className="text-xs font-semibold text-mat-gold hover:text-white"
          >
            ← Back to Insights
          </Link>

          <div className="mt-10">
            <span
              className={`inline-block rounded-md px-3 py-2 text-[9px] font-bold ${article.categoryClass}`}
            >
              {article.category}
            </span>

            <h1 className="mt-6 max-w-[850px] font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
              <span>By {article.author}</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-5 pt-10 sm:px-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="max-h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      
      {/* ARTICLE BODY */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">

          {/* MAIN ARTICLE CONTENT */}
          <article className="min-w-0">

            {/* INTRODUCTION */}
            <div>
              <p className="text-lg leading-9 text-slate-600">
                {article.introduction || 'The full introduction to this article will be published by the Mat Labs editorial team.'}
              </p>
            </div>

            {/* KEY TAKEAWAYS */}
            {article.takeaways?.length > 0 && (
              <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-800">
                  KEY TAKEAWAYS
                </p>

                <h2 className="mt-2 font-heading text-xl font-extrabold text-mat-text">
                  What you will learn
                </h2>

                <ul className="mt-5 space-y-4">
                  {article.takeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mat-gold text-[10px] font-bold text-mat-deep">
                        {index + 1}
                      </span>

                      <span className="text-sm leading-7 text-slate-700">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ARTICLE SECTIONS */}
            <div className="mt-14 space-y-12">
              {article.content?.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="font-heading text-2xl font-extrabold leading-tight text-mat-text sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs?.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[15px] leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.points?.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {section.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-mat-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* AUTHOR PROFILE */}
<div className="mt-14 border-t border-slate-200 pt-8">
  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
    ABOUT THE AUTHOR
  </p>

  <div className="mt-5 flex flex-col gap-5 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">

    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-mat-gold bg-mat-deep">
      {article.authorImage && (
        <img
          src={article.authorImage}
          alt={article.author}
          className="h-full w-full object-cover"
        />
      )}
    </div>

    <div>
      <h3 className="font-heading text-lg font-extrabold text-mat-text">
        {article.author}
      </h3>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
        {article.authorRole || 'Mat Labs Contributor'}
      </p>

      <p className="mt-3 text-sm leading-7 text-mat-muted">
        {article.authorBio ||
          'Contributor to Mat Labs Insights, sharing knowledge and perspectives on technology and innovation.'}
      </p>

      <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-slate-500">
        <span>Published: {article.date}</span>
        <span>Reading time: {article.readTime}</span>
      </div>
    </div>

  </div>
</div>

            {/* EDITORIAL NOTE */}
            <div className="mt-14 border-l-4 border-mat-gold bg-slate-50 px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                MAT LABS INSIGHTS
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Mat Labs is committed to sharing practical technology
                knowledge that supports learning, innovation and
                informed decision-making.
              </p>
            </div>

            {/* BACK TO INSIGHTS */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <Link
                to="/blog#insights"
                className="inline-flex items-center gap-2 rounded-lg bg-mat-deep px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-800"
              >
                ← Explore More Insights
              </Link>
            </div>

          </article>

          {/* TABLE OF CONTENTS */}
          {article.content?.length > 0 && (
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  ON THIS PAGE
                </p>

                <h3 className="mt-2 font-heading text-lg font-extrabold text-mat-text">
                  Table of Contents
                </h3>

                <nav className="mt-6 space-y-4">
                  {article.content.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-start gap-3 text-xs leading-5 text-slate-600 transition-colors hover:text-blue-700"
                    >
                      <span className="font-bold text-mat-gold">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span>{section.heading}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

        </div>
      </section>


    </main>
    
  )
}

export default InsightDetails