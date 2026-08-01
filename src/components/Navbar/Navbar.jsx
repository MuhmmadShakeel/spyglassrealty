import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Neighborhoods', href: '/communities' },
  { label: 'Agents', href: '/our-team' },
  { label: 'Resources', href: '/blog' },
  { label: 'About', href: '/about-us' },
]

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.93 17.93 0 0 1 12 21.75a17.93 17.93 0 0 1-7.5-1.63Z"
      />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50 bg-[#252525]/98 text-[#f3f3f3] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <div className="border-b border-white/10">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 xl:px-10">
        <a
          href="/"
          className="group shrink-0 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103] focus-visible:ring-offset-4 focus-visible:ring-offset-[#252525]"
          aria-label="Spyglass Realty home"
        >
          <img
            src="/spyglass-logo-white.svg"
            alt="Spyglass Realty"
            className="h-auto w-[178px] sm:w-[196px]"
            width="160"
            height="60"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden rounded-full border border-white/10 bg-black/15 p-1.5 shadow-inner xl:block"
        >
          <ul className="flex items-center gap-1.5">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex h-10 items-center rounded-full px-3.5 text-[13px] font-medium tracking-[0.01em] text-white/78 transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[#e03103] hover:text-white hover:shadow-[0_6px_14px_rgba(224,49,3,0.24)] focus-visible:bg-[#e03103] focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="/auth/login"
            className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-[13px] font-medium text-white/78 transition-colors duration-200 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103] focus-visible:ring-offset-2 focus-visible:ring-offset-[#252525]"
          >
            <UserIcon />
            <span>Sign In</span>
          </a>
          <a
            href="/contact"
            className="group/cta inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#e03103] px-5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(224,49,3,0.24)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] hover:shadow-[0_12px_26px_rgba(224,49,3,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#e03103] active:translate-y-0"
          >
            Book a Consultation
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#e03103]/70 bg-[#e03103]/10 text-white transition-[background-color,border-color,transform] duration-200 hover:scale-105 hover:border-[#e03103] hover:bg-[#e03103] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#252525] xl:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full h-[calc(100dvh-82px)] overflow-y-auto border-t border-white/10 bg-[#252525] px-5 pb-8 pt-5 shadow-2xl sm:px-8 xl:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-[1280px]">
            <ul className="grid gap-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group/mobile flex min-h-14 items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-[15px] font-medium text-white/90 transition-[background-color,border-color,transform] duration-200 hover:translate-x-1 hover:border-[#e03103] hover:bg-[#e03103] hover:text-white focus-visible:border-[#e03103] focus-visible:bg-[#e03103] focus-visible:outline-none"
                    onClick={closeMenu}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="text-lg text-white/40 transition-transform duration-200 group-hover/mobile:translate-x-1 group-hover/mobile:text-white"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="/auth/login"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.025] text-sm font-semibold text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103]"
                onClick={closeMenu}
              >
                <UserIcon />
                Sign In
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#e03103] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(224,49,3,0.24)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#e03103]"
                onClick={closeMenu}
              >
                Book a Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
