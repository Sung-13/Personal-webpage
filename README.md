# Dr Sungkyung Kim — Personal Academic Website

Live site: **https://sung-13.github.io/Personal-webpage/**

Single-page academic profile for Dr Sungkyung Kim, Assistant Professor in Sport Management at the University of Stirling. Built as a static site (plain HTML/CSS/JS, self-hosted fonts, no build step) and hosted on GitHub Pages.

## Structure

- `index.html` — all page content (about, research, publications, teaching, PhD opportunities, contact)
- `assets/css/style.css` — all styling
- `assets/js/main.js` — mobile navigation, publication filters, footer year
- `assets/fonts/` — self-hosted Inter and Playfair Display fonts
- `assets/images/` — profile photo and favicons
- `sitemap.xml`, `robots.txt` — SEO

## Updating the site

See [WEBSITE_REFERENCE.md](WEBSITE_REFERENCE.md) for step-by-step instructions on editing the introduction, adding publications, and deploying.

Quick version:

```bash
# Preview locally
python3 -m http.server 8000   # then open http://localhost:8000

# Publish (GitHub Pages redeploys automatically in ~1-2 minutes)
git add -A
git commit -m "Describe your change"
git push
```
