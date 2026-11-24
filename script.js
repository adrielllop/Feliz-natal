const loader = document.getElementById("loader");
const site = document.getElementById("site");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const santa = document.getElementById("santa");

let value = 0;
const loadTimer = setInterval(() => {
  value = Math.min(100, value + (value < 65 ? 2 : 1));
  progress.style.width = value + "%";
  percent.textContent = value + "%";
  santa.style.left = value + "%";
  if (value >= 100) {
    clearInterval(loadTimer);
    setTimeout(() => {
      loader.classList.add("done");
      site.classList.add("visible");
    }, 450);
  }
}, 42);

const modal = document.getElementById("modal");
const openModal = () => { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); };
const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
document.getElementById("surpriseBtn").addEventListener("click", openModal);
document.getElementById("modalX").addEventListener("click", closeModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });