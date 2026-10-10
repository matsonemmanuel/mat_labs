
const termsSections = [
  {
    title: '1. Acceptance of Terms',
    text: 'These Terms of Service apply to your use of the Mat Labs website. By accessing or using the website, you agree to these terms, subject to applicable law.',
  },
  {
    title: '2. About Mat Labs',
    text: 'Mat Labs is a multidisciplinary technology solutions platform covering services such as web development, software engineering, mobile applications, cybersecurity, computer networking, electronics, UI/UX, and graphic design.',
  },
  {
    title: '3. Website Information',
    text: 'We aim to provide accurate and useful information about our services. Website content is for general information and does not, by itself, constitute a binding quotation, service agreement, or guarantee of results.',
  },
  {
    title: '4. Project Enquiries and Agreements',
    text: 'Submitting an enquiry does not automatically create a contract. Project scope, deliverables, fees, timelines, payment terms, and support arrangements should be agreed upon separately in writing before work begins.',
  },
  {
    title: '5. Acceptable Use',
    text: 'You must not use our website to engage in unlawful activity, attempt unauthorized access, distribute malicious software, interfere with website operation, or compromise the security of our systems or other users.',
  },
  {
    title: '6. Intellectual Property',
    text: 'Unless otherwise stated, the Mat Labs name, logo, website design, and original website content are owned by or used with permission by Mat Labs. You may not reproduce or commercially use protected materials without appropriate authorization. Ownership of project deliverables should be agreed upon in the relevant client contract.',
  },
  {
    title: '7. Third-Party Services',
    text: 'Our website may link to external websites or services. These third parties may have their own terms, policies, and practices. Mat Labs does not control all third-party content or services.',
  },
  {
    title: '8. Confidential Information',
    text: 'Do not submit passwords, private keys, sensitive records, or confidential client information through ordinary website forms. Where a project requires confidentiality, the relevant obligations should be agreed upon separately.',
  },
  {
    title: '9. Website Availability',
    text: 'We work to keep our website available and accurate, but we cannot guarantee uninterrupted access or that every feature will always be free from errors.',
  },
  {
    title: '10. Liability',
    text: 'To the extent permitted by applicable law, Mat Labs is not responsible for losses arising solely from reliance on general website information or temporary website unavailability. Nothing in these terms excludes liability where exclusion is prohibited by law.',
  },
  {
    title: '11. Privacy',
    text: 'Your use of this website is also subject to our Privacy Policy, which explains how personal information is handled.',
  },
  {
    title: '12. Changes to These Terms',
    text: 'We may update these terms as our website and services evolve. Updated terms will be published on this page.',
  },
  {
    title: '13. Applicable Law',
    text: 'These terms must be interpreted in accordance with the applicable laws governing Mat Labs and its operations. Mat Labs should confirm the appropriate governing law and dispute-resolution provisions before publishing this page.',
  },
  {
    title: '14. Contact Mat Labs',
    text: 'For questions about these terms or our services, please use the contact details provided on our website.',
  },
]

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-mat-text">
      <section className="relative overflow-hidden bg-mat-deep">
        <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep to-[#0B3150]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-mat-gold">
            MAT LABS / LEGAL
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Terms of <span className="text-mat-gold">Service</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            The terms that apply when you visit our website and enquire
            about Mat Labs technology services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 rounded-lg border border-slate-200 bg-mat-light p-5 sm:p-7">
          <h2 className="font-heading text-lg font-bold text-mat-deep">
            Clear expectations. Better collaboration.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            These website terms are a starting point. Review them against
            your actual business practices and obtain appropriate legal
            advice before publication.
          </p>
        </div>

        <div className="space-y-8">
          {termsSections.map((section) => (
            <article key={section.title}>
              <h2 className="font-heading text-lg font-extrabold text-mat-deep sm:text-xl">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-7">
          <p className="text-sm leading-7 text-slate-600">
            Learn how we handle personal information in our{' '}
            <a
              href="/privacy-policy"
              className="font-bold text-mat-deep underline decoration-mat-gold underline-offset-4 hover:text-mat-gold-dark"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
