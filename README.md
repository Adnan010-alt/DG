# Destiny Gomba — Fashion Portfolio

A responsive, monochrome fashion portfolio built with Vite. The page includes five navigable sections, an image lightbox, a generated comp-card PDF, and an enquiry form that opens an email draft.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Before launch

- Replace the temporary Unsplash reference images in `src/main.js` with Destiny's approved portfolio images and add photographer credits.
- Confirm the booking address in `src/main.js`; it is currently `bookings@destinygomba.com`. The contact form uses `mailto:` and does not send mail through a server. For direct delivery, connect a form provider such as Formspree or Resend.
- Replace the draft biography, confirm measurements, hair and eye details, and add agency and social links.
- Update the Open Graph image and verify the final site description in `index.html`.
- The generated comp card is a layout preview with placeholder stats and a temporary image; update the source content before distributing it.

Images are loaded from Unsplash and require an internet connection. The portfolio gallery and PDF generator are client-side; no user information is stored.