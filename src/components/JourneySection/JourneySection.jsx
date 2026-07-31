import buyHomeImage from '../../assets/images/photo-1600585154340-be6161a56a0c.webp'
import sellHomeImage from '../../assets/images/photo-1600596542815-ffad4c1539a9.webp'

const journeyCards = [
  {
    eyebrow: 'For Buyers',
    title: 'Find Your Next Home',
    description:
      'Access exclusive listings and AI-powered search to find properties before they hit the MLS.',
    image: sellHomeImage,
    imageAlt: 'Modern home with a private swimming pool',
    href: 'https://www.spyglassrealty.com/buy',
    animation: 'fade-right',
  },
  {
    eyebrow: 'For Sellers',
    title: 'Sell for More. Stress Less.',
    description:
      'Our proven marketing strategy sells homes for 102% of asking price on average.',
    image: buyHomeImage,
    imageAlt: 'Contemporary home surrounded by mature trees',
    href: 'https://www.spyglassrealty.com/sell',
    animation: 'fade-left',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function JourneySection() {
  return (
    <section
      className="flex overflow-hidden bg-[#fffdf9] pb-12 pt-7 sm:pb-14 sm:pt-9 lg:h-[100svh] lg:max-h-[760px] lg:min-h-[600px] lg:items-center lg:py-8"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-[900px] text-center" data-aos="fade-up" data-aos-duration="750" data-aos-offset="70">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#e03103]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#e03103]">Choose your path</p>
            <span className="h-px w-9 bg-[#e03103]" aria-hidden="true" />
          </div>
          <h2
            id="journey-heading"
            className="text-balance text-[clamp(2.15rem,4vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[#101828]"
          >
            What brings you here today?
          </h2>
          <p className="mx-auto mt-3.5 max-w-[720px] text-sm leading-6 text-[#626b78] sm:text-[15px] sm:leading-7">
            Buying your dream home or preparing to sell? Choose your path and move forward with clarity.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-8 lg:gap-6">
          {journeyCards.map((card, index) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative isolate min-h-[330px] cursor-pointer overflow-hidden rounded-[22px] border border-[#101828]/10 bg-[#101828] shadow-[0_22px_55px_rgba(16,24,40,0.16)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#e03103] focus-visible:ring-offset-4 sm:min-h-[360px] lg:min-h-[370px]"
              data-aos={card.animation}
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-offset="90"
              aria-label={`${card.title}. Learn more`}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
                width="800"
                height="533"
                loading="lazy"
                decoding="async"
              />
              <span
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,24,40,0.06)_10%,rgba(16,24,40,0.28)_48%,rgba(16,24,40,0.94)_100%)] transition-colors duration-500 group-hover:bg-[linear-gradient(180deg,rgba(16,24,40,0.18)_0%,rgba(16,24,40,0.48)_42%,rgba(16,24,40,0.97)_100%)]"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 top-0 h-1 bg-[#e03103]" aria-hidden="true" />

              <span className="absolute inset-x-0 bottom-0 block p-6 text-left sm:p-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff5a32]">{card.eyebrow}</span>
                <span className="mt-2 block text-[clamp(1.55rem,2.6vw,2.15rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
                  {card.title}
                </span>

                <span className="mt-4 block max-h-40 translate-y-0 overflow-hidden opacity-100 transition-[max-height,opacity,transform,margin] duration-500 ease-out md:mt-0 md:max-h-0 md:translate-y-4 md:opacity-0 md:group-hover:mt-4 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:mt-4 md:group-focus-visible:max-h-40 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                  <span className="block max-w-[500px] text-sm leading-6 text-white/78 sm:text-[15px]">{card.description}</span>
                  <span className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#e03103] px-5 text-sm font-semibold text-white shadow-[0_9px_22px_rgba(224,49,3,0.28)] transition-colors duration-200 group-hover:bg-[#c82b02]">
                    Learn more <ArrowIcon />
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
