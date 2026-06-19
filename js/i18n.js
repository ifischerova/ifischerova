// Language toggle, persistence, and language-aware resume links.
// The initial <html> class is set by an inline <head> script (see base.njk)
// to avoid a flash of the wrong language.

function currentLang() {
  return document.documentElement.classList.contains('lang-cs') ? 'cs' : 'en';
}

function applyResumeLinks(lang) {
  document.querySelectorAll('[data-resume-link]').forEach((a) => {
    a.setAttribute('href', `/src/resume-${lang}.pdf`);
    a.setAttribute('download', `Iva_Fischerova_${lang}_resume.pdf`);
  });
}

function updateToggleState(lang) {
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    const isActive = btn.getAttribute('data-set-lang') === lang;
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

export function setLang(lang) {
  const root = document.documentElement;
  root.classList.remove('lang-en', 'lang-cs');
  root.classList.add(`lang-${lang}`);
  root.setAttribute('lang', lang);
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
  applyResumeLinks(lang);
  updateToggleState(lang);
}

export function initI18n() {
  const lang = currentLang();
  applyResumeLinks(lang);
  updateToggleState(lang);
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-set-lang')));
  });
}
