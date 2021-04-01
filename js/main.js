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

const slider = document.querySelector(".feedback-slider");
const slides = document.querySelectorAll(".feedback-card");
const leftArrow = document.querySelector(".feedback-button-left");
const rightArrow = document.querySelector(".feedback-button-right");
const arrowsContainer = document.querySelector(".feedback-sliders");

let slideNumber = 0;
leftArrow.style.display = "none";

slides.forEach((slide, index) => {
  if (index > 1) {
    slide.style.display = "none";
  }
});

const switchSlide = (showSlides, slide) => {
  if (slide <= 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "";
  }

  let numbSlides = showSlides == 1 ? 3 : 2;
  console.log(numbSlides);
  if (slide >= numbSlides) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "";
  }

  const slideNumber = slide;

  slides.forEach((slide) => (slide.style.display = "none"));

  slides.forEach((slide, index) => {
    if (showSlides == 2) {
      if (index >= slideNumber && index <= slideNumber + 1) {
        slide.style.display = "block";
      }
    }
    if (showSlides == 1) {
      if (index == slideNumber) {
        slide.style.display = "block";
      }
    }
  });
};

arrowsContainer.addEventListener("click", ({ target }) => {
  let showSlides;
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 560) {
    showSlides = 2;
  } else if (windowWidth > 300 && windowWidth <= 560) {
    showSlides = 1;
  }

  if (target.closest(".feedback-button-left")) {
    slideNumber--;
    switchSlide(showSlides, slideNumber);
  }

  if (target.closest(".feedback-button-right")) {
    slideNumber++;
    switchSlide(showSlides, slideNumber);
  }
});

const sliderPortfolio = document.querySelector(".portfolio-slider");
const slidesPortfolio = document.querySelectorAll(".portfolio-slider-section");
const leftArrowPortfolio = document.querySelector(".portfolio-button-left");
const rightArrowPortfolio = document.querySelector(".portfolio-button-right");

let slideNumberPortfolio = 0;
leftArrow.disabled = true;

slidesPortfolio.forEach((slide, index) => {
  if (index > 2) {
    slide.style.display = "none";
  }
});

const switchSlidePortfolio = (showSlides, slide) => {
  if (slide <= 0) {
    leftArrowPortfolio.disabled = true;
  } else {
    leftArrowPortfolio.disabled = false;
  }

  let numbSlides = showSlides == 1 ? 3 : 2;
  console.log(numbSlides);
  if (slide >= numbSlides) {
    rightArrowPortfolio.disabled = true;
  } else {
    rightArrowPortfolio.disabled = false;
  }

  const slideNumber = slide;

  slidesPortfolio.forEach((slide) => (slide.style.display = "none"));

  slidesPortfolio.forEach((slide, index) => {
    if (showSlides == 2) {
      if (index >= slideNumber && index <= slideNumber + 1) {
        slide.style.display = "block";
      }
    }
    if (showSlides == 1) {
      if (index == slideNumber) {
        slide.style.display = "block";
      }
    }
  });
};

const numofSlides = () => {
  let showSlides;
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 960) {
    showSlides = 3;
  }
  if (windowWidth > 560 && windowWidth <= 960) {
    showSlides = 2;
  } else if (windowWidth > 300 && windowWidth <= 560) {
    showSlides = 1;
  }
  return showSlides;
};
sliderPortfolio.addEventListener("click", ({ target }) => {
  const showSlides = numofSlides();

  if (target.closest(".feedback-button-left")) {
    slideNumberPortfolio--;
    switchSlide(showSlides, slideNumber);
  }

  if (target.closest(".feedback-button-right")) {
    slideNumberPortfolio++;
    switchSlide(showSlides, slideNumber);
  }
});

const defaultSlides = () => {
  slidesPortfolio.forEach((slide, index) => {
    slide.style.display = "none";
  });
  const showSlides = numofSlides;
  slidesPortfolio.forEach((slide, index) =>
    index < showSlides
      ? (slide.style.display = "block")
      : (slide.style.display = "none")
  );
};

(function () {
  window.addEventListener("resize", () => {
    defaultSlides();
  });
})();
