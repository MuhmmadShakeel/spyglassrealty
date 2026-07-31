import './ReasonsSection.css'

const reasons = [
  {
    number: '01',
    title: 'Top Austin real estate brokers execute a world-class marketing strategy.',
    description:
      'You’ll have top Austin real estate brokers execute a world-class marketing strategy including Facebook ads, e-mail, video, and more.',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6 20 3v12l-9.5-3M10.5 6H6a3 3 0 0 0 0 6h4.5V6Zm-3 6v6.75A2.25 2.25 0 0 0 9.75 21h.75V12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We are passionate about making your home look its best.',
    description:
      'We are passionate about making your home look its best. Our Austin home realtors offer staging and remodeling for FREE.',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 11.25 8.25-6.5 8.25 6.5M5.25 10.25V20h13.5v-9.75M9 20v-5.25h6V20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.5 3 .55 1.45L20.5 5l-1.45.55L18.5 7l-.55-1.45L16.5 5l1.45-.55L18.5 3Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'A boutique brokerage that tailors services to your needs.',
    description:
      'As a boutique real estate Austin brokerage, we can tailor our services to your needs — in a way no other brokerage can.',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h9M17 7h3M4 17h3M11 17h9M13 4v6M8 14v6" />
        <circle cx="15" cy="7" r="2" />
        <circle cx="9" cy="17" r="2" />
      </svg>
    ),
  },
]

function ReasonsSection() {
  return (
    <section className="reasons-section relative isolate flex min-h-[680px] items-center overflow-hidden py-16 text-white sm:py-20 lg:min-h-[min(88svh,800px)] lg:py-16" aria-labelledby="reasons-heading">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,14,25,0.66)_0%,rgba(8,14,25,0.82)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4a1a]/80 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-[820px] text-center" data-aos="fade-up" data-aos-duration="750" data-aos-offset="90">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#ff4a1a]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6a42]">Why Spyglass</p>
            <span className="h-px w-10 bg-[#ff4a1a]" aria-hidden="true" />
          </div>
          <h2 id="reasons-heading" className="text-balance text-[clamp(2.3rem,4.4vw,4rem)] font-bold leading-[1] tracking-[-0.047em]">
            Reasons to Work with Us
          </h2>
          <p className="mt-4 text-sm text-white/68 sm:text-base">Why Austin families choose Spyglass Realty</p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3 lg:mt-11 lg:gap-5">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              tabIndex="0"
              className="group relative min-h-[290px] overflow-hidden rounded-[20px] border border-white/18 bg-white/[0.085] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#101828] hover:bg-[#101828] hover:shadow-[0_26px_60px_rgba(0,0,0,0.3)] focus-visible:-translate-y-1.5 focus-visible:border-[#101828] focus-visible:bg-[#101828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a32] sm:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 110}
              data-aos-duration="700"
              data-aos-offset="90"
            >
              <div className="absolute -right-14 -top-14 size-36 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/14 bg-white/10 text-[#ff6a42] transition-colors duration-300 group-hover:border-[#e03103] group-hover:bg-[#e03103] group-hover:text-white">
                    {reason.icon}
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-white/42">{reason.number}</span>
                </div>

                <h3 className="mt-6 text-[19px] font-bold leading-[1.28] tracking-[-0.025em] text-white sm:text-xl">{reason.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/67 transition-colors duration-300 group-hover:text-white/78">{reason.description}</p>

                <div className="mt-auto pt-6" aria-hidden="true">
                  <span className="block h-px w-12 bg-[#ff4a1a] transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection
