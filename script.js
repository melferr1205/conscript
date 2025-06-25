document.addEventListener("DOMContentLoaded", (), => {
    const envelope = document.getElementById("envelope");
    if (envelope) {
        envelope.addEventListener("click", () => {
            setTimeout ( () => {
                window.open("investigacion.html", "_blank");
            }, 800);
        });
    }
});