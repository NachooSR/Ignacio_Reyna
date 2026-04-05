/* ===================== INTRO ===================== */

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {
  intro.style.display = "none";
};


/* ===================== NAVBAR / SIDEBAR ===================== */

function showSideBar() {
  event.preventDefault();
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.display = 'flex';
}

function hideSideBar() {
  event.preventDefault();
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.display = 'none';
}

function hideSideBarAndRedirect() {
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.display = 'none';
}


/* ===================== ABOUT ME (ACHIEVEMENTS) ===================== */

document.querySelectorAll('.achievement').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();

    document.querySelectorAll('.achievement').forEach(a => {
      if (a !== el) a.classList.remove('active');
    });

    el.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.achievement').forEach(a => {
    a.classList.remove('active');
  });
});


/* ===================== SKILLS (MODAL) ===================== */

const coffeeBtn = document.getElementById("coffeeBtn");
const modal = document.getElementById("coffeeModal");
const closeModal = document.getElementById("closeModal");

coffeeBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


/* ===================== COPY EMAIL ===================== */

const btn_copy = document.getElementById("copyEmail");
const email = document.getElementById("emailText").innerText;

btn_copy.addEventListener("click", () => {
  navigator.clipboard.writeText(email);

  btn_copy.innerHTML = '<i class="fas fa-check"></i>';

  setTimeout(() => {
    btn_copy.innerHTML = '<i class="fas fa-copy"></i>';
  }, 1500);
});


/* ===================== EMAILJS INIT ===================== */

(function () {
  emailjs.init("FSWlwAo4Ngnioa5gp");
})();


/* ===================== TOAST ===================== */

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const text = document.getElementById("toastText");
  const progress = toast.querySelector(".toast-progress");

  text.textContent = message;

  toast.classList.remove("success", "error");
  toast.classList.add(type, "show");

  progress.style.animation = "none";
  progress.offsetHeight;
  progress.style.animation = "progress 3s linear forwards";

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


/* ===================== CONTACT FORM ===================== */

const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.classList.add("loading");
  btn.disabled = true;

  const timeout = setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;
    showToast("The request took too long ⏳", "error");
  }, 5000);

  emailjs
    .sendForm("service_portfolio", "template_0zbf6cg", this)
    .then(() => {
      clearTimeout(timeout);

      showToast("Message sent 🚀", "success");

      unlockAchievement(
        "mail",
        "We are in contact 📩",
        "./Images/hands.png",
        "Sent an email"
      );

      form.reset();
    })
    .catch((error) => {
      clearTimeout(timeout);

      showToast("Failed to send ❌", "error");
      console.log(error);
    })
    .finally(() => {
      btn.classList.remove("loading");
      btn.disabled = false;
    });
});