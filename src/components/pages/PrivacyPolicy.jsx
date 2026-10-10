
const privacySections = [
  {
    title: '1. Introduction',
    text: 'Mat Labs respects your privacy. This policy explains how we handle personal information when you visit our website, contact us, or enquire about our technology services.',
  },
  {
    title: '2. Information We Collect',
    text: 'We may collect information you voluntarily provide, including your name, email address, telephone number, organization, and project details. We may also collect technical information about website usage where applicable.',
  },
  {
    title: '3. How We Use Your Information',
    text: 'We may use your information to respond to enquiries, prepare quotations, communicate about projects, provide requested services, improve our website, protect our systems, and meet legal obligations.',
  },
  {
    title: '4. Sharing Information',
    text: 'We do not sell personal information. We may share relevant information with authorized team members and service providers when necessary to respond to you, deliver services, operate our website, or comply with the law.',
  },
  {
    title: '5. Data Security',
    text: 'We take reasonable measures to protect personal information from unauthorized access, loss, misuse, and disclosure. However, no method of electronic transmission or storage is completely secure.',
  },
  {
    title: '6. Data Retention',
    text: 'We retain personal information for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining appropriate records, and meeting legal obligations.',
  },
  {
    title: '7. Your Rights and Choices',
    text: 'Subject to applicable law, you may request access to, correction of, or deletion of your personal information. You can contact Mat Labs through the contact details on our website to make a privacy request.',
  },
  {
    title: '8. Cookies and Third-Party Services',
    text: 'Our website may use cookies, analytics, or third-party services if these features are enabled. Where applicable, those services may process information according to their own privacy policies.',
  },
  {
    title: '9. External Websites',
    text: 'Our website may contain links to third-party websites. Mat Labs is not responsible for their content, security, or privacy practices.',
  },
  {
    title: '10. Changes to This Policy',
    text: 'We may update this policy when our website, services, or legal obligations change. The updated version will be published on this page.',
  },
  {
    title: '11. Contact Mat Labs',
    text: 'For questions about this Privacy Policy or how your information is handled, please contact us through our Contact page.',
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-mat-text">
      <section className="relative overflow-hidden bg-mat-deep">
        <div className="absolute inset-0 bg-gradient-to-r from-mat-deep via-mat-deep to-[#0B3150]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-mat-gold">
            MAT LABS / LEGAL
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Privacy <span className="text-mat-gold">Policy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Your privacy matters. Learn how Mat Labs handles information
            when you visit our website or contact our team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 rounded-lg border border-slate-200 bg-mat-light p-5 sm:p-7">
          <h2 className="font-heading text-lg font-bold text-mat-deep">
            Your information. Our responsibility.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This policy describes our intended privacy practices. It should
            be checked against the information our website actually collects
            and the third-party services we use before publication.
          </p>
        </div>

        <div className="space-y-8">
          {privacySections.map((section) => (
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
            Have a question?{' '}
            <a
              href="/contact"
              className="font-bold text-mat-deep underline decoration-mat-gold underline-offset-4 hover:text-mat-gold-dark"
            >
              Contact Mat Labs
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
