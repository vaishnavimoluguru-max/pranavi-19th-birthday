const celebrationContainer = document.getElementById("celebrationContainer");
const envelope = document.getElementById("envelope");
const polaroids = document.querySelectorAll(".polaroid");

let isCelebrating = false;

// 1. Allow polaroids to toggle open and closed
polaroids.forEach((polaroid) => {
    polaroid.addEventListener("click", () => {
        polaroid.classList.toggle("revealed");
    });
});

// 2. Envelope interaction setup
if (envelope) {
    envelope.addEventListener("click", () => {
        const isOpen = envelope.classList.toggle("open");
        envelope.setAttribute("aria-expanded", String(isOpen));

        // Trigger celebration only when opening and not already animating
        if (isOpen && !isCelebrating) {
            createCelebration();
        }
    });
}

// 3. Optimized celebration handler
function createCelebration() {
    if (!celebrationContainer) return;

    // Accessibility check: Skip heavy animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    isCelebrating = true;
    celebrationContainer.innerHTML = "";

    const banner = document.createElement("div");
    banner.className = "birthday-banner";
    banner.textContent = "🎉 Happy Birthday! 🎉";
    celebrationContainer.appendChild(banner);

    const colors = ["#ffc7d9", "#e8d5f2", "#c8e6e1", "#ffd4b4", "#daa520", "#b8d8ff", "#f7b7a3"];
    const totalBalloons = colors.length;

    // Responsive position calculation
    for (let i = 0; i < totalBalloons; i += 1) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        
        // Keeps balloons evenly spaced and safely within screen margins
        const leftPosition = 5 + (i * (90 / totalBalloons)); 
        balloon.style.left = `${leftPosition}%`;
        balloon.style.background = colors[i];
        balloon.style.animationDelay = `${i * 0.18}s`;
        
        celebrationContainer.appendChild(balloon);
    }

    // Clear animations and reset flag to allow re-triggering later
    window.setTimeout(() => {
        celebrationContainer.innerHTML = "";
        isCelebrating = false;
    }, 5200);
}
