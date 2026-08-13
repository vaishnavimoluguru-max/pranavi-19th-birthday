const celebrationContainer = document.getElementById("celebrationContainer");
const envelope = document.getElementById("envelope");
const polaroids = document.querySelectorAll(".polaroid");

let hasOpenedEnvelope = false;

polaroids.forEach((polaroid) => {
    polaroid.addEventListener("click", () => {
        polaroid.classList.add("revealed");
    });
});

if (envelope) {
    envelope.addEventListener("click", () => {
        const isOpen = envelope.classList.toggle("open");
        envelope.setAttribute("aria-expanded", String(isOpen));

        if (!hasOpenedEnvelope) {
            hasOpenedEnvelope = true;
            createCelebration();
        }
    });
}

function createCelebration() {
    if (!celebrationContainer) {
        return;
    }

    celebrationContainer.innerHTML = "";

    const banner = document.createElement("div");
    banner.className = "birthday-banner";
    banner.textContent = "🎉 Happy Birthday! 🎉";
    celebrationContainer.appendChild(banner);

    const colors = ["#ffc7d9", "#e8d5f2", "#c8e6e1", "#ffd4b4", "#daa520", "#b8d8ff", "#f7b7a3"];

    for (let i = 0; i < 7; i += 1) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${10 + i * 13}%`;
        balloon.style.background = colors[i % colors.length];
        balloon.style.animationDelay = `${i * 0.18}s`;
        celebrationContainer.appendChild(balloon);
    }

    window.setTimeout(() => {
        celebrationContainer.innerHTML = "";
    }, 5200);
}
