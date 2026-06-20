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
  await expect(page.locator('[data-resume-link]').first()).toHaveAttribute('href', /Iva_Fischerova_en_resume\.pdf$/);
});

test('language toggle switches to Czech and persists', async ({ page }) => {
  await page.locator('[data-set-lang="cs"]').first().click();
  await expect(page.locator('html')).toHaveClass(/lang-cs/);
  await expect(page.getByText('Najdu chyby dřív než vaši uživatelé.')).toBeVisible();
  await expect(page.locator('[data-resume-link]').first()).toHaveAttribute('href', /Iva_Fischerova_cz_resume\.pdf$/);

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

test('mobile hamburger menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const hamburger = page.locator('#hamburger');
  const panelLink = page.locator('#hamburger-menu a[href="#about"]');

  await expect(hamburger).toBeVisible();          // hamburger shown on mobile
  await expect(page.locator('#sidebar-menu')).toBeHidden();  // desktop nav hidden
  await expect(panelLink).toBeHidden();           // overlay collapsed by default

  await hamburger.click();
  await expect(page.locator('#toggle')).toBeChecked();
  await expect(panelLink).toBeVisible();          // overlay revealed

  await panelLink.click();                        // selecting a link closes it
  await expect(page.locator('#toggle')).not.toBeChecked();
});

test('basic accessibility: lang attr, single h1, every link has a name', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('lang', /^(en|cs)$/);
  await expect(page.locator('h1')).toHaveCount(1);

  const links = page.locator('a');
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    const text = ((await link.textContent()) || '').trim();
    const aria = await link.getAttribute('aria-label');
    expect(Boolean(text) || Boolean(aria)).toBeTruthy();
  }
});
