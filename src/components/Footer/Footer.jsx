const footerGroups = [
  {
    title: 'Featured',
    links: [
      ['Featured Listings', 'https://www.spyglassrealty.com/featured-listings'],
      ['Newsroom', 'https://www.spyglassrealty.com/newsroom'],
      ['Blog', 'https://www.spyglassrealty.com/blog'],
      ['Mortgage Calculator', 'https://www.spyglassrealty.com/mortgage-calculator'],
      ['Terms of Service', 'https://www.spyglassrealty.com/terms-of-service'],
    ],
  },
  {
    title: 'Communities',
    links: [
      ['Barton Hills', 'https://www.spyglassrealty.com/barton-hills'],
      ['Travis Heights', 'https://www.spyglassrealty.com/travis-heights'],
      ['Zilker', 'https://www.spyglassrealty.com/zilker'],
      ['South Lamar', 'https://www.spyglassrealty.com/south-lamar'],
      ['Downtown', 'https://www.spyglassrealty.com/downtown'],
      ['All Communities', 'https://www.spyglassrealty.com/communities'],
    ],
  },
  {
    title: 'Navigation',
    links: [
      ['Buying', 'https://www.spyglassrealty.com/buy'],
      ['Selling', 'https://www.spyglassrealty.com/sell'],
      ['Search', 'https://www.spyglassrealty.com/search?showMap=true&mobileMap=true'],
      ['About Us', 'https://www.spyglassrealty.com/core-values'],
      ['Our Team', 'https://www.spyglassrealty.com/agents'],
      ['Contact', 'https://www.spyglassrealty.com/contact'],
      ['Agent Login', 'https://missioncontrol-tjfm.onrender.com/', true],
    ],
  },
]

const legalLinks = [
  ['Sitemap', 'https://www.spyglassrealty.com/sitemap.xml'],
  ['Privacy Policy', 'https://www.spyglassrealty.com/privacy'],
  ['Terms of Service', 'https://www.spyglassrealty.com/terms-of-service'],
  ['TREC IABS', 'https://www.spyglassrealty.com/docs/trec-iabs.pdf', true],
  ['TREC Consumer Protection Notice', 'https://www.spyglassrealty.com/docs/trec-consumer-protection-notice.pdf', true],
]

const footerLinkClass =
  'group inline-flex items-center gap-2 rounded-sm text-[13px] leading-6 text-white/62 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103] focus-visible:ring-offset-3 focus-visible:ring-offset-[#2D2D2D]'

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#ff5a32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6.75-5.05 6.75-12A6.75 6.75 0 1 0 5.25 9C5.25 15.95 12 21 12 21Z" />
      <circle cx="12" cy="9" r="2.25" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.1c-.44-.11-.9.05-1.18.4l-.97 1.21a1.12 1.12 0 0 1-1.28.34 12.04 12.04 0 0 1-7.11-7.11c-.18-.46-.04-.98.34-1.28l1.21-.97c.35-.28.51-.74.4-1.18L6.96 3.1A1.13 1.13 0 0 0 5.87 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2D2D2D] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#e03103] to-transparent" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 size-80 rounded-full border border-white/[0.035]" aria-hidden="true" />

      <div className="mx-auto max-w-[1280px] px-5 pb-7 pt-14 sm:px-8 sm:pt-16 xl:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.28fr_repeat(3,0.9fr)] lg:gap-12">
          <div>
            <a href="/" className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2D2D2D]" aria-label="Spyglass Realty home">
              <img src="/spyglass-logo-white.svg" alt="Spyglass Realty" className="h-auto w-[178px]" width="160" height="60" />
            </a>

            <address className="mt-6 not-italic">
              <div className="flex max-w-[260px] items-start gap-3 text-[13px] leading-6 text-white/65">
                <LocationIcon />
                <p>
                  8501 N Mopac Expy STE 110
                  <br />
                  Austin, TX 78759
                </p>
              </div>
              <a
                href="tel:+15126402077"
                className="mt-5 inline-flex items-center gap-2 rounded-md text-sm font-bold text-[#ff5a32] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103] focus-visible:ring-offset-3 focus-visible:ring-offset-[#2D2D2D]"
              >
                <PhoneIcon />
                512-640-2077
              </a>
            </address>

            <a href="#top" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-4 py-2 text-xs font-semibold text-white/75 transition-colors duration-200 hover:border-[#e03103] hover:bg-[#e03103] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103]">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer links`}>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a32]">{group.title}</h2>
              <ul className="mt-5 grid gap-2.5">
                {group.links.map(([label, href, external]) => (
                  <li key={label}>
                    <a href={href} className={footerLinkClass} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      <span>{label}</span>
                      <span aria-hidden="true" className="text-[#ff5a32] opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[11px] text-white/45">© 2026 Spyglass Realty. All Rights Reserved.</p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {legalLinks.map(([label, href, external]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="rounded-sm text-[10px] font-medium text-white/45 transition-colors duration-200 hover:text-[#ff5a32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103]"
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
