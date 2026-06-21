# ifischerova.cz

> **I break things so users don't have to.**

The personal site of **Iva Fischerová** — Software QA / Test Engineer. A fast, bilingual
(English / Czech) one-pager that's tested and shipped the same way real products are: with a
test suite, CI, and automated audits.

[![Tests](https://github.com/ifischerova/ifischerova/actions/workflows/tests.yml/badge.svg)](https://github.com/ifischerova/ifischerova/actions/workflows/tests.yml)

**Live:** [ifischerova.cz](https://ifischerova.cz)

---

## Highlights

- **Instant bilingual toggle** — English to Czech with no page reload. Auto-detects the
  visitor's language and remembers their choice.
- **Modern dark-teal design** — built mobile-first, with a floating back-to-top button.
- **Language-aware résumé** — the download button serves the EN or CZ CV to match the page.
- **Tested like a product** — a Playwright suite guards the content, the language switch, the
  contact links, and even that no Twitter ever sneaks back in.
- **CI and scheduled health checks** — every push is tested, and the live site is re-tested
  daily (with an email if anything looks off).
- **Lighthouse audits** — performance, accessibility, best-practices and SEO, on demand and weekly.

## Tech stack

| Area | Tool |
|------|------|
| Static site generator | [Eleventy 3](https://www.11ty.dev/) (Nunjucks templates) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Interactivity | Vanilla ES modules (no framework) |
| Testing | [Playwright](https://playwright.dev/) |
| CI/CD | GitHub Actions + [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) |
| Hosting | Netlify (Node 18) |

## Local development

```bash
npm install                 # install dependencies
npm run serve               # dev server with live reload -> http://localhost:8080
npm run build               # production build -> ./_site
```

The site builds CSS with Tailwind, then generates the static site with Eleventy into `_site/`.

## Testing

```bash
npm test                    # run the Playwright suite against a fresh local build
npm run test:live           # run the same suite against the live https://ifischerova.cz
npx playwright show-report  # open the HTML report locally -> http://localhost:9323
```

In CI, the HTML report is uploaded to each **Actions -> Tests** run as an artifact
(`playwright-report-local` for push/PR, `playwright-report-live` for the daily/manual live run).
Download it, unzip, and open `index.html`.

## Automation

- **`Tests`** workflow — runs on every push/PR (build and test locally) and daily at 06:00 UTC
  against the live site. The live run emails its result so everything can be monitored without
  opening GitHub.
- **`Lighthouse`** workflow — on demand and weekly; audits the built site and posts a public
  report link in the run log.

> **Email notifications** require three repository secrets
> (*Settings -> Secrets and variables -> Actions*): `MAIL_USERNAME`, `MAIL_PASSWORD`
> (an SMTP / Gmail app password), and `MAIL_TO`. The workflow uses Gmail SMTP by default.

## Structure

```
_includes/        Nunjucks layout + section partials
css/style.css     Tailwind input + small component/i18n layer
js/               i18n toggle, menu, scroll-to-top
src/              résumé PDFs (EN / CZ)
tests/            Playwright specs
```
