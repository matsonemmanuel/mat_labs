function MobileMenu({ open, links, onClose }) {
  if (!open) {
    return null
  }

  return (
    <div className="mat-mobile-menu">

      <div className="mat-mobile-menu-inner">

        <nav className="mat-mobile-nav">

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="mat-mobile-nav-link"
              style={{
                animationDelay: `${index * 45}ms`,
              }}
            >

              <span>
                {link.name}
              </span>

              <span className="mat-mobile-arrow">
                →
              </span>

            </a>
          ))}

        </nav>


        <a
          href="/contact"
          className="mat-mobile-quote"
          onClick={onClose}
        >
          <span>Get a Quote</span>
          <span>→</span>
        </a>

      </div>

    </div>
  )
}

export default MobileMenu