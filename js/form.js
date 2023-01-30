export function initSubmit() {
    window.addEventListener("DOMContentLoaded", () => {
        const parsedUrl = new URL(window.location.href);
        if (parsedUrl.searchParams.get('form_submit') === "success") {
            const message = document.getElementById('submission-message');
            message.setAttribute("aria-hidden", "false");
            message.style.display = "block";
        }
    })
}