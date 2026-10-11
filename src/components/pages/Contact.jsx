import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight as ArrowRightIcon } from 'lucide-react'


import './Contact.css'

/* =========================================================
   SMALL INLINE ICON SYSTEM
   No lucide-react
========================================================= */

const Icon = ({ type, size = 20 }) => {
  const icons = {
    message: (
      <>
        <path
          d="M5 5.5h14c1.1 0 2 .9 2 2V15c0 1.1-.9 2-2 2h-7l-5 3v-3H5c-1.1 0-2-.9-2-2V7.5c0-1.1.9-2 2-2Z"
        />
        <path d="M7 10h10M7 13h7" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.8 2.8-6.2 7-6.2s7 2.4 7 6.2" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    phone: (
      <path d="M6.5 3.5 9.5 3c.7-.1 1.3.3 1.5 1l1.2 3.2c.2.6 0 1.2-.5 1.6l-1.9 1.4c1 2.3 2.7 4 5 5l1.4-1.9c.4-.5 1-.7 1.6-.5L21 14c.7.2 1.1.8 1 1.5l-.5 3c-.1.8-.8 1.5-1.6 1.5C10.9 20 4 13.1 4 4.1c0-.8.7-1.5 1.5-1.6l1-.5Z" />
    ),

    location: (
      <>
        <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    paperclip: (
      <path d="m8.5 12.5 6-6c1.7-1.7 4.3-1.7 6 0s1.7 4.3 0 6L12 21c-2.5 2.5-6.5 2.5-9 0s-2.5-6.5 0-9l9.5-9.5" />
    ),

    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7.5 8.5 4.5-4.5 4.5 4.5" />
        <path d="M5 20h14" />
      </>
    ),

    arrow: (
      <>
        <path d="M3 10h13" />
        <path d="m11 5 5 5-5 5" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M3.5 20c0-4.2 2.3-6.5 5.5-6.5s5.5 2.3 5.5 6.5" />
        <path d="M14.5 14.5c3-1 6 1 6 5" />
      </>
    ),

    rocket: (
      <>
        <path d="M14 5c2.5-2.5 6-3 7-2s.5 4.5-2 7l-5 5-5-5 5-5Z" />
        <path d="m9 10-4 1-2 4h6" />
        <path d="m14 15-1 4-4 2v-6" />
        <circle cx="17" cy="7" r="1.5" />
      </>
    ),

    handshake: (
      <>
        <path d="m3 11 4-4 4 2 3-2 7 5-3 5-5-3-3 3-5-3-2-3Z" />
        <path d="m7 7 3-3 4 3" />
      </>
    ),

    quote: (
      <>
        <path d="M7 5C4.8 5 3 6.8 3 9v4c0 2.2 1.8 4 4 4h2v-6H6.5c0-1.1.7-2 1.7-2.5" />
        <path d="M17 5c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h2v-6h-2.5c0-1.1.7-2 1.7-2.5" />
      </>
    ),
  }

  return (
    <svg
      className="contact-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  )
}


/* =========================================================
   CONTACT PAGE
========================================================= */

function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })


  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }


  const handleFileChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      setSelectedFile(null)
      return
    }

    const maxSize = 10 * 1024 * 1024

    if (file.size > maxSize) {
      alert('Please select a file smaller than 10MB.')
      event.target.value = ''
      setSelectedFile(null)
      return
    }

    setSelectedFile(file)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      ...formData,
      selectedFile,
    })

    alert(
      'Thank you for contacting Mat Labs. Your message has been received.',
    )
  }


  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer:
        'We aim to respond to new inquiries within 24 hours during our working days.',
    },
    {
      question: 'Can you work on both small and large projects?',
      answer:
        'Yes. We support projects of different sizes, from focused digital tasks to larger multidisciplinary technology projects.',
    },
    {
      question: 'Do you provide ongoing support after project delivery?',
      answer:
        'Yes. Depending on the project, we can provide maintenance, technical support, monitoring and continued improvements.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Send us a message describing your idea, challenge or requirements. We will review it and get back to you with the next steps.',
    },
  ]


  return (
    <div className="contact-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-inner">

          <div className="contact-hero-content">

            <p className="contact-eyebrow">
              CONTACT US
            </p>

            <h1>
              Let’s Build Something
              <span>Great Together.</span>
            </h1>

            <p className="contact-hero-description">
              Have a project in mind, need expert advice, or want to
              collaborate? We’re here to help. Reach out to our team
              and let’s turn your ideas into real solutions.
            </p>


            <div className="contact-hero-features">

              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Icon type="message" size={19} />
                </div>

                <div>
                  <strong>Quick Response</strong>
                  <small>We reply within 24 hours</small>
                </div>
              </div>


              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Icon type="users" size={19} />
                </div>

                <div>
                  <strong>Expert Support</strong>
                  <small>Talk to the right specialists</small>
                </div>
              </div>


              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Icon type="location" size={19} />
                </div>

                <div>
                  <strong>Clear Communication</strong>
                  <small>From idea to delivery</small>
                </div>
              </div>


              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Icon type="handshake" size={19} />
                </div>

                <div>
                  <strong>Project Collaboration</strong>
                  <small>We’re with you at every step</small>
                </div>
              </div>

            </div>

          </div>


          <div className="contact-hero-image">

            <img
              src="/images/contact/office.png"
              alt="Mat Labs office"
            />

            <div className="hero-image-overlay" />

            <div className="hero-side-writing">
              <span>Technology</span>
              <span>Expertise</span>
              <span>Innovation</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-intro">

            <div>

              <p className="section-eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                We’d Love to
                <span> Hear from You</span>
              </h2>

              <p>
                Fill out the form, send us an email, or reach us directly
                through our channels. Our team is ready to discuss your
                needs and provide the best solution.
              </p>

            </div>


            <div className="intro-quote">

              <div />

              <p>
                “Many Skills.
                <br />
                One Team.
                <br />
                Greater Impact.”
              </p>

            </div>

          </div>


          {/* =================================================
              MAIN CONTACT AREA
          ================================================= */}

          <div className="contact-grid">


            {/* FORM */}

            <div className="contact-card message-card">

              <div className="card-heading">

                <div className="heading-icon">
                  <Icon type="message" size={22} />
                </div>

                <div>
                  <h3>Send Us a Message</h3>

                  <p>
                    Tell us about your project or inquiry and we’ll get back to you soon.
                  </p>
                </div>

              </div>


              <form onSubmit={handleSubmit}>


                <div className="form-row">

                  <div className="form-field">

                    <label>
                      <Icon type="user" size={15} />
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />

                  </div>


                  <div className="form-field">

                    <label>
                      <Icon type="mail" size={15} />
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@example.com"
                      required
                    />

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-field">

                    <label>
                      <Icon type="phone" size={15} />
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+256 700 123 456"
                    />

                  </div>


                  <div className="form-field">

                    <label>
                      <Icon type="paperclip" size={15} />
                      Subject *
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select a subject
                      </option>

                      <option value="web-development">
                        Web Development
                      </option>

                      <option value="mobile-app">
                        Mobile App Development
                      </option>

                      <option value="software">
                        Software Development
                      </option>

                      <option value="cybersecurity">
                        Cybersecurity
                      </option>

                      <option value="networking">
                        Computer Networking
                      </option>

                      <option value="electronics">
                        Electronics & IoT
                      </option>

                      <option value="design">
                        UI/UX & Graphic Design
                      </option>

                      <option value="general">
                        General Inquiry
                      </option>

                    </select>

                  </div>

                </div>


                <div className="form-field full-field">

                  <label>
                    <Icon type="message" size={15} />
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, requirements or any questions..."
                    rows="5"
                    required
                  />

                </div>


                {/* =================================================
                    ATTACHMENT
                ================================================= */}

                <div className="attachment-section">

                  <div className="attachment-heading">

                    <Icon type="paperclip" size={16} />

                    <div>

                      <strong>
                        Attachments (Optional)
                      </strong>

                      <small>
                        You can attach project files, requirements or documents (Max 10MB)
                      </small>

                    </div>

                  </div>


                  <label className="upload-box">

                    <div className="upload-icon-wrapper">
                      <Icon type="upload" size={22} />
                    </div>

                    <strong>
                      Drag and drop files here, or click to browse
                    </strong>

                    <span>
                      PDF, DOC, DOCX, ZIP, JPG, PNG (Max 10MB)
                    </span>

                    {selectedFile && (
                      <em>
                        Selected: {selectedFile.name}
                      </em>
                    )}

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.zip,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />

                  </label>

                </div>


                <button
                  type="submit"
                  className="send-button"
                >
                  Send Message
                  <Icon type="arrow" size={17} />
                </button>

              </form>

            </div>


            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <div className="contact-right">


              {/* LOCATION */}

              <div className="contact-card location-card">

                <div className="card-heading">

                  <div className="heading-icon">
                    <Icon type="location" size={22} />
                  </div>

                  <div>
                    <h3>Our Location</h3>

                    <p>
                      Visit our office or find us on the map.
                    </p>
                  </div>

                </div>


                <div className="map-container">

                  <iframe
                    title="Mat Labs Kampala location"
                    src="https://www.google.com/maps?q=Kampala,Uganda&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="map-label">

                    <Icon type="location" size={18} />

                    <div>
                      <strong>Mat Labs</strong>
                      <span>Kampala, Uganda</span>
                    </div>

                  </div>

                </div>

              </div>


              {/* CONTACT INFORMATION */}

              <div className="contact-card information-card">

                <div className="card-heading">

                  <div className="heading-icon">
                    <Icon type="message" size={22} />
                  </div>

                  <div>
                    <h3>Contact Information</h3>

                    <p>
                      Reach us through any of these channels.
                    </p>
                  </div>

                </div>


                <div className="information-grid">


                  <div className="information-item">

                    <Icon type="phone" size={22} />

                    <strong>Phone</strong>

                    <a href="tel:+256777268968">
                      +256 777 268 968
                    </a>

                    <a href="tel:+256701234567">
                      +254 115 867 553
                    </a>

                    <small>
                      Mon - Fri, 8:00 AM - 5:00 PM
                    </small>

                  </div>


                  <div className="information-item">

                    <Icon type="mail" size={22} />

                    <strong>Email</strong>

                    <a href="mailto:info@matlabs.com">
                      info@matlabs.com
                    </a>

                    <a href="mailto:support@matlbs.com">
                      support@matlbs.com
                    </a>

                    <small>
                      We reply within 24 hours
                    </small>

                  </div>


                  <div className="information-item">

                    <Icon type="location" size={22} />

                    <strong>Office Address</strong>

                    <p>
                      Kampala, Uganda
                    </p>

                    <p>
                      (Exact location shared upon request)
                    </p>

                    <small>
                      ◉ We’re open for meetings
                    </small>

                  </div>


                  <div className="information-item">

                    <Icon type="users" size={22} />

                    <strong>Follow Us</strong>

                    <div className="social-links">

                      <a href="#" aria-label="LinkedIn">
                        in
                      </a>

                      <a href="#" aria-label="X">
                        X
                      </a>

                      <a href="#" aria-label="GitHub">
                        ●
                      </a>

                      <a href="#" aria-label="YouTube">
                        ▶
                      </a>

                    </div>

                    <small>
                      Stay connected for updates
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="project-cta-section">

        <div className="project-cta">

          <div className="cta-content">

            <h2>
              Let’s Discuss Your Project
            </h2>

            <p>
              Whether you need a website, mobile app, software,
              cybersecurity solution, network setup, electronic solution
              or a full digital transformation — we’re ready to help.
            </p>

            
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-3 rounded-md bg-mat-gold px-6 py-3 text-[10px] font-bold text-mat-deep transition-all duration-300 hover:bg-white"
            >
              Get a Quote
              <ArrowRightIcon />
            </Link>


          </div>


          <div className="cta-benefits">

            <div>
              <span>
                <Icon type="quote" size={20} />
              </span>

              <strong>No Obligation</strong>
              <small>Free consultation</small>
            </div>


            <div>
              <span>
                <Icon type="rocket" size={20} />
              </span>

              <strong>Tailored Solutions</strong>
              <small>Based on your needs</small>
            </div>


            <div>
              <span>
                <Icon type="users" size={20} />
              </span>

              <strong>Professional Team</strong>
              <small>Multiple specialists</small>
            </div>


            <div>
              <span>
                <Icon type="clock" size={20} />
              </span>

              <strong>On-Time Delivery</strong>
              <small>We value your time</small>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="faq-section">

        <div className="contact-container">

          <div className="faq-heading">

            <div>

              <p className="section-eyebrow">
                FAQ
              </p>

              <h2>
                Frequently Asked Questions
              </h2>

              <p>
                Find quick answers to common questions. Still have
                questions? Contact us anytime.
              </p>

            </div>

            <a href="#contact-form">
              View All FAQs
              <Icon type="arrow" size={15} />
            </a>

          </div>


          <div className="faq-grid">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index

              return (
                <div
                  className={`faq-item ${
                    isOpen ? 'faq-open' : ''
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index,
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <b>
                      +
                    </b>

                  </button>


                  {isOpen && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}

                </div>
              )
            })}

          </div>

        </div>

      </section>

    </div>
  )
}


export default Contact