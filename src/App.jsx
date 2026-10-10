import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router'

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



function HomePage() {
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
    <BrowserRouter>

      <div className="min-h-screen bg-mat-deep">

        {/* GLOBAL NAVBAR */}
        <Navbar />


        {/* PAGE ROUTES */}
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />


          {/* ABOUT */}
          <Route
            path="/about"
            element={<AboutUs />}
          />


          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />


          {/* OUR WORK */}
          <Route
            path="/work"
            element={<Work />}
          />


          {/* OUR TEAM */}
          <Route
            path="/team"
            element={<Team />}
          />


          {/* BLOG */}
          <Route
            path="/blog"
            element={<Blog />}
          />


          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* GET A QUOTE */}
          <Route
            path="/GetQuote"
            element={<GetQuote />}
          />

          {/* PRIVACY POLICY */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* TERMS OF SERVICE */}
          <Route
            path="/terms-of-service"
            element={<TermsOfService />}
          />

        </Routes>


        {/* GLOBAL FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  )
}


export default App