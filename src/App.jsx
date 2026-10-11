
import { Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

import Hero from './components/home/Hero.jsx'
import ServicesPreview from './components/home/ServicesPreview.jsx'
import AboutPreview from './components/home/AboutPreview.jsx'
import Process from './components/home/process.jsx'
import ProjectsPreview from './components/home/projectsPreview.jsx'
import Partners from './components/home/Partners.jsx'
import Testimonials from './components/home/Testimonials.jsx'
import BlogPreview from './components/home/BlogPreview.jsx'

import AboutUs from './components/pages/AboutUs.jsx'
import Services from './components/pages/Services.jsx'
import Work from './components/pages/Work.jsx'
import Team from './components/pages/Team.jsx'
import Blog from './components/pages/Blog.jsx'
import Contact from './components/pages/Contact.jsx'
import GetQuote from './components/pages/GetQuote.jsx'
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import TermsOfService from './components/pages/TermsOfService.jsx'

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Process />
      <ProjectsPreview />
      <Partners />
      <Testimonials />
      <BlogPreview />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-mat-deep">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
