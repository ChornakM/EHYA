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

burgerReceive.addEventListener("click", (e) => {
  mail.classList.toggle("openmail");
  body.classList.toggle("lock");
});

ourPortfolio.addEventListener("click", () => {
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});

burgersMenu.addEventListener("click", (e) => {
  const liMo = e.target.closest(".burger-menu-ul");
  const content = e.target.firstChild.textContent.trim();
  if (liMo && content === "Лэндинги") {
    dropdownMobs.classList.toggle("dropdownmobAs");
  }
});

burgersMenu.addEventListener("click", (e) => {
  const liMo = e.target.closest(".burger-menu-ul");
  const content = e.target.firstChild.textContent.trim();
  if (liMo && content === "Страницы") {
    dropdownMob.classList.toggle("dropdownmobA");
  }

  if (e.target.closest(".drop-down-item")) {
    dropdownMob.classList.remove("dropdownmobA");
  }
});

navMenu.addEventListener("click", (e) => {
  const liM = e.target.closest(".button-mobile-hidden");
  const content = e.target.firstChild.textContent.trim();
  console.log(content);
  if (liM && content === "Страницы") {
    dropdownsMob.classList.toggle("dropdownactive");
  }

  if (e.target.closest(".drop-down-item")) {
    dropdownsMob.classList.remove("dropdownactive");
  }
});

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

navMenu.addEventListener("click", (e) => {
  const lii = e.target.closest(".button-mobile-hidden");
  const content = e.target.firstChild.textContent.trim();
  if (lii && content === "Лэндинги") {
    dropdowns.classList.toggle("dropdowsnactive");
  }

  if (e.target.closest(".drop-down-item")) {
    dropdowns.classList.remove("dropdowsnactive");
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

const feedbackSlider = {
  sliderClass: ".feedback-sliders",
  slidesClass: ".feedback-card",
  leftArrowClass: ".feedback-button-left",
  rightArrowClass: ".feedback-button-right",
  sizeL: 2,
  sizeM: 1,
};

const runFeedbackSlider = (sliderSettings) => {
  const {
    sliderClass,
    slidesClass,
    leftArrowClass,
    rightArrowClass,
  } = sliderSettings;

  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slidesClass);
  const leftArrow = document.querySelector(leftArrowClass);
  const rightArrow = document.querySelector(rightArrowClass);
  const slidesAmount = slides.length;
  let slideIndex = 0;

  leftArrow.style.display = "none";

  const slidesToShow = ({ sizeL, sizeM }) => {
    let showSlides;
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 768) showSlides = sizeL;
    if (windowWidth <= 768) showSlides = sizeM;

    return +showSlides;
  };

  const showDefaultNumberSlides = (slides) => {
    slides.forEach((slide, index) => {
      index > slidesToShow(sliderSettings) - 1
        ? (slide.style.display = "none")
        : (slide.style.display = "block");
    });
  };

  window.addEventListener("resize", () => {
    leftArrow.style.display = "none";
    rightArrow.style.display = "";

    slideIndex = 0;
    showDefaultNumberSlides(slides);
    console.log(document.documentElement.clientWidth);
  });

  showDefaultNumberSlides(slides);

  const sliderLimitations = (slide, mode) => {
    const maxSlideIndex = slidesAmount - slidesToShow(sliderSettings);

    if (slide <= 0) {
      leftArrow.style.display = "none";
      slideIndex = 0;
    } else {
      leftArrow.style.display = "";
    }

    if (slide >= maxSlideIndex) {
      rightArrow.style.display = "none";
      slideIndex = maxSlideIndex;
    } else {
      rightArrow.style.display = "";
    }
  };

  const switchSlide = (slideIndex) => {
    slides.forEach((slide) => (slide.style.display = "none"));
    const firstSlideIndex = 0 + slideIndex;
    const lastSlideIndex = firstSlideIndex + slidesToShow(sliderSettings) - 1;

    slides.forEach((slide, index) => {
      if (index >= firstSlideIndex && index <= lastSlideIndex) {
        slide.style.display = "block";
      }
    });
  };

  slider.addEventListener("click", ({ target }) => {
    if (target.closest(leftArrowClass)) {
      slideIndex--;
      sliderLimitations(slideIndex);
      console.log(slideIndex);
      switchSlide(slideIndex);
    }

    if (target.closest(rightArrowClass)) {
      slideIndex++;
      sliderLimitations(slideIndex);
      console.log(slideIndex);
      switchSlide(slideIndex);
    }
  });
};
runFeedbackSlider(feedbackSlider);

// @ Slides to show:
// l > 860px; windoWidth = 981
// m > 560px and m <= 960px; windowWidth = 603
// s > 300px and m <= 560px;
const portfolioSlider = {
  sliderClass: ".portfolio-slider",
  slidesClass: ".portfolio-slider-section",
  leftArrowClass: ".portfolio-button-left",
  rightArrowClass: ".portfolio-button-right",
  sizeL: 3,
  sizeM: 2,
  sizeS: 1,
};

const runSlider = (sliderSettings) => {
  const {
    sliderClass,
    slidesClass,
    leftArrowClass,
    rightArrowClass,
  } = sliderSettings;

  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slidesClass);
  const leftArrow = document.querySelector(leftArrowClass);
  const rightArrow = document.querySelector(rightArrowClass);
  const slidesAmount = slides.length;
  let slideIndex = 0;

  const slidesToShow = ({ sizeL, sizeM, sizeS }) => {
    let showSlides;
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 980) showSlides = sizeL;

    if (windowWidth > 560 && windowWidth <= 980) showSlides = sizeM;
    if (windowWidth > 300 && windowWidth <= 560) showSlides = slidesAmount;

    return +showSlides;
  };

  const showDefaultNumberSlides = (slides) => {
    slides.forEach((slide, index) => {
      index > slidesToShow(sliderSettings) - 1
        ? (slide.style.display = "none")
        : (slide.style.display = "block");
    });
  };

  window.addEventListener("resize", () => {
    rightArrow.disabled = false;
    slideIndex = 0;
    showDefaultNumberSlides(slides);
    console.log(document.documentElement.clientWidth);
  });

  showDefaultNumberSlides(slides);

  const sliderLimitations = (slide, mode) => {
    const maxSlideIndex = slidesAmount - slidesToShow(sliderSettings);

    if (slide <= 0) {
      leftArrow.disabled = true;
      slideIndex = 0;
    } else {
      leftArrow.disabled = false;
    }

    if (slide >= maxSlideIndex) {
      rightArrow.disabled = true;
      slideIndex = maxSlideIndex;
    } else {
      rightArrow.disabled = false;
    }
  };

  const switchSlide = (slideIndex) => {
    slides.forEach((slide) => (slide.style.display = "none"));
    const firstSlideIndex = 0 + slideIndex;
    const lastSlideIndex = firstSlideIndex + slidesToShow(sliderSettings) - 1;

    slides.forEach((slide, index) => {
      if (index >= firstSlideIndex && index <= lastSlideIndex) {
        slide.style.display = "block";
      }
    });
  };

  slider.addEventListener("click", ({ target }) => {
    if (target.closest(leftArrowClass)) {
      slideIndex--;
      sliderLimitations(slideIndex);
      console.log(slideIndex);
      switchSlide(slideIndex);
    }

    if (target.closest(rightArrowClass)) {
      slideIndex++;
      sliderLimitations(slideIndex);
      console.log(slideIndex);
      switchSlide(slideIndex);
    }
  });
};

runSlider(portfolioSlider);
