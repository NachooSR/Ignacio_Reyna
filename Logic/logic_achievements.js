/* ===================== CONSTANTS ===================== */

const TOTAL_ACHIEVEMENTS = 8;
let unlockedCount = 5;
const TOAST_DURATION = 3000;


/* ===================== MAIN LOGIC ===================== */

function unlockAchievement(key, title, imgSrc, description = "") {
  const hidden = document.getElementById("hidden-" + key);
  if (!hidden) return;

  const isLast = unlockedCount + 1 === TOTAL_ACHIEVEMENTS;

  moveToUnlocked(title, imgSrc, description);
  hidden.remove();

  unlockedCount++;
  updateProgress();

  showAchievementToast(title, imgSrc);

  if (isLast) {
    setTimeout(() => {
      showCompletionBanner();
    }, TOAST_DURATION + 300);
  }
}


/* ===================== CREATE ACHIEVEMENT ===================== */

function moveToUnlocked(title, imgSrc, description = "") {
  const grid = document.querySelector(".achievements-grid");

  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  const newAchievement = document.createElement("div");
  newAchievement.classList.add("achievement");

  newAchievement.innerHTML = `
    <img src="${imgSrc}" />

    <div class="tooltip">
      <div class="tooltip-top">
        <img src="${imgSrc}" />
        <div>
          <h4>${title}</h4>
          <p>${description}</p>
        </div>
      </div>

      <div class="tooltip-bottom">
        <p>Unlocked ${date}</p>
      </div>
    </div>
  `;

  newAchievement.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".achievement").forEach(a => {
      if (a !== newAchievement) a.classList.remove("active");
    });
    newAchievement.classList.toggle("active");
  });

  grid.appendChild(newAchievement);
}


/* ===================== PROGRESS ===================== */

function updateProgress() {
  const text = document.querySelector(".progress span");
  const fill = document.querySelector(".fill");
  const hiddenSection = document.getElementById("hiddenSection");

  const percent = Math.round((unlockedCount / TOTAL_ACHIEVEMENTS) * 100);

  text.textContent = `Achievements unlocked: ${unlockedCount}/${TOTAL_ACHIEVEMENTS} (${percent}%)`;
  fill.style.width = percent + "%";

  if (unlockedCount === TOTAL_ACHIEVEMENTS) {
    if (hiddenSection) hiddenSection.remove();
  }
}


/* ===================== TOAST ===================== */

function showAchievementToast(title, img) {
  const toast = document.getElementById("achievementToast");
  if (!toast) return;

  toast.innerHTML = `
    <img src="${img}">
    <div class="toast-text">
      <span class="toast-label">Achievement unlocked</span>
      <span class="toast-title">${title}</span>
    </div>
  `;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, TOAST_DURATION);
}


/* ===================== EVENTS ===================== */

closeModal.addEventListener("click", () => {
  unlockAchievement(
    "latte",
    "Oh nice Tulip 🌷",
    "./Images/arte-latte/foto2.png",
    "Look at the latte art"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const viewBtn = document.getElementById("viewProjectsBtn");

  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      unlockAchievement(
        "projects",
        "Get straight to the point 🎯",
        "./Images/reloj.jpg",
        "Jump straight to the projects"
      );
    });
  }
});

document.addEventListener("click", () => {
  document.querySelectorAll(".achievement").forEach(a => {
    a.classList.remove("active");
  });
});


/* ===================== COMPLETION ===================== */

function showCompletionBanner() {
  const banner = document.getElementById("completionBanner");
  if (!banner) return;

  banner.innerHTML = `
    <span>🏆 You've unlocked all achievements (${TOTAL_ACHIEVEMENTS}/${TOTAL_ACHIEVEMENTS})</span>
  `;

  banner.classList.add("show");

  setTimeout(() => {
    banner.classList.remove("show");
  }, 5000);
}