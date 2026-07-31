import { useEffect, useRef } from 'react'
import 'flickity/css/flickity.css'
import './TestimonialsSection.css'

const testimonials = [
  {
    quote:
      "Working with John McCarthy from a seller's perspective has been amazing. He is sharp, ambitious and professional. The technical tools he made available gave us peace of mind including an app with the ability to give us showing times and feedback instantly.",
    author: 'John McCarthy Client',
  },
  {
    quote:
      "I've purchased 2 homes and land with Spyglass and have sold 1 home with them as well. We set the high comp for the area we sold in. We had multiple offers and the one that ended up winning was because of a follow-up call.",
    author: 'Lacey Miller',
  },
  {
    quote:
      'They were well organized, professional and very focused on a successful outcome. The photos and video, inclusive of aerial views, were incredible and resulted in a full price offer only 1 day after listing.',
    author: 'Heather Knudson',
  },
]

function TestimonialsSection() {
  const carouselRef = useRef(null)

  useEffect(() => {
    const carouselElement = carouselRef.current
    if (!carouselElement) return undefined
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let isDestroyed = false
    let carousel
    let resizeFrame
    const pauseForKeyboard = () => carousel?.stopPlayer()
    const resumeAfterKeyboard = () => {
      if (!prefersReducedMotion) carousel?.playPlayer()
    }

    const initializeCarousel = async () => {
      const { default: Flickity } = await import('flickity')
      if (isDestroyed) return

      carousel = new Flickity(carouselElement, {
        accessibility: true,
        adaptiveHeight: false,
        autoPlay: prefersReducedMotion ? false : 4500,
        cellAlign: 'center',
        contain: false,
        draggable: true,
        friction: 0.26,
        pageDots: true,
        pauseAutoPlayOnHover: true,
        prevNextButtons: true,
        rightToLeft: false,
        selectedAttraction: 0.024,
        wrapAround: true,
      })

      carouselElement.addEventListener('focusin', pauseForKeyboard)
      carouselElement.addEventListener('focusout', resumeAfterKeyboard)

      resizeFrame = window.requestAnimationFrame(() => {
        carousel?.resize()
        if (!prefersReducedMotion) carousel?.playPlayer()
      })

      document.fonts?.ready.then(() => {
        if (!isDestroyed) carousel?.resize()
      })
    }

    initializeCarousel()

    return () => {
      isDestroyed = true
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame)
      carouselElement.removeEventListener('focusin', pauseForKeyboard)
      carouselElement.removeEventListener('focusout', resumeAfterKeyboard)
      carousel?.destroy()
    }
  }, [])

  return (
    <section className="testimonials-section overflow-hidden bg-[#f8f6f1] py-8 sm:py-9" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-[920px] text-center" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50">
          <h2 id="testimonials-heading" className="text-balance text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.04em] text-[#101828] lg:whitespace-nowrap">
            What Are Our Past Customers Saying...
          </h2>
        </div>

        <div className="mt-5 sm:mt-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="750" data-aos-offset="50">
          <div ref={carouselRef} className="testimonials-carousel" aria-label="Customer testimonials carousel">
            {testimonials.map((testimonial) => (
              <div className="testimonial-cell" key={testimonial.author}>
                <article className="testimonial-card">
                  <div className="flex justify-center gap-1 text-[#f59e0b]" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <svg key={star} aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="m10 1.7 2.48 5.03 5.55.81-4.01 3.91.95 5.53L10 14.36l-4.97 2.62.95-5.53-4.01-3.91 5.55-.81L10 1.7Z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="mx-auto mt-4 max-w-[860px] text-center text-sm italic leading-6 text-[#4f5967] sm:text-[15px] sm:leading-7">
                    “{testimonial.quote}”
                  </blockquote>

                  <footer className="mt-4 text-center">
                    <cite className="not-italic text-sm font-bold text-[#101828]">— {testimonial.author}</cite>
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
