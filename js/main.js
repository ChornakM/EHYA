const triggerMenu = document.querySelector(".menu-button");
const overlay = document.querySelector(".overlay");
const burgerMenu = document.querySelector(".burger-menu");
const openModal = document.querySelector(".letstalk-button");
const windowModal = document.querySelector(".modal__dialog");
const windowClosse = document.querySelector(".modal__close");
const overlayModal = document.querySelector(".modal__overlay");
const receive = document.querySelector(".button-learn");
const mail = document.querySelector(".modal__mail");
const mailClosses = document.querySelector(".modal__mail--close");
const body = document.querySelector("body");
const partners = document.querySelector(".ourpartners");
const downArrow = document.querySelector(".aboutus-text-down");
const navMenu = document.querySelector(".header-top__buttons");
const dropdown = document.querySelector(".drop-down");

navMenu.addEventListener("click", (e) => {
  const li = e.target.closest(".button-mobile-hidden");
  const content = e.target.firstChild.textContent.trim();
  if (li && content === "Страницы") {
    dropdown.classList.toggle("dropdownactive");
  }
  if (e.target.closest(".drop-down-item")) {
    dropdown.classList.remove("dropdownactive");
  }
});

downArrow.addEventListener("click", () => {
  partners.scrollIntoView({ behavior: "smooth" });
});

triggerMenu.addEventListener("click", (e) => {
  overlay.classList.toggle("active");
  burgerMenu.classList.toggle("active-menu");
  triggerMenu.classList.toggle("active-button");
  body.classList.toggle("lock");
});

openModal.addEventListener("click", (e) => {
  windowModal.classList.toggle("visible");
  overlayModal.classList.toggle("visible");
  body.classList.toggle("lock");
});

windowClosse.addEventListener("click", (e) => {
  windowModal.classList.remove("visible");
  overlayModal.classList.remove("visible");
  document.body.classList.remove("lock");
});

receive.addEventListener("click", (e) => {
  mail.classList.toggle("openmail");
  body.classList.toggle("lock");
});

mailClosses.addEventListener("click", (e) => {
  mail.classList.remove("openmail");
  document.body.classList.remove("lock");
});

overlay.addEventListener("click", (event) => {
  console.log("asgerg");
});
