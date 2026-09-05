// ===============================
// AYAAN GAMING - TOOL SYSTEM
// ===============================

// ---------- COMMON MODAL HELPERS ----------

function openPanel(id) {
    const panel = document.getElementById(id);

    if (!panel) return;

    panel.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeTool(id) {
    const panel = document.getElementById(id);

    if (!panel) return;

    panel.classList.remove("active");

    const activePanels = document.querySelectorAll(".tool-modal.active");

    if (activePanels.length === 0) {
        document.body.classList.remove("modal-open");
    }
}

function closeAllPanels() {
    document.querySelectorAll(".tool-modal.active").forEach(panel => {
        panel.classList.remove("active");
    });

    document.body.classList.remove("modal-open");
}


// ===============================
// SENSITIVITY CALCULATOR
// ===============================

function openSensitivity() {
    openPanel("sensitivityPanel");
}

function calculateSensitivity() {

    const base = Number(document.getElementById("baseSensitivity").value);
    const style = document.getElementById("playStyle").value;

    const result = document.getElementById("sensitivityResult");

    if (!base || base < 1 || base > 200) {

        result.innerHTML = `
            <div class="error-result">
                Please enter a sensitivity between 1 and 200.
            </div>
        `;

        return;
    }

    let multiplier = 1;

    if (style === "low") {
        multiplier = 0.85;
    }

    if (style === "balanced") {
        multiplier = 1;
    }

    if (style === "high") {
        multiplier = 1.15;
    }

    const recommended = Math.round(base * multiplier);

    result.innerHTML = `
        <div class="result-title">RECOMMENDED SENSITIVITY</div>

        <div class="result-number">
            ${recommended}
        </div>

        <div class="result-subtitle">
            Starting point for ${style} sensitivity style.
        </div>
    `;
}


// ===============================
// GAMING STATS CALCULATOR
// ===============================

function openStats() {

    openPanel("statsPanel");

    const result = document.getElementById("statsResult");

    if (result) {
        result.innerHTML = `
            <div class="result-placeholder">
                Enter your stats to calculate your performance.
            </div>
        `;
    }
}

function calculateStats() {

    const kills = Number(document.getElementById("killsInput").value);
    const deaths = Number(document.getElementById("deathsInput").value);
    const wins = Number(document.getElementById("winsInput").value);
    const matches = Number(document.getElementById("matchesInput").value);

    const result = document.getElementById("statsResult");

    if (
        Number.isNaN(kills) ||
        Number.isNaN(deaths) ||
        Number.isNaN(wins) ||
        Number.isNaN(matches) ||
        kills < 0 ||
        deaths < 0 ||
        wins < 0 ||
        matches <= 0 ||
        wins > matches
    ) {

        result.innerHTML = `
            <div class="error-result">
                Please enter valid gaming stats.
            </div>
        `;

        return;
    }

    const kd = deaths === 0
        ? kills.toFixed(2)
        : (kills / deaths).toFixed(2);

    const winRate = ((wins / matches) * 100).toFixed(1);

    let performance = "KEEP GRINDING";

    if (Number(kd) >= 3 && Number(winRate) >= 30) {
        performance = "ELITE PERFORMANCE";
    } 
    else if (Number(kd) >= 2 && Number(winRate) >= 20) {
        performance = "STRONG PERFORMANCE";
    } 
    else if (Number(kd) >= 1 && Number(winRate) >= 10) {
        performance = "GOOD PERFORMANCE";
    }

    result.innerHTML = `
        <div class="result-title">YOUR GAMING STATS</div>

        <div class="stats-result-grid">

            <div class="stat-result-card">
                <span>K/D</span>
                <strong>${kd}</strong>
            </div>

            <div class="stat-result-card">
                <span>WIN RATE</span>
                <strong>${winRate}%</strong>
            </div>

            <div class="stat-result-card">
                <span>KILLS</span>
                <strong>${kills}</strong>
            </div>

            <div class="stat-result-card">
                <span>MATCHES</span>
                <strong>${matches}</strong>
            </div>

        </div>

        <div class="fps-advice">
            ${performance}
        </div>
    `;
}


// ===============================
// FPS CALCULATOR / OPTIMIZER
// ===============================

function openFPS() {

    openPanel("fpsPanel");

    const result = document.getElementById("fpsResult");

    if (result) {
        result.innerHTML = `
            <div class="result-placeholder">
                Enter your GPU, current FPS and graphics setting.
            </div>
        `;
    }
}

function calculateFPS() {

    const gpu = document.getElementById("gpuInput").value.trim();
    const fps = Number(document.getElementById("fpsInput").value);
    const graphics = document.getElementById("graphicsInput").value;

    const result = document.getElementById("fpsResult");

    if (
        gpu === "" ||
        Number.isNaN(fps) ||
        fps < 0
    ) {

        result.innerHTML = `
            <div class="error-result">
                Please enter valid FPS information.
            </div>
        `;

        return;
    }

    let advice = "";
    let target = fps;

    if (graphics === "ultra") {

        target = Math.max(fps, 60);

        advice = `
            Try lowering shadows and heavy effects first.
            This can improve FPS stability.
        `;

    } 
    else if (graphics === "high") {

        target = Math.max(fps, 60);

        advice = `
            Reduce unnecessary visual effects
            if you want more stable FPS.
        `;

    } 
    else if (graphics === "medium") {

        target = Math.max(fps, 75);

        advice = `
            Your settings are already balanced.
            Focus on stable frame delivery.
        `;

    } 
    else {

        target = Math.max(fps, 90);

        advice = `
            You are already using low graphics.
            Prioritize performance and background-app cleanup.
        `;
    }

    result.innerHTML = `
        <div class="result-title">FPS OPTIMIZATION</div>

        <div class="fps-result-main">

            <div class="fps-big-number">
                ${target}+
            </div>

            <div class="fps-label">
                TARGET FPS
            </div>

        </div>

        <div class="fps-advice">
            <strong>${escapeHTML(gpu)}</strong><br><br>
            ${advice}
        </div>
    `;
}


// ===============================
// GAMING NAME GENERATOR
// ===============================

const gamingNames = [

    "亗 AYAAN X",
    "么 AYAAN 々",
    "AYAAN々OP",
    "AYAAN乂YT",
    "亗 DARK AYAAN",
    "AYAANツKING",
    "AYAANメPRO",
    "乂 AYAAN 乂",
    "AYAAN〆7",
    "AYAAN々GOD",
    "亗 AYAAN FF",
    "AYAANメX",
    "AYAAN乂LEGEND",
    "DARKメAYAAN",
    "AYAANツBOSS"

];

function openNameGenerator() {

    openPanel("namePanel");

    generateGamingName();
}

function generateGamingName() {

    const result = document.getElementById("nameResult");

    if (!result) return;

    const randomIndex = Math.floor(
        Math.random() * gamingNames.length
    );

    const selectedName = gamingNames[randomIndex];

    result.classList.remove("name-pop");

    // Restart animation
    void result.offsetWidth;

    result.classList.add("name-pop");

    result.textContent = selectedName;
}


// ===============================
// SECURITY / TEXT HELPER
// ===============================

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ===============================
// MODAL CLICK OUTSIDE
// ===============================

document.addEventListener("click", function(event) {

    const panels = document.querySelectorAll(".tool-modal.active");

    panels.forEach(panel => {

        if (event.target === panel) {
            closeTool(panel.id);
        }

    });

});


// ===============================
// ESC KEY CLOSE
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeAllPanels();
    }

});


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    console.log("AYAAN Gaming Tools Loaded Successfully!");

});