document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.querySelector(".contact-button");

    if (!copyButton) return;

    copyButton.addEventListener("click", async () => {
        const email = copyButton.getAttribute("data-email");
        if (!email) return;

        try {
            await navigator.clipboard.writeText(email);

            const originalText = copyButton.querySelector(".contact-label").textContent;
            copyButton.querySelector(".contact-label").textContent = "Copiata!";

            setTimeout(() => {
                copyButton.querySelector(".contact-label").textContent = originalText;
            }, 1500);
        } catch (err) {
            alert("Non sono riuscito a copiare l'email. Puoi copiarla manualmente.");
        }
    });
});
