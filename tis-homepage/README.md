# Tulas International School — Homepage Redesign

A responsive, single-page frontend assessment built with React, Vite and CSS Modules. The design uses TIS branding, burgundy accents, warm neutral backgrounds, editorial typography and official school imagery.

## Run locally

Install Node.js 22 LTS or newer. Extract the ZIP, open the `tis-homepage` folder in VS Code, and open Terminal → New Terminal.

```bash
npm install
npm run dev
```

Open the localhost address printed in your terminal, normally http://localhost:5173. Keep the terminal running. Press Ctrl+C to stop.

If PowerShell blocks npm.ps1, use `npm.cmd install` and `npm.cmd run dev` instead.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist`. Preview normally runs at http://localhost:4173. Do not open index.html directly from File Explorer: the React source needs Vite.

## Implemented features

- Scroll-triggered reveals using IntersectionObserver, with 500 ms transitions and small stagger delays.
- A fixed scroll progress indicator updated through requestAnimationFrame without rerendering the page.
- Light/dark theme control with a saved local preference and graceful handling of unavailable storage.
- Responsive navigation with Escape dismissal and an expanded-state announcement.
- Campus activity filters, native accessible FAQ disclosures and working official admissions, telephone and email links.
- Reduced-motion support, visible keyboard focus, descriptive image alternatives and a skip link.
- Locally bundled, compressed WebP school images. Google Fonts are optional; system fonts provide a fallback.

## Project structure

- `src/components/layout`: Header and Footer.
- `src/components/sections`: Hero, About, Learning, CampusLife and Admissions.
- `src/components/animation`: Reveal and ScrollProgress.
- `src/components/ui`: shared LinkButton.
- `src/hooks/useTheme.js`: theme state and persistence.
- `src/data/school.js`: navigation, statistics, activities and FAQs.
- `src/styles`: global tokens and scoped CSS Modules.
- `public/images`: locally optimized official school assets.

## Code walkthrough

App composes the page sections in reading order. Small interactions keep state in their own component: the navigation owns its open state, CampusLife owns its filter, and the theme hook owns the selected theme. Static school content is separate from presentation.

Reveal observes each section once and disconnects after it enters the viewport. Its effect also disconnects on unmount. Reduced-motion users see the content immediately. ScrollProgress uses a DOM ref because scroll position does not need to trigger React renders; listeners, its ResizeObserver and pending frames are cleaned up on unmount.

CSS variables define both themes. CSS Modules scope component classes. Breakpoints adapt the two-column hero, navigation, content grids and footer for mobile and tablet screens. No code comments, debug logging or animation dependency is included.

Admissions calls to action lead to the school's real application portal. This project does not collect enquiries, send OTPs or claim to process applications.

## Publish on Vercel

1. Create an empty public GitHub repository and push this project.
2. In Vercel, choose Add New → Project and import that repository.
3. Select Vite if it is not detected automatically.
4. Build command: `npm run build`. Output directory: `dist`.
5. Deploy and check the resulting public link on desktop and phone.

## Publish on Netlify

Import the GitHub repository into Netlify. The included `netlify.toml` sets the build command and output directory. Alternatively run `npm run build` and upload the `dist` folder using Netlify's manual deploy flow.

## Push to GitHub

Run these commands inside the extracted project folder. Replace the URL with your own empty repository URL before running the remote command.

```bash
git init
git add .
git commit -m "Build TIS homepage redesign"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Submission status

Source code and local production build are provided. A public GitHub repository and Vercel/Netlify deployment have not been created. After publishing, add your actual repository and live URLs here and submit them through the assignment's Google Form. No form has been submitted on your behalf.

## Sources and attribution

- Assignment: supplied `Frontend Developer Task 1.pdf`.
- Technical guide: https://dour-blade-da4.notion.site/TIS-Homepage-Redesign-Technical-Reference-Guide-3eb573730b5a801ca1beed9ec2e61600
- Branding, school facts, selected core copy and source images: https://tis.edu.in/
- Admissions destination: https://admission.tis.edu.in/

School branding and photographs remain the property of their respective owners. They are used here for the requested educational assessment. This is an unofficial redesign, not an official school service. Some supporting headings and descriptions are newly written for the redesign. The highlighted quotation is school website copy, not a newly invented parent testimonial. See ASSETS.md for image provenance.
