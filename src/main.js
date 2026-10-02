import './style.css'
import { jsPDF } from 'jspdf'

const bookingEmail = 'bookings@destinygomba.com'

const portfolio = [
  { src: '/destiny/501125628_18368325310192023_3140630526521723868_n.jpg', alt: 'Fashion portrait in a sculptural outfit', title: 'Form study', credit: 'Editorial reference 01' },
  { src: '/destiny/587556547_18393072835192023_9091803690174659592_n.jpg', alt: 'Close-up studio portrait', title: 'Quiet light', credit: 'Editorial reference 02' },
  { src: '/destiny/630159183_17845839141684319_5128537222206974733_n.jpg', alt: 'Street-style fashion portrait', title: 'On the street', credit: 'Editorial reference 03' },
  { src: '/destiny/654026649_18145705243474527_6423170126569700247_n.jpg', alt: 'Natural-light beauty portrait', title: 'Soft focus', credit: 'Editorial reference 04' },
  { src: '/destiny/655208250_18105879319851386_6664564266117068974_n.jpg', alt: 'Full-length fashion portrait', title: 'New silhouette', credit: 'Editorial reference 05' },
  { src: '/destiny/722995602_17869314777684319_8638627465086303604_n.jpg', alt: 'Fashion look photographed outdoors', title: 'In motion', credit: 'Editorial reference 06' },
  { src: '/destiny/825323109_18440571958192023_7626798975550654516_n.jpg', alt: 'Portrait in natural light', title: 'A study in stillness', credit: 'Editorial reference 07' },
]

const imageUrl = (src) => src

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="site-header">
    <a class="wordmark" href="#home" aria-label="Destiny Gomba, home">DESTINY GOMBA<span>MODEL</span></a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation" inert>
      <a href="#portfolio">Portfolio</a>
      <a href="#comp-card">Comp Card</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="cover" id="home" aria-labelledby="cover-title">
      <img class="cover-image" src="${imageUrl('/destiny/587556547_18393072835192023_9091803690174659592_n.jpg')}" alt="Destiny Gomba portrait reference" fetchpriority="high" />
      <div class="cover-shade"></div>
      <div class="cover-meta"><span>FASHION MODEL</span><span>PORTFOLIO / 2026</span></div>
      <div class="cover-copy">
        <p class="eyebrow">SELECTED WORK · EDITORIAL / PORTRAIT / FASHION</p>
        <h1 id="cover-title">Destiny<br /><em>Gomba</em></h1>
        <a class="text-link cover-link" href="#portfolio">Explore the work <span aria-hidden="true">↘</span></a>
      </div>
      <a class="scroll-cue" href="#portfolio" aria-label="Scroll to selected work"><span></span>SCROLL TO EXPLORE</a>
    </section>

    <section class="portfolio section-pad" id="portfolio" aria-labelledby="portfolio-title">
      <div class="section-heading reveal">
        <p class="eyebrow">NO. 01 — SELECTED WORK</p>
        <h2 id="portfolio-title">In good <em>light.</em></h2>
        <p class="section-intro">A collection of fashion, portrait and editorial references.</p>
      </div>
      <div class="gallery" aria-label="Selected portfolio images">
        ${portfolio.map((item, index) => `
          <button class="gallery-item reveal" type="button" data-index="${index}" aria-label="View ${item.title}, image ${String(index + 1).padStart(2, '0')} of ${portfolio.length}">
            <span class="gallery-image-wrap"><img src="${imageUrl(item.src)}" alt="${item.alt}, portfolio image" loading="lazy" decoding="async" /></span>
            <span class="gallery-caption"><span>${item.title}</span><span>${String(index + 1).padStart(2, '0')}</span></span>
          </button>
        `).join('')}
      </div>
      <p class="image-note">Preview imagery is temporary. Replace with approved portfolio selects before publishing.</p>
    </section>

    <section class="comp-section section-pad" id="comp-card" aria-labelledby="comp-title">
      <div class="section-heading reveal">
        <p class="eyebrow">NO. 02 — THE ESSENTIALS</p>
        <h2 id="comp-title">A closer <em>look.</em></h2>
      </div>
      <article class="comp-card reveal">
        <div class="comp-photo-wrap">
          <img id="comp-photo" src="${imageUrl('/destiny/655208250_18105879319851386_6664564266117068974_n.jpg')}" alt="Destiny Gomba portrait reference for comp card layout" loading="lazy" />
          <span class="comp-photo-label">LAYOUT PREVIEW</span>
        </div>
        <div class="comp-details">
          <p class="eyebrow">FASHION MODEL</p>
          <h3>Destiny<br /><em>Gomba</em></h3>
          <p class="comp-subtitle">Editorial · Beauty · Fashion</p>
          <dl class="measurements">
            <div><dt>Height</dt><dd>5'2</dd></div>
            <div><dt>Bust</dt><dd>34</dd></div>
            <div><dt>Waist</dt><dd>24</dd></div>
            <div><dt>Hips</dt><dd>32</dd></div>
            <div><dt>Shoe</dt><dd>US 7.5</dd></div>
            <div><dt>Dress</dt><dd>US 2</dd></div>
            <div><dt>Hair</dt><dd>Dark Brown</dd></div>
            <div><dt>Eyes</dt><dd>Brown</dd></div>
          </dl>
          <button class="button button-dark" id="download-card" type="button">
            <span aria-hidden="true">↓</span> Download comp card
          </button>
        </div>
      </article>
    </section>

    <section class="about-section section-pad" id="about" aria-labelledby="about-title">
      <div class="about-image reveal">
        <img src="${imageUrl('/destiny/630159183_17845839141684319_5128537222206974733_n.jpg')}" alt="Destiny Gomba portrait study" loading="lazy" />
        <span class="image-index">PORTRAIT STUDY / 01</span>
      </div>
      <div class="about-copy reveal">
        <p class="eyebrow">NO. 03 — A NOTE ON DESTINY</p>
        <h2 id="about-title">Presence,<br /><em>in every frame.</em></h2>
        <p class="about-body">Destiny Gomba is a fashion model whose work moves between editorial, portraiture and contemporary fashion. She brings a considered, expressive presence to every frame.</p>
        <p class="draft-note">DRAFT BIO · EDIT WITH APPROVED PERSONAL DETAILS</p>
        <a class="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div class="contact-heading reveal">
        <p class="eyebrow">NO. 04 — BOOKINGS & ENQUIRIES</p>
        <h2 id="contact-title">Let’s make<br /><em>something.</em></h2>
        <p>For bookings, collaborations and all other enquiries.</p>
        <a class="contact-email" href="mailto:${bookingEmail}">${bookingEmail}<span aria-hidden="true">↗</span></a>
        <p class="contact-note">Confirm this booking address and add agency or social details before launch.</p>
      </div>
      <form class="contact-form reveal" id="contact-form">
        <label for="name">Your name</label>
        <input id="name" name="name" autocomplete="name" required />
        <label for="email">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email" required />
        <label for="message">A little about your enquiry</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button class="button button-light" type="submit">Start an enquiry <span aria-hidden="true">↗</span></button>
        <p class="form-note" id="form-note" role="status" aria-live="polite">Your email app will open with your message ready to send.</p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <a class="footer-wordmark" href="#home">DESTINY GOMBA</a>
    <p>EDITORIAL · BEAUTY · FASHION</p>
    <a href="#home" class="back-top">BACK TO TOP ↑</a>
  </footer>

  <dialog class="lightbox" id="lightbox" aria-label="Portfolio image viewer">
    <div class="lightbox-bar">
      <span id="lightbox-count"></span>
      <button class="lightbox-close" id="lightbox-close" type="button" aria-label="Close image viewer">×</button>
    </div>
    <button class="lightbox-arrow lightbox-prev" id="lightbox-prev" type="button" aria-label="Previous image">←</button>
    <figure class="lightbox-figure">
      <img id="lightbox-image" alt="" />
      <figcaption id="lightbox-caption"></figcaption>
    </figure>
    <button class="lightbox-arrow lightbox-next" id="lightbox-next" type="button" aria-label="Next image">→</button>
  </dialog>
`

const header = document.querySelector('#site-header')
const menuToggle = document.querySelector('#menu-toggle')
const siteNav = document.querySelector('#site-nav')

function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
  siteNav.inert = !isOpen
  siteNav.classList.toggle('is-open', isOpen)
  document.body.classList.toggle('menu-open', isOpen)
  if (!isOpen) menuToggle.focus()
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
})

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
  }
})

let previousScrollY = window.scrollY
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY
  if (menuToggle.getAttribute('aria-expanded') !== 'true') {
    header.classList.toggle('is-hidden', currentScrollY > previousScrollY && currentScrollY > 120)
    header.classList.toggle('has-scrolled', currentScrollY > 20)
  }
  previousScrollY = currentScrollY
}, { passive: true })

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

const lightbox = document.querySelector('#lightbox')
const lightboxImage = document.querySelector('#lightbox-image')
const lightboxCaption = document.querySelector('#lightbox-caption')
const lightboxCount = document.querySelector('#lightbox-count')
let activeIndex = 0
let touchStartX = null

function showImage(index) {
  activeIndex = (index + portfolio.length) % portfolio.length
  const item = portfolio[activeIndex]
  lightboxImage.src = imageUrl(item.src)
  lightboxImage.alt = `${item.alt}, portfolio image`
  lightboxCaption.textContent = `${item.title} · ${item.credit}`
  lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(portfolio.length).padStart(2, '0')}`
}

document.querySelectorAll('.gallery-item').forEach((button) => {
  button.addEventListener('click', () => {
    showImage(Number(button.dataset.index))
    lightbox.showModal()
  })
})

document.querySelector('#lightbox-close').addEventListener('click', () => lightbox.close())
document.querySelector('#lightbox-prev').addEventListener('click', () => showImage(activeIndex - 1))
document.querySelector('#lightbox-next').addEventListener('click', () => showImage(activeIndex + 1))
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close()
})
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showImage(activeIndex - 1)
  if (event.key === 'ArrowRight') showImage(activeIndex + 1)
})
lightbox.addEventListener('pointerdown', (event) => {
  touchStartX = event.clientX
})
lightbox.addEventListener('pointerup', (event) => {
  if (touchStartX === null) return
  const distance = event.clientX - touchStartX
  if (Math.abs(distance) > 55) showImage(activeIndex + (distance < 0 ? 1 : -1))
  touchStartX = null
})

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const subject = `Portfolio enquiry from ${formData.get('name')}`
  const body = `${formData.get('message')}\n\nFrom: ${formData.get('name')}\nEmail: ${formData.get('email')}`
  document.querySelector('#form-note').textContent = 'Your email app is opening with the enquiry addressed to Destiny.'
  window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

document.querySelector('#download-card').addEventListener('click', async (event) => {
  const button = event.currentTarget
  const status = document.querySelector('#pdf-note')
  button.disabled = true
  if (status) status.textContent = 'Preparing your comp card…'

  try {
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    pdf.setFillColor(245, 245, 245)
    pdf.rect(0, 0, 210, 297, 'F')
    pdf.setDrawColor(17, 17, 17)
    pdf.setLineWidth(0.35)
    pdf.rect(12, 12, 186, 273)

    let imageTimeout
    try {
      const photo = new Image()
      photo.crossOrigin = 'anonymous'
      photo.src = imageUrl('/destiny/654026649_18145705243474527_6423170126569700247_n.jpg')
      await Promise.race([
        photo.decode(),
        new Promise((_, reject) => {
          imageTimeout = window.setTimeout(() => reject(new Error('Portrait image timed out')), 4000)
        }),
      ])
      pdf.addImage(photo, 'JPEG', 18, 18, 80, 132, undefined, 'FAST')
    } catch {
      pdf.setFillColor(225, 225, 225)
      pdf.rect(18, 18, 80, 132, 'F')
      pdf.setTextColor(70, 70, 70)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9)
      pdf.text('APPROVED PORTRAIT', 58, 84, { align: 'center' })
    } finally {
      window.clearTimeout(imageTimeout)
    }

    pdf.setTextColor(17, 17, 17)
    pdf.setFont('times', 'normal')
    pdf.setFontSize(27)
    pdf.text(['DESTINY', 'GOMBA'], 108, 37)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.text('FASHION MODEL  /  EDITORIAL · BEAUTY · FASHION', 108, 55)
    pdf.setDrawColor(150, 150, 150)
    pdf.line(108, 62, 190, 62)

    const stats = [
      ['HEIGHT', "5'2"], ['BUST', '34'],
      ['WAIST', '24'], ['HIPS', '32'],
      ['SHOE', 'US 7.5'], ['DRESS', 'US 2'],
      ['HAIR', 'Dark Brown'], ['EYES', 'Brown'],
    ]
    pdf.setFontSize(8)
    stats.forEach(([label, value], index) => {
      const y = 76 + index * 10
      pdf.setFont('helvetica', 'bold')
      pdf.text(label, 108, y)
      pdf.setFont('helvetica', 'normal')
      pdf.text(value, 142, y)
      pdf.setDrawColor(220, 220, 220)
      pdf.line(108, y + 3, 190, y + 3)
    })

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(7)
    pdf.text('LAYOUT PREVIEW — replace the temporary image and add contact details before sharing.', 18, 276)
    pdf.save('destiny-gomba-comp-card.pdf')
    if (status) status.textContent = 'Preview PDF downloaded. Replace the temporary image and add contact details before sharing.'
  } catch {
    if (status) status.textContent = 'The PDF could not be created. Please try again.'
  } finally {
    button.disabled = false
  }
})
