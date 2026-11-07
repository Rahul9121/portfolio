# Rahul Ega — Personal Portfolio

Y2K + Cybercore portfolio for **Rahul Ega**, Senior Data Engineer in New Jersey.

**Stack:** plain HTML, CSS, vanilla JavaScript (no build step).  
**Live URL (default):** https://rahul9121.github.io/portfolio/

---

## Quick start (local)

```bash
# From this folder
npx --yes serve .
# or: python -m http.server 5500
```

Open the printed localhost URL. Prefer a local server over `file://` so paths and the contact form behave normally.

---

## 1) Deploy on GitHub Pages

1. Create a GitHub repo (recommended name: `portfolio`) under **Rahul9121**.
2. Push this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/Rahul9121/portfolio.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` / folder: `/ (root)`
5. Wait 1–2 minutes. Site URL:

   `https://rahul9121.github.io/portfolio/`

6. **Custom domain (optional):** Settings → Pages → Custom domain. Then update every absolute URL in:
   - `index.html` (canonical, Open Graph, Twitter, JSON-LD)
   - `sitemap.xml`
   - `robots.txt`

### Project-site base path

This site uses **relative** asset paths (`css/`, `js/`, `assets/`), so it works at both:

- `https://rahul9121.github.io/portfolio/`
- a custom domain root

---

## 2) Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://rahul9121.github.io/portfolio/`
3. Verify ownership (HTML file upload or DNS if custom domain). Easiest for GitHub Pages: **HTML tag** meta — paste into `index.html` `<head>` temporarily, push, verify, then you may keep or remove it.
4. After verification, open **Sitemaps** → submit:

   `https://rahul9121.github.io/portfolio/sitemap.xml`

5. Use **URL Inspection** on the homepage → **Request indexing**.

---

## 3) Bing Webmaster Tools

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Add the same site URL.
3. Verify (often you can import from Google Search Console).
4. Submit the same `sitemap.xml`.

---

## 4) Rich Results & performance checks

1. [Rich Results Test](https://search.google.com/test/rich-results) — paste homepage URL. Confirm **Person** / **ProfilePage** JSON-LD has no errors.
2. [PageSpeed Insights](https://pagespeed.web.dev/) — target 90+ on mobile and desktop. Compress the real photo (WebP + JPG under ~200 KB) for best LCP.
3. Optional: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) for `og-image.jpg`.

---

## 5) Identity consistency (helps name search)

Use the **same** name, photo, headline, location, and site link on:

- LinkedIn headline & About
- GitHub profile README
- Resume PDF
- This portfolio

Suggested headline:

> Senior Data Engineer in New Jersey | PySpark · Azure · Snowflake · Kafka · dbt

Suggested About line:

> Rahul Ega — Senior Data Engineer (NJ) building batch and streaming pipelines with PySpark, Azure, Snowflake, Kafka, and dbt.

---

## Placeholders you must replace

| Item | Where |
|------|--------|
| Real headshot | `assets/img/rahul-ega-senior-data-engineer.jpg` (+ optional `.webp`) and `assets/img/rahul-ega.jpg` |
| 512×512 square crop | `assets/img/rahul-ega-512.jpg` (Apple touch icon) |
| Social preview 1200×630 | `assets/img/og-image.jpg` |
| Resume PDF | `assets/Rahul_Ega_Resume.pdf` |
| LinkedIn URL | Search `REPLACE_LINKEDIN` in `index.html` and set `LINKEDIN_URL` in `js/main.js` |
| Project demo/GitHub links | `PROJECTS` array in `js/main.js` |
| Canonical / OG URLs | If using a custom domain, update `index.html`, `sitemap.xml`, `robots.txt` |
| JSON-LD `sameAs` LinkedIn | Same as above inside the Person schema |

---

## File map

```
/
  index.html
  css/style.css
  js/main.js
  robots.txt
  sitemap.xml
  README.md
  assets/
    Rahul_Ega_Resume.pdf   ← add your PDF
    img/
      favicon.svg
      rahul-ega.jpg
      rahul-ega-senior-data-engineer.jpg
      rahul-ega-512.jpg
      og-image.jpg
```

---

## Contact form notes

- No backend and no third-party form service.
- Submit opens **Gmail compose** (desktop) or **mailto:** (mobile), or **WhatsApp** (`wa.me/12038041989`) with a pre-filled message.
- Change email / WhatsApp at the top of `js/main.js`.

---

## License

Personal portfolio for Rahul Ega. All rights reserved © 2026.
