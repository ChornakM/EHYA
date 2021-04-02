const feedbackSlider = {
   sliderClass: ".feedback-sliders",
   slidesClass: ".feedback-card",
   leftArrowClass: ".feedback-button-left",
   rightArrowClass: ".feedback-button-right",
   sizeL: 2,
   sizeM: 1
}


const runFeedbackSlider = (sliderSettings) => {
   const {
      sliderClass,
      slidesClass,
      leftArrowClass,
      rightArrowClass,
   } = sliderSettings

   const slider = document.querySelector(sliderClass)
   const slides = document.querySelectorAll(slidesClass)
   const leftArrow = document.querySelector(leftArrowClass)
   const rightArrow = document.querySelector(rightArrowClass)
   const slidesAmount = slides.length
   let slideIndex = 0;

   leftArrow.style.display = "none"

   const slidesToShow = ({
      sizeL,
      sizeM
   }) => {
      let showSlides;
      const windowWidth = document.documentElement.clientWidth

      if (windowWidth > 540) showSlides = sizeL
      if (windowWidth <= 540) showSlides = sizeM

      return +showSlides
   }

   const showDefaultNumberSlides = (slides) => {
      slides.forEach((slide, index) => {
         index > slidesToShow(sliderSettings) - 1 ?
            slide.style.display = "none" :
            slide.style.display = "block"
      })
   }

   window.addEventListener("resize", () => {
      leftArrow.style.display = "none"
      slideIndex = 0
      showDefaultNumberSlides(slides)
      console.log(document.documentElement.clientWidth)
   });

   showDefaultNumberSlides(slides)


   const sliderLimitations = (slide, mode) => {
      const maxSlideIndex = slidesAmount - slidesToShow(sliderSettings)

      if (slide <= 0) {
         leftArrow.style.display = "none"
         slideIndex = 0
      } else {
         leftArrow.style.display = ""
      }

      if (slide >= maxSlideIndex) {
         rightArrow.style.display = "none"
         slideIndex = maxSlideIndex
      } else {
         rightArrow.style.display = ""
      }
   }

   const switchSlide = (slideIndex) => {
      slides.forEach((slide) => (slide.style.display = "none"));
      const firstSlideIndex = 0 + slideIndex
      const lastSlideIndex = firstSlideIndex + slidesToShow(sliderSettings) - 1

      slides.forEach((slide, index) => {

         if (index >= firstSlideIndex && index <= lastSlideIndex) {
            slide.style.display = "block";
         }
      });
   };

   slider.addEventListener("click", ({
      target
   }) => {
      if (target.closest(leftArrowClass)) {
         slideIndex--;
         sliderLimitations(slideIndex)
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
}
runFeedbackSlider(feedbackSlider)
