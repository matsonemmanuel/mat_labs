import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Lightbulb,
  MessageCircle,
  Rocket,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Mail,
  Phone,
} from 'lucide-react'

import './GetQuote.css'

function GetQuote() {
  const [formData, setFormData] = useState({
    projectTitle: '',
    service: '',
    description: '',
    organization: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
  })

  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'Cybersecurity',
    'Computer Networking',
    'Electronics & IoT',
    'UI/UX & Graphic Design',
    'Technical Support & Training',
  ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <main className="quote-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="quote-hero">

        <div className="quote-hero-overlay" />

        <div className="quote-hero-content">

          <div className="quote-hero-copy">

            <p className="quote-eyebrow">
              GET A QUOTE
            </p>

            <h1>
              Let’s Turn Your Ideas
              <br />
              Into{' '}
              <span>Real Solutions.</span>
            </h1>

            <p className="quote-hero-description">
              Tell us about your project and we’ll provide a detailed,
              customized quote based on your requirements. Our team will
              review your request and get back to you as soon as possible.
            </p>

          </div>

          {/* Right-side vertical words */}

          <div className="quote-hero-side">

            <div className="quote-side-line" />

            <div className="quote-side-words">
              <span>IDEAS</span>
              <span>EXPERTISE</span>
              <span>COLLABORATION</span>
              <span>QUALITY</span>
              <span>REAL IMPACT</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN QUOTE AREA
      ===================================================== */}

      <section className="quote-main">

        <div className="quote-layout">

          {/* =================================================
              LEFT FORM
          ================================================= */}

          <div className="quote-form-card">

            {/* Progress */}

            <div className="quote-progress">

              <div className="quote-progress-step active">
                <div className="quote-step-number">
                  1
                </div>

                <div>
                  <strong>Project Details</strong>
                  <span>Tell us about your project</span>
                </div>
              </div>

              <div className="quote-progress-line" />

              <div className="quote-progress-step">
                <div className="quote-step-number">
                  2
                </div>

                <div>
                  <strong>Requirements</strong>
                  <span>Provide more details</span>
                </div>
              </div>

              <div className="quote-progress-line" />

              <div className="quote-progress-step">
                <div className="quote-step-number">
                  3
                </div>

                <div>
                  <strong>Timeline & Budget</strong>
                  <span>Set your expectations</span>
                </div>
              </div>

              <div className="quote-progress-line" />

              <div className="quote-progress-step">
                <div className="quote-step-number">
                  4
                </div>

                <div>
                  <strong>Review & Submit</strong>
                  <span>Confirm and send</span>
                </div>
              </div>

            </div>


            {/* Form heading */}

            <div className="quote-form-heading">

              <div className="quote-heading-icon">
                <FileText size={22} />
              </div>

              <div>
                <h2>Project Details</h2>

                <p>
                  Give us a brief overview of what you need.
                </p>
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* Row 1 */}

              <div className="quote-form-grid">

                <div className="quote-field">

                  <label htmlFor="projectTitle">
                    Project Title <span>*</span>
                  </label>

                  <input
                    id="projectTitle"
                    name="projectTitle"
                    type="text"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    placeholder="e.g. Company Website, Mobile App, Logo Design..."
                    required
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="service">
                    Service Category <span>*</span>
                  </label>

                  <div className="quote-select-wrapper">

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}

                    </select>

                    <ChevronDown
                      className="quote-select-icon"
                      size={18}
                    />

                  </div>

                </div>

              </div>


              {/* Description */}

              <div className="quote-field">

                <label htmlFor="description">
                  Project Description <span>*</span>
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us more about your project, goals and requirements..."
                  rows="4"
                  required
                />

              </div>


              {/* Organization + email */}

              <div className="quote-form-grid">

                <div className="quote-field">

                  <label htmlFor="organization">
                    Organization/Individual Name <span>*</span>
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your name or organization name"
                    required
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                  />

                </div>

              </div>


              {/* Phone + preferred contact */}

              <div className="quote-form-grid">

                <div className="quote-field">

                  <label htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>

                  <div className="quote-phone-wrapper">

                    <div className="quote-country">
                      🇺🇬
                      <ChevronDown size={14} />
                    </div>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+256 790 123 456"
                      required
                    />

                  </div>

                </div>


                <div className="quote-field">

                  <label>
                    Preferred Contact Method
                  </label>

                  <div className="quote-radio-group">

                    {['Email', 'Phone', 'WhatsApp'].map(
                      (method) => (
                        <label
                          className="quote-radio"
                          key={method}
                        >

                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={
                              formData.contactMethod === method
                            }
                            onChange={handleChange}
                          />

                          <span className="quote-radio-circle" />

                          {method}

                        </label>
                      ),
                    )}

                  </div>

                </div>

              </div>


              {/* Buttons */}

              <div className="quote-form-actions">

                <button
                  type="button"
                  className="quote-save-button"
                >
                  <Save size={17} />
                  Save & Continue Later
                </button>

                <button
                  type="submit"
                  className="quote-next-button"
                >

                  <span>
                    {submitted
                      ? 'Request Submitted'
                      : 'Next: Project Requirements'}
                  </span>

                  {submitted ? (
                    <Check size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}

                </button>

              </div>

            </form>

          </div>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="quote-sidebar">

            {/* Main sidebar card */}

            <div className="quote-sidebar-main">

              <div className="quote-sidebar-icon">
                <FileText size={30} />
              </div>

              <div>

                <h3>
                  Get a Customized Quote
                </h3>

                <p>
                  Every project is unique. We analyze your
                  requirements and provide a tailored quote
                  that fits your needs, timeline and budget.
                </p>

              </div>

            </div>


            {/* Benefits */}

            <div className="quote-benefits">

              <div className="quote-benefit">

                <div className="quote-benefit-icon">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <strong>Transparent Pricing</strong>
                  <span>
                    No hidden costs. Clear and detailed quotes.
                  </span>
                </div>

              </div>


              <div className="quote-benefit">

                <div className="quote-benefit-icon">
                  <Sparkles size={19} />
                </div>

                <div>
                  <strong>Tailored Solutions</strong>
                  <span>
                    Quotes based on your specific requirements.
                  </span>
                </div>

              </div>


              <div className="quote-benefit">

                <div className="quote-benefit-icon">
                  <Search size={19} />
                </div>

                <div>
                  <strong>Expert Consultation</strong>
                  <span>
                    Our team reviews your project for the best approach.
                  </span>
                </div>

              </div>


              <div className="quote-benefit">

                <div className="quote-benefit-icon">
                  <Clock3 size={19} />
                </div>

                <div>
                  <strong>Fast Response</strong>
                  <span>
                    We typically respond within 24 hours.
                  </span>
                </div>

              </div>


              <div className="quote-benefit">

                <div className="quote-benefit-icon">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <strong>Confidentiality</strong>
                  <span>
                    Your project details are safe with us.
                  </span>
                </div>

              </div>

            </div>


            {/* Help card */}

            <div className="quote-help-card">

              <div className="quote-help-icon">
                <MessageCircle size={28} />
              </div>

              <div className="quote-help-content">

                <h3>Need Help?</h3>

                <p>
                  Not sure which service fits your project?
                  Contact us directly and our team will guide you.
                </p>

                <a href="/contact">
                  Contact Us
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          QUOTE PROCESS
      ===================================================== */}

      <section className="quote-process">

        <div className="quote-process-background" />

        <div className="quote-process-inner">

          <div className="quote-process-heading">

            <p className="quote-eyebrow">
              OUR QUOTE PROCESS
            </p>

            <h2>
              From Idea to <span>Proposal</span>
            </h2>

            <p>
              A simple and transparent process to get you started.
            </p>

          </div>


          <div className="quote-process-divider" />


          <div className="quote-process-steps">

            <div className="quote-process-step">

              <div className="quote-process-icon">
                <FileText size={24} />
              </div>

              <div>
                <strong>
                  1. Submit Your Request
                </strong>

                <p>
                  Tell us about your project and requirements.
                </p>
              </div>

              <ArrowRight className="quote-process-arrow" />

            </div>


            <div className="quote-process-step">

              <div className="quote-process-icon">
                <Search size={24} />
              </div>

              <div>
                <strong>
                  2. We Review
                </strong>

                <p>
                  Our team analyzes your needs and scope.
                </p>
              </div>

              <ArrowRight className="quote-process-arrow" />

            </div>


            <div className="quote-process-step">

              <div className="quote-process-icon">
                <FileText size={24} />
              </div>

              <div>
                <strong>
                  3. Get a Custom Quote
                </strong>

                <p>
                  Receive a detailed proposal and timeline.
                </p>
              </div>

              <ArrowRight className="quote-process-arrow" />

            </div>


            <div className="quote-process-step">

              <div className="quote-process-icon">
                <Rocket size={24} />
              </div>

              <div>
                <strong>
                  4. Let’s Get Started
                </strong>

                <p>
                  Approve and we begin bringing your idea to life.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default GetQuote