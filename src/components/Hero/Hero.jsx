import './Hero.css'

const proofPoints = [
  '1,000+ five-star reviews',
  '3,000+ Families Helped',
  '#1 Independent Brokerage',
]

function AnimatedLines() {
  return (
    <svg
      aria-hidden="true"
      className="hero-lines"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E03103" stopOpacity="0.18" />
          <stop offset="0.42" stopColor="#FF4A1A" stopOpacity="0.95" />
          <stop offset="1" stopColor="#F3F3F3" stopOpacity="0.16" />
        </linearGradient>
      </defs>

      <g className="hero-lines__sweep" fill="none" stroke="url(#hero-line-gradient)">
        <path d="M-100 250C220 40 430 45 700 330s440 330 900 110" />
        <path d="M-110 265C220 65 425 65 685 345s445 320 915 120" />
        <path d="M-120 280C220 90 420 85 670 360s450 310 940 125" />
        <path d="M-130 295C215 115 415 110 655 375s455 300 955 130" />
        <path d="M-140 310C210 140 410 135 640 390s460 290 970 135" />
        <path d="M-150 325C205 165 405 160 625 405s465 280 985 140" />
        <path d="M-160 340C200 190 400 185 610 420s470 270 1000 145" />
        <path d="M-170 355C195 215 395 210 595 435s475 260 1015 150" />
        <path d="M-180 370C190 240 390 235 580 450s480 250 1030 155" />
      </g>

      <g className="hero-lines__cross" fill="none" stroke="url(#hero-line-gradient)">
        <path d="M980-80C940 170 805 310 720 520S650 820 560 980" />
        <path d="M1000-80C960 180 830 320 745 530S680 825 590 980" />
        <path d="M1020-80C980 190 855 330 770 540S710 830 620 980" />
        <path d="M1040-80C1000 200 880 340 795 550S740 835 650 980" />
        <path d="M1060-80C1020 210 905 350 820 560S770 840 680 980" />
        <path d="M1080-80C1040 220 930 360 845 570S800 845 710 980" />
        <path d="M1100-80C1060 230 955 370 870 580S830 850 740 980" />
        <path d="M1120-80C1080 240 980 380 895 590S860 855 770 980" />
      </g>

      <g className="hero-lines__ribbons" fill="none" stroke="url(#hero-line-gradient)">
        <path d="M-90 690C250 470 485 485 745 670s505 180 810 10" />
        <path d="M-100 706C245 490 480 505 735 685s510 170 825 20" />
        <path d="M-110 722C240 510 475 525 725 700s515 160 840 30" />
        <path d="M-120 738C235 530 470 545 715 715s520 150 855 40" />
        <path d="M-130 754C230 550 465 565 705 730s525 140 870 50" />
        <path d="M-140 770C225 570 460 585 695 745s530 130 885 60" />
        <path d="M-150 786C220 590 455 605 685 760s535 120 900 70" />
        <path d="M-160 802C215 610 450 625 675 775s540 110 915 80" />
      </g>

      <g className="hero-lines__orbits" fill="none" stroke="url(#hero-line-gradient)">
        <ellipse cx="1180" cy="250" rx="310" ry="145" transform="rotate(-18 1180 250)" />
        <ellipse cx="1180" cy="250" rx="345" ry="166" transform="rotate(-18 1180 250)" />
        <ellipse cx="1180" cy="250" rx="380" ry="188" transform="rotate(-18 1180 250)" />
        <ellipse cx="1180" cy="250" rx="415" ry="210" transform="rotate(-18 1180 250)" />
        <ellipse cx="1180" cy="250" rx="450" ry="232" transform="rotate(-18 1180 250)" />
        <ellipse cx="1180" cy="250" rx="485" ry="254" transform="rotate(-18 1180 250)" />
      </g>

      <g className="hero-lines__fan" fill="none" stroke="url(#hero-line-gradient)">
        <path d="M80 940C280 690 430 505 760 310s520-230 790-250" />
        <path d="M110 950C300 700 450 520 775 330s515-220 775-235" />
        <path d="M140 960C320 710 470 535 790 350s510-210 760-220" />
        <path d="M170 970C340 720 490 550 805 370s505-200 745-205" />
        <path d="M200 980C360 730 510 565 820 390s500-190 730-190" />
        <path d="M230 990C380 740 530 580 835 410s495-180 715-175" />
        <path d="M260 1000C400 750 550 595 850 430s490-170 700-160" />
      </g>

      <g className="hero-lines__pulse" fill="#E03103">
        <circle cx="205" cy="236" r="2.5" />
        <circle cx="535" cy="286" r="2" />
        <circle cx="820" cy="510" r="2.5" />
        <circle cx="1100" cy="620" r="2" />
        <circle cx="1290" cy="318" r="2.5" />
      </g>

      <path
        className="hero-lines__accent"
        d="M-80 530C240 360 480 370 720 565s480 240 830 90"
        fill="none"
        stroke="#E03103"
        strokeOpacity="0.58"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6.75-5.05 6.75-12A6.75 6.75 0 1 0 5.25 9C5.25 15.95 12 21 12 21Z" />
      <circle cx="12" cy="9" r="2.25" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path strokeLinecap="round" d="m16 16 4 4" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h9M17 7h3M4 17h3M11 17h9M13 4v6M8 14v6" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="17" r="2" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <picture>
        <source
          type="image/avif"
          srcSet="/images/downtown-austin-640.avif 640w, /images/downtown-austin-1024.avif 1024w, /images/downtown-austin-1440.avif 1440w, /images/downtown-austin-1920.avif 1920w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/images/downtown-austin-640.webp 640w, /images/downtown-austin-1024.webp 1024w, /images/downtown-austin-1440.webp 1440w, /images/downtown-austin-1920.webp 1920w"
          sizes="100vw"
        />
        <img
          src="/images/downtown-austin-1440.webp"
          alt="Aerial view of the downtown Austin skyline and Lady Bird Lake"
          className="hero-section__image"
          width="1440"
          height="763"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="hero-section__overlay" aria-hidden="true" />
      <AnimatedLines />
      <div className="hero-section__glow" aria-hidden="true" />

      <div className="hero-content relative z-10 mx-auto flex h-full max-w-[1280px] items-center justify-center px-4 pb-5 pt-[94px] text-center sm:px-8 sm:pb-8 sm:pt-[100px] lg:pb-10 lg:pt-[110px] xl:px-10">
        <div className="mx-auto w-full max-w-[1050px]">
          <div
            className="hero-copy"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="800"
          >
            <div className="hero-badge mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-white/16 bg-black/25 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-2 sm:text-[11px]">
              <span className="size-1.5 rounded-full bg-[#e03103] shadow-[0_0_12px_rgba(224,49,3,0.9)]" />
              Austin real estate, reimagined
            </div>

            <h1
              id="hero-heading"
              className="hero-title mx-auto max-w-[880px] text-balance text-[clamp(1.75rem,4vw,3.65rem)] font-bold leading-[1.03] tracking-[-0.038em] text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.42)]"
            >
              Highly Reviewed, Trained, and Experienced Real Estate Agents in{' '}
              <span className="text-[#ff4a1a]">Austin</span>
            </h1>

            <ul
              className="hero-proofs mx-auto mt-3 grid max-w-[740px] grid-cols-3 items-stretch text-[9px] font-medium leading-[1.35] text-white/78 sm:mt-4 sm:text-xs lg:text-[13px]"
              aria-label="Spyglass Realty highlights"
            >
              {proofPoints.map((point, index) => (
                <li
                  key={point}
                  className={`flex min-h-9 items-center justify-center px-2 sm:px-5 ${index > 0 ? 'border-l border-white/25' : ''}`}
                >
                  <span className="text-balance">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="hero-actions mx-auto mt-5 flex max-w-[700px] flex-wrap items-center justify-center gap-2"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="650"
          >
            <a
              href="/search"
              className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#101828] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#f1f2f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103]"
            >
              Home Search
            </a>
            <a
              href="/sell"
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/22 bg-black/25 px-4 text-xs font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e03103]"
            >
              What’s My Home Worth?
            </a>
            <a
              href="/search?showMap=true&mobileMap=true"
              className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full bg-[#e03103] px-4 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(224,49,3,0.24)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FilterIcon /> Filters
            </a>
          </div>

          <form
            action="/search"
            method="get"
            className="hero-search mx-auto mt-3 max-w-[740px] sm:mt-3.5"
            role="search"
            data-aos="zoom-in-up"
            data-aos-delay="210"
            data-aos-duration="700"
          >
            <label htmlFor="home-search" className="sr-only">
              Search Austin homes by neighborhood, address, or ZIP code
            </label>
            <div className="group/search flex gap-2 rounded-full border border-white/20 bg-white/96 p-1 shadow-[0_18px_48px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow] duration-200 focus-within:border-[#ff5a32] focus-within:shadow-[0_20px_54px_rgba(224,49,3,0.22)] sm:p-1.5">
              <div className="flex min-h-11 min-w-0 flex-1 items-center gap-2.5 px-3 text-[#59616b] sm:min-h-12 sm:gap-3 sm:px-5">
                <LocationIcon />
                <input
                  id="home-search"
                  name="q"
                  type="search"
                  required
                  enterKeyHint="search"
                  placeholder="Search by neighborhood, address, or ZIP code"
                  className="h-full min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#252525] outline-none placeholder:text-[#737981] sm:text-[15px]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#e03103] px-3.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(224,49,3,0.25)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] hover:shadow-[0_11px_26px_rgba(224,49,3,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#252525] focus-visible:ring-offset-2 active:translate-y-0 sm:min-h-12 sm:px-6"
              >
                <SearchIcon />
                <span className="hero-search__button-label">Search Homes</span>
              </button>
            </div>
          </form>

        </div>
      </div>

      <div className="hero-section__edge" aria-hidden="true" />
    </section>
  )
}

export default Hero
