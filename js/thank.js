const triggerMenu = document.querySelector(".menu-button");
const overlay = document.querySelector(".overlay");
const burgerMenu = document.querySelector(".burger-menu");
const openModal = document.querySelector(".letstalk-button");
const windowModal = document.querySelector(".modal-dialog");
const windowClosse = document.querySelector(".modal-close");
const overlayModal = document.querySelector(".modal-overlay");
const receive = document.querySelector(".button-learn");
const mail = document.querySelector(".modal-mail");
const mailClosses = document.querySelector(".modal-mail-close");
const body = document.querySelector("body");
const partners = document.querySelector(".ourpartners");
const downArrow = document.querySelector(".aboutus-text-down");
const navMenu = document.querySelector(".header-top-buttons");
const dropdown = document.querySelector(".drop-down");
const dropdowns = document.querySelector(".drop-downs");
const dropdownsMob = document.querySelector(".drop-down-mob");
const burgersMenu = document.querySelector(".burger-menu");
const dropdownMob = document.querySelector(".drop-down-mob");
const dropdownMobs = document.querySelector(".drop-down-mobs");
const ourPortfolio = document.querySelector(".aboutus-text-button");
const portfolioSection = document.querySelector(".portfolio");
const burgerReceive = document.querySelector(".burger-menu-button");
const closeBurger = document.querySelector(".burger-iclose");

navMenu.addEventListener("click", (e) => {
  const liM = e.target.closest(".button-mobile-hidden");
  const content = e.target.firstChild.textContent.trim();
  if (liM && content === "Страницы") {
    dropdownsMob.classList.toggle("dropdownactive");
  }

  if (e.target.closest(".drop-down-item")) {
    dropdownsMob.classList.remove("dropdownactive");
  }
});

triggerMenu.addEventListener("click", (e) => {
  overlay.classList.toggle("active");
  burgerMenu.classList.toggle("active-menu");
  triggerMenu.classList.toggle("active-button");
  body.classList.toggle("lock");
});

closeBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active-menu");
  overlay.classList.remove("active");
  body.classList.remove("lock");
  triggerMenu.classList.remove("active-button");
});

windowClosse.addEventListener("click", (e) => {
  windowModal.classList.remove("visible");
  overlayModal.classList.remove("visible");
  document.body.classList.remove("lock");
});

receive.addEventListener("click", (e) => {
  windowModal.classList.toggle("visible");
  overlayModal.classList.toggle("visible");
  body.classList.toggle("lock");
});

burgerReceive.addEventListener("click", (e) => {
  windowModal.classList.toggle("visible");
  overlayModal.classList.toggle("visible");
  body.classList.toggle("lock");
});
