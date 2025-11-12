'use client'

import TransitionLink from './TransitionLink'

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/stories' },
  { label: 'Sections', href: '/beyond-the-features' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050b22]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <p className="font-bella-queta text-2xl text-white">The Haven</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              An exploration of how our deepest emotional wells become the true foundation of our perfect sanctuary.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 font-bella-queta text-sm uppercase tracking-[0.2em] text-white/80">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-right">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              A production thesis
            </p>
            <p className="mt-2 text-xs text-white/60">
              Exploring Generation Z&apos;s conceptualization of the &quot;dream home&quot; in Metro Manila.
            </p>
            <p className="mt-6 text-xs text-white/40">
              © {currentYear} The Haven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

