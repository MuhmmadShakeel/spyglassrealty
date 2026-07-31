import teamImage from '../../assets/images/1776097545557-Spyglass_Realty_Team_Photo_2022.webp'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function HomeownershipSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101828] py-12 text-white sm:py-14 lg:flex lg:h-[82svh] lg:max-h-[700px] lg:min-h-[560px] lg:items-center lg:py-6" aria-labelledby="homeownership-heading">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_26%,rgba(224,49,3,0.16),transparent_31%),radial-gradient(circle_at_92%_78%,rgba(255,255,255,0.065),transparent_28%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 xl:gap-16 xl:px-10">
        <div
          className="relative mx-auto w-full max-w-[560px] pb-5 pr-4 sm:pb-6 sm:pr-6"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-offset="100"
        >
          <div className="absolute bottom-0 right-0 top-7 w-[88%] rounded-[24px] border border-[#ff4a1a]/25 bg-[#e03103]" aria-hidden="true" />
          <div className="group relative overflow-hidden rounded-[22px] border border-white/12 bg-[#202b3e] shadow-[0_30px_80px_rgba(0,0,0,0.38)] sm:rounded-[26px]">
            <img
              src={teamImage}
              alt="Spyglass Realty team"
              className="aspect-[3/2] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              width="1920"
              height="1280"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/62 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#ff6a42]">Local guidance</p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">Austin expertise, working for you.</p>
              </div>
              <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm sm:flex" aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-1 right-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#fffdf9] px-4 py-3 text-[#101828] shadow-[0_16px_38px_rgba(0,0,0,0.28)] sm:px-5 sm:py-4"
            data-aos="zoom-in"
            data-aos-delay="220"
            data-aos-duration="650"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#e03103] text-white">
              <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M5.25 21V9.75L12 4.5l6.75 5.25V21M9 21v-6.75h6V21" />
              </svg>
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#e03103]">One shared goal</span>
              <span className="mt-0.5 block text-xs font-semibold sm:text-sm">Your confident next move</span>
            </span>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="900" data-aos-offset="100">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e03103]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#ff5a32]">Expertise at every step</p>
          </div>

          <h2
            id="homeownership-heading"
            className="max-w-[570px] text-balance text-[clamp(2.15rem,3.65vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.045em]"
          >
            Helping You Unlock the Power of{' '}
            <span className="text-[#ff4a1a]">Homeownership</span>
          </h2>

          <p className="mt-4 max-w-[560px] text-sm leading-6 text-white/68 sm:text-[15px] sm:leading-7">
            Expert analysis for buyers to help ensure you’re not overpaying for a home. Strategic presentation for sellers to put their property in the best possible light and maximize its value.
          </p>

          <div className="mt-5 flex flex-wrap gap-3" aria-label="Homeownership services">
            <span className="rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-xs font-semibold text-white/82">Buyer advocacy</span>
            <span className="rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-xs font-semibold text-white/82">Seller strategy</span>
          </div>

          <a
            href="https://www.spyglassrealty.com/about-us"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#e03103] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(224,49,3,0.28)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] hover:shadow-[0_15px_34px_rgba(224,49,3,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-3 focus-visible:ring-offset-[#101828]"
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="700"
          >
            Find out more <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeownershipSection
