# Personal Website — Template

A static personal website starter (plain HTML/CSS/JS, no build tools needed),
structured like the reference site you shared: Home / About / Education /
Experience / Projects / Gallery / Contact.

## Folder structure

```
personal-website/
├── index.html          ← Page content, edit this directly
├── css/
│   └── style.css        ← All styling: colors, fonts, layout
├── js/
│   └── main.js           ← Mobile menu behavior
├── images/
│   ├── profile.jpg        ← Your portrait photo (add your file here)
│   ├── project1.jpg, project2.jpg, project3.jpg   ← Project screenshots
│   └── gallery/1.jpg ... 6.jpg                     ← "Gallery" section images
└── assets/
    └── cv/CV.pdf         ← Your CV for download (add your file here)
```

## Run it locally

No install needed — just open `index.html` in your browser.

Or, to avoid minor path issues, serve it with a local server:

```bash
cd personal-website
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser.

## Customizing

1. **Content**: open `index.html` and replace the placeholder text (name,
   bio, education, experience, projects, social links) with your own info.
2. **Images**: drop your photos into `images/` and `images/gallery/`,
   keeping the same filenames used in the HTML — or rename them and update
   the matching `src=""` paths.
3. **Colors & fonts**: open `css/style.css`. The `:root` block at the top
   holds all the color variables (`--paper`, `--ink`, `--accent`, etc.) —
   change the hex values there and the whole site updates.
4. **CV**: place your PDF at `assets/cv/CV.pdf` (or rename it and update the
   link in the Contact section).
5. **Add/remove sections**: each section (About, Education, Projects...) is
   its own `<section>` in `index.html` — copy one to duplicate it (e.g. to
   add a "Publications" section), or delete one you don't need (remember to
   also remove its link from the nav menu).

## Deploying for free

A few beginner-friendly options:

- **Vercel** (same as the reference site): drag and drop the folder at
  https://vercel.com/new, or connect a GitHub repo.
- **GitHub Pages**: push the code to a GitHub repo, then enable it under
  Settings → Pages.
- **Netlify**: drag and drop the folder at https://app.netlify.com/drop.

## Ideas to extend

- Add a "Publications" section if you have papers/research (copy the
  Projects section structure).
- Add Google Analytics or Plausible if you want visitor stats.
- Add `og:image` and Open Graph meta tags in `<head>` for nicer link
  previews when shared on Facebook/LinkedIn.
