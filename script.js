const modal = document.getElementById("wishModal");
const openButton = document.getElementById("wishButton");
const closeButton = document.getElementById("closeModal");
const closeWish = document.getElementById("closeWish");

function openWish() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}
function closeWishModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
openButton.addEventListener("click", openWish);
closeButton.addEventListener("click", closeWishModal);
closeWish.addEventListener("click", closeWishModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeWishModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWishModal();
});