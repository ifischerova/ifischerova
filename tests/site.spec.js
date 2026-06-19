const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Iva Fischerov/);
});

test('hero shows QA title and motto', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Hi, I'm Iva\./ })).toBeVisible();
  await expect(page.getByText('Software QA Engineer / Test Engineer').first()).toBeVisible();
  await expect(page.getByText("I break things so users don't have to.")).toBeVisible();
});

test('all main sections are present', async ({ page }) => {
  for (const id of ['about', 'experience', 'skills', 'certifications', 'portfolio', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});

test('nav links point to the section anchors', async ({ page }) => {
  for (const id of ['about', 'experience', 'skills', 'portfolio', 'contact']) {
    await expect(page.locator(`a[href="#${id}"]`).first()).toBeAttached();
  }
});

test('default language is English, resume points to EN CV', async ({ page }) => {
  await expect(page.locator('html')).toHaveClass(/lang-en/);
  await expect(page.locator('[data-resume-link]').first()).toHaveAttribute('href', /resume-en\.pdf$/);
});

test('language toggle switches to Czech and persists', async ({ page }) => {
  await page.locator('[data-set-lang="cs"]').first().click();
  await expect(page.locator('html')).toHaveClass(/lang-cs/);
  await expect(page.getByText('Najdu chyby dřív než vaši uživatelé.')).toBeVisible();
  await expect(page.locator('[data-resume-link]').first()).toHaveAttribute('href', /resume-cs\.pdf$/);

  await page.reload();
  await expect(page.locator('html')).toHaveClass(/lang-cs/);
  await expect(page.getByText('Najdu chyby dřív než vaši uživatelé.')).toBeVisible();
});

test('no Twitter anywhere (regression guard)', async ({ page }) => {
  await expect(page.locator('a[href*="twitter.com"]')).toHaveCount(0);
  await expect(page.locator('a[href*="x.com"]')).toHaveCount(0);
  await expect(page.locator('.fa-twitter, .fa-square-twitter, .fa-x-twitter')).toHaveCount(0);
});

test('twitter meta tags are gone from head', async ({ page }) => {
  await expect(page.locator('meta[name="twitter:creator"]')).toHaveCount(0);
});

test('contact section shows contact methods and has no form', async ({ page }) => {
  const contact = page.locator('#contact');
  await expect(contact.locator('a[href="mailto:me@ifischerova.cz"]')).toBeVisible();
  await expect(contact.locator('a[href*="linkedin.com/in/iva-fischerova"]')).toBeVisible();
  await expect(page.locator('#contact-form')).toHaveCount(0);
  await expect(page.locator('form[data-netlify]')).toHaveCount(0);
});

test('portfolio links to GitHub', async ({ page }) => {
  await expect(page.locator('#portfolio a[href*="github.com/ifischerova"]')).toBeVisible();
});

test('GitHub and LinkedIn links are present', async ({ page }) => {
  await expect(page.locator('a[href*="github.com/ifischerova"]').first()).toBeAttached();
  await expect(page.locator('a[href*="linkedin.com/in/iva-fischerova"]').first()).toBeAttached();
});
