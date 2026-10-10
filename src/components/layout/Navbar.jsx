import { useState } from 'react'
import MobileMenu from './MobileMenu.jsx'

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

  const currentPath = window.location.pathname

  /* ==================================================
     ACTIVE NAVIGATION
  ================================================== */

  const isActive = (href) => {
    if (href === '/') {
      return currentPath === '/'
    }

    return (
      currentPath === href ||
      currentPath.startsWith(`${href}/`)
    )
  }

  /* ==================================================
     CLOSE MOBILE MENU
  ================================================== */

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="mat-navbar">
        <div className="mat-navbar-inner">

          {/* ==================================================
              LOGO
          ================================================== */}

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


          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="mat-desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mat-nav-link ${
                  isActive(link.href)
                    ? 'mat-nav-active'
                    : ''
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>


          {/* ==================================================
              DESKTOP GET A QUOTE
          ================================================== */}

          <a
            href="/GetQuote"
            className="mat-nav-quote"
            onClick={closeMenu}
          >
            <span>Get a Quote</span>

            <span
              className="mat-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>


          {/* ==================================================
              MOBILE HAMBURGER
          ================================================== */}

          <button
            type="button"
            className={`mat-mobile-toggle ${
              menuOpen
                ? 'mat-mobile-toggle-open'
                : ''
            }`}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className="hamburger-line hamburger-line-one"
            />

            <span
              className="hamburger-line hamburger-line-two"
            />

            <span
              className="hamburger-gold-line"
            />
          </button>

        </div>
      </header>


      {/* ======================================================
          MOBILE MENU

          IMPORTANT:
          Only render this when the hamburger is open.
      ====================================================== */}

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