
import { useState } from 'react'
import MobileMenu from './MobileMenu.jsx'
import { Link, useLocation } from 'react-router'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
    { name: 'Our Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  
  
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (href) => {
    // No main navigation link should be active on the Quote page.
    if (
      currentPath === '/get-quote' ||
      currentPath === '/GetQuote' ||
      currentPath === '/quote'
    ) {
      return false
    }

    if (href === '/') {
      return currentPath === '/'
    }

    return (
      currentPath === href ||
      currentPath.startsWith(`${href}/`)
    )
  }



  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className="mat-navbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 9999,
          width: '100%',
        }}
      >
        <div className="mat-navbar-inner">
          <a
            href="/"
            className="mat-logo"
            onClick={closeMenu}
            aria-label="Mat Labs Home"
          >
            <img
              src="/images/brand/mat2.png"
              alt="Mat Labs"
              className="block h-[48px] w-auto object-contain"
            />
          </a>

          <nav className="mat-desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mat-nav-link ${
                  isActive(link.href) ? 'mat-nav-active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>

          
          <Link
            to="/get-quote"
            className="mat-nav-quote"
            onClick={closeMenu}
          >
            <span>Get a Quote</span>
            <span className="mat-arrow" aria-hidden="true">
              →
            </span>
          </Link>


          <button
            type="button"
            className={`mat-mobile-toggle ${
              menuOpen ? 'mat-mobile-toggle-open' : ''
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="hamburger-line hamburger-line-one" />
            <span className="hamburger-line hamburger-line-two" />
            <span className="hamburger-gold-line" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <MobileMenu
          open={menuOpen}
          links={navLinks}
          onClose={closeMenu}
        />
      )}
    </>
  )
}

export default Navbar
