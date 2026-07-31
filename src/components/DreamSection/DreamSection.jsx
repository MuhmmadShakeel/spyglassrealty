function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function BrandPanel({ side }) {
  const isLeft = side === 'left'

  return (
    <div
      className="relative hidden h-[360px] lg:block"
      data-aos={isLeft ? 'fade-right' : 'fade-left'}
      data-aos-duration="850"
      data-aos-offset="90"
    >
      <div
        className={`absolute top-1/2 size-[220px] -translate-y-1/2 rounded-[34px] border border-[#101828]/10 bg-[#101828] shadow-[0_26px_60px_rgba(16,24,40,0.22)] ${
          isLeft ? 'left-0 -rotate-3' : 'right-0 rotate-3'
        }`}
      >
        <div className="absolute inset-3 rounded-[26px] border border-white/10" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-full bg-[#e03103]" aria-hidden="true" />
        <div className="flex h-full items-center justify-center p-6">
          <img src="/spyglass-logo-white.svg" alt="" className="h-auto w-full" width="160" height="60" />
        </div>
      </div>

      <div
        className={`absolute top-1/2 h-px w-24 bg-gradient-to-r ${
          isLeft
            ? 'right-[-18px] from-[#e03103] to-[#e03103]/10'
            : 'left-[-18px] from-[#e03103]/10 to-[#e03103]'
        }`}
        aria-hidden="true"
      />
      <span
        className={`absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-[#e03103] bg-[#fffdf9] ${
          isLeft ? 'right-[-22px]' : 'left-[-22px]'
        }`}
        aria-hidden="true"
      />
    </div>
  )
}

function DreamSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#fffdf9] py-14 sm:py-16 lg:flex lg:h-[78svh] lg:max-h-[720px] lg:min-h-[600px] lg:items-center lg:py-10"
      aria-labelledby="dream-heading"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_45%,rgba(224,49,3,0.07),transparent_38%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#101828]/[0.045]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e03103]/[0.055]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mb-9 grid grid-cols-2 gap-3 lg:hidden" aria-hidden="true">
          {[0, 1].map((item) => (
            <div key={item} className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-[#101828] px-5 shadow-[0_14px_34px_rgba(16,24,40,0.16)]" data-aos={item === 0 ? 'fade-right' : 'fade-left'}>
              <img src="/spyglass-logo-white.svg" alt="" className="h-auto w-full max-w-[145px]" width="160" height="60" />
            </div>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[240px_minmax(0,1fr)_240px] lg:gap-10 xl:grid-cols-[260px_minmax(0,1fr)_260px]">
          <BrandPanel side="left" />

          <div className="mx-auto max-w-[700px] text-left" data-aos="fade-up" data-aos-duration="850" data-aos-offset="90">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e03103]">Ownership, with clarity</p>
            <h2
              id="dream-heading"
              className="mt-3 text-balance text-[clamp(2.35rem,4.5vw,4.2rem)] font-bold leading-[1] tracking-[-0.048em] text-[#101828]"
            >
              Realize your Dream of Homeownership
            </h2>

            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <span className="h-1 w-20 rounded-full bg-[#e03103]" />
              <span className="h-1 w-8 rounded-full bg-[#101828]" />
              <span className="h-1 w-3 rounded-full bg-[#d7dbe2]" />
            </div>

            <p className="mt-6 text-sm leading-7 text-[#5f6875] sm:text-[15px] sm:leading-7">
              You don’t want to risk your financial future by accepting the status quo that the average Austin real estate brokerage employs. If you don’t work with an experienced and highly trained real estate agent you risk leaving money on the table. Our agents undergo a rigorous training schedule and employ techniques to help buyers and sellers realize their potential when selling or buying a home in Austin.
            </p>

            <div className="mt-7" data-aos="fade-up" data-aos-delay="180" data-aos-duration="700">
              <a
                href="https://www.spyglassrealty.com/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e03103] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(224,49,3,0.25)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] hover:shadow-[0_15px_34px_rgba(224,49,3,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101828] focus-visible:ring-offset-3"
              >
                Start your real estate journey <ArrowIcon />
              </a>
              <p className="mt-3 text-xs leading-5 text-[#79818c]">Click this button to talk to a real estate expert.</p>
            </div>
          </div>

          <BrandPanel side="right" />
        </div>
      </div>
    </section>
  )
}

export default DreamSection
