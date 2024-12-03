document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelector(".testimonials");
    const cards = document.querySelectorAll(".testimonial-card");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
  
    // Calculate the width of a single card including the gap
    const cardWidth = cards[0].offsetWidth + 20;
  
    function updateSlides() {
      const offset = -currentIndex * cardWidth; // Adjust slide position
      testimonials.style.transform = `translateX(${offset}px)`;
      testimonials.style.transition = "transform 0.5s ease-in-out";
    }
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first card
      }
      updateSlides();
    });
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 1; // Loop back to the last card
      }
      updateSlides();
    });
  });
  