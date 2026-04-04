///NAVBAR

function showSideBar(){

    //evitar el reload de la pagina
    event.preventDefault();
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='flex'
}

function hideSideBar(){
    event.preventDefault();
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='none'
}

function hideSideBarAndRedirect(){
    
    const sideBar= document.querySelector('.sideBar')
    sideBar.style.display='none'
}


/// About me
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


/// Zona Skills
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

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const text = document.getElementById("toastText");
  const progress = toast.querySelector(".toast-progress");

  text.textContent = message;

  toast.classList.remove("success", "error");
  toast.classList.add(type, "show");

  // reinicia animación
  progress.style.animation = "none";
  progress.offsetHeight;
  progress.style.animation = "progress 3s linear forwards";

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.classList.add("loading");
  btn.disabled = true;

  const timeout = setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;
    showToast("El servicio tardó demasiado ⏳", "error");
  }, 5000);

  emailjs
    .sendForm("service_portfolio", "template_0zbf6cg", this)
    .then(() => {
      clearTimeout(timeout);
      showToast("Mensaje enviado 🚀", "success");
      form.reset();
    })
    .catch((error) => {
      clearTimeout(timeout);
      showToast("Error al enviar ❌", "error");
      console.log(error);
    })
    .finally(() => {
      btn.classList.remove("loading");
      btn.disabled = false;
    });
});