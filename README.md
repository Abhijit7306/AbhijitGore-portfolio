# Abhijit Anil Gore — Portfolio

A responsive, static personal portfolio built with HTML5, CSS3, SVG, and vanilla JavaScript. There is no framework, build step, backend, or package manager.

## Run locally

Open `index.html` in a browser. For more reliable local asset and PDF checks, run a static server from this folder, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The browser may prevent a `file://` page from checking whether the resume PDF exists, so the static server is recommended.

## Replaceable assets

- **Profile image:** add your real photo as `assets/profile.jpg`. Until then, the card displays a branded placeholder.
- **Resume:** add your real resume as `assets/resume.pdf`. The button checks for this file and gives a friendly message if it is missing.
- **Portfolio PDF:** add a PDF as `assets/portfolio.pdf` when you have one. Its button reports clearly when the file is not yet present.
- Project artwork is currently illustrative SVG placeholder artwork in `assets/hiredx-preview.svg` and `assets/sahaay-preview.svg`; replace these with screenshots when available.

Do not treat the artwork as actual application screenshots. The demo visitor counter is a static sample, not analytics.

## Edit your details

Edit the visible copy and contact information in `index.html`. Navigation and common interface translations are in `script.js` under `translations`. Theme selection and language choice are saved in local storage. The default language is English and default theme is dark.

## Add project links

At the top of `script.js`, edit the `portfolioData.projects` array. Set `github` and `demo` to real URLs to show active links. Empty values deliberately show a friendly unavailable-link message. Project technologies are listed only where supplied; keep Sahaay's technology array empty until verified.

## Deploy

The site is static and uses relative asset paths.

- **GitHub Pages:** push the contents of this folder to a repository, then select the branch/folder in repository Settings → Pages. GitHub Pages serves `index.html` and uses `404.html` for missing paths.
- **Netlify:** drag this folder into Netlify Drop or connect the repository. Use this folder as the publish directory; no build command is needed.
- **Vercel:** import the repository and select “Other” / static output. Set the root or output directory to this folder and leave the build command empty. The supplied `404.html` can be used as a static fallback depending on project configuration.

## Contact form limitation

There is no backend. The validated form opens the visitor's email application with a `mailto:` draft; this website does not send, store, or confirm delivery of messages.
