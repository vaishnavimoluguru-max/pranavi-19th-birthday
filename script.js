const celebrationContainer = document.getElementById("celebrationContainer");
const polaroids = document.querySelectorAll(".polaroid");

let isCelebrating = false;

// Polaroid interactive toggle & celebration trigger
polaroids.forEach((polaroid) => {
    const togglePolaroid = () => {
        polaroid.classList.toggle("revealed");
        if (!isCelebrating) {
            createCelebration();
        }
    };
    
    polaroid.addEventListener("click", togglePolaroid);
    polaroid.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePolaroid();
        }
    });
});

// Celebration balloons sequence
function createCelebration() {
    if (!celebrationContainer) return;

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

    for (let i = 0; i < totalBalloons; i += 1) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        const leftPosition = 5 + (i * (90 / totalBalloons)); 
        balloon.style.left = `${leftPosition}%`;
        balloon.style.background = colors[i];
        balloon.style.animationDelay = `${i * 0.18}s`;
        celebrationContainer.appendChild(balloon);
    }

    window.setTimeout(() => {
        celebrationContainer.innerHTML = "";
        isCelebrating = false;
    }, 5200);
}
