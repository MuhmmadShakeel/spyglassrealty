const stats = [
  {
    value: '6',
    label: 'Times the volume of an average agent',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5v-6.75h3V19.5h-3Zm6-0V9h3v10.5h-3Zm6 0V4.5h3v15h-3Z" />
      </svg>
    ),
  },
  {
    value: '23',
    label: 'Days less than the average agent',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 4.5h13.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: '3%',
    label: 'Higher sale price on listings than the avg. agent',
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 16.5 5.25-5.25 3.75 3.75 6-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5h3.75v3.75" />
      </svg>
    ),
  },
]

function PerformanceStats() {
  return (
    <section className="relative z-20 bg-[#f8f6f1] pb-10 pt-10 sm:pb-12 sm:pt-12" aria-labelledby="performance-heading">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto mb-7 max-w-[980px] text-center sm:mb-8" data-aos="fade-up" data-aos-duration="700">
          <p className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#e03103]">The Spyglass advantage</p>
          <div className="mt-2 flex w-full min-w-0 items-center justify-center gap-3 sm:gap-4">
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#101828]/20 sm:block" aria-hidden="true" />
            <h2 id="performance-heading" className="max-w-full whitespace-nowrap text-[clamp(0.84rem,4.5vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#101828] sm:tracking-[-0.035em]">
              Performance that moves you forward
            </h2>
            <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#101828]/20 sm:block" aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {stats.map((stat, index) => (
            <article
              key={stat.value}
              className="group relative min-h-[154px] overflow-hidden rounded-[18px] border border-white/10 bg-[#101828] px-6 py-5 shadow-[0_18px_42px_rgba(16,24,40,0.2)] sm:min-h-[164px] sm:px-7 sm:py-6"
              data-aos="fade-up"
              data-aos-delay={index * 110}
              data-aos-duration="700"
              data-aos-offset="80"
            >
              <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[#e03103]" aria-hidden="true" />

              <div className="relative flex h-full items-center gap-5">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-[#ff4a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:border-[#e03103] group-hover:bg-[#e03103] group-hover:text-white sm:size-14">
                  <span className="absolute inset-1 rounded-xl border border-white/[0.055]" aria-hidden="true" />
                  <span className="relative">{stat.icon}</span>
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.055em] text-[#ff4a1a]">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[270px] text-[10px] font-bold uppercase leading-[1.45] tracking-[0.105em] text-[#e5e7eb] sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceStats
