import contactImage640 from '../../assets/images/contact-journey-640.jpg'
import contactImage960 from '../../assets/images/contact-journey-960.jpg'

const fieldClass =
  'mt-1.5 block min-h-11 w-full rounded-xl border border-[#d9dde3] bg-white px-4 text-[13px] text-[#101828] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#9299a3] focus:border-[#e03103] focus:shadow-[0_0_0_3px_rgba(224,49,3,0.11)]'

function SendIcon() {
  return (
    <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 16 8-16 8 3-8-3-8Zm3 8h13" />
    </svg>
  )
}

function ContactSection() {
  return (
    <section className="py-12 sm:py-14 lg:flex lg:h-[100svh] lg:max-h-[820px] lg:min-h-[680px] lg:items-center lg:py-8" aria-labelledby="contact-heading">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mb-7 text-center sm:mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#e03103]">Let’s start a conversation</p>
          <h2 id="contact-heading" className="mt-2 text-balance text-[clamp(1.8rem,3vw,2.85rem)] font-bold leading-[1.06] tracking-[-0.04em] text-[#101828] lg:whitespace-nowrap">
            Take The First Step to Your Real Estate Journey
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-7">
          <div className="rounded-[22px] border border-[#dfe2e7] bg-[#fffdf9] p-6 shadow-[0_18px_48px_rgba(16,24,40,0.09)] sm:p-8 lg:p-9">
            <form action="/contact" method="post" className="grid gap-3.5">
              <div>
                <label htmlFor="contact-name" className="text-xs font-bold text-[#303744]">
                  Full Name <span className="text-[#e03103]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="John Smith"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="text-xs font-bold text-[#303744]">
                    Email <span className="text-[#e03103]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="john@example.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="text-xs font-bold text-[#303744]">
                    Phone <span className="text-[#e03103]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(512) 555-0123"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs font-bold text-[#303744]">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="3"
                  placeholder="How can we help you?"
                  className={`${fieldClass} resize-y py-3`}
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#e03103] px-6 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(224,49,3,0.24)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#c82b02] hover:shadow-[0_13px_30px_rgba(224,49,3,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101828] focus-visible:ring-offset-2 active:translate-y-0"
              >
                Send Message <SendIcon />
              </button>

              <p className="text-center text-[11px] leading-5 text-[#727a86]">
                By submitting, you agree to be contacted by Spyglass Realty about real estate services.
              </p>
              <p className="text-center text-[10px] leading-5 text-[#8a919b]">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="font-semibold text-[#505965] underline underline-offset-2 hover:text-[#e03103]">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="font-semibold text-[#505965] underline underline-offset-2 hover:text-[#e03103]">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>

          <figure className="relative min-h-[360px] overflow-hidden rounded-[22px] border border-[#dfe2e7] bg-[#101828] shadow-[0_18px_48px_rgba(16,24,40,0.13)] lg:min-h-full">
            <img
              src={contactImage640}
              srcSet={`${contactImage640} 640w, ${contactImage960} 960w`}
              sizes="(min-width: 1024px) 48vw, calc(100vw - 40px)"
              alt="Professional using a mobile phone with digital communication icons"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
              width="960"
              height="960"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/70 via-[#101828]/10 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7 lg:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#ff6a42]">Responsive local guidance</p>
              <p className="mt-2 max-w-[420px] text-balance text-xl font-bold leading-tight sm:text-2xl">A clear conversation is the first step toward your next move.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
