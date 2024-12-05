document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelector(".testimonials");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  // Function to calculate the width of a single card including gap dynamically
  const calculateCardWidth = () => {
      const cardStyle = getComputedStyle(cards[0]);
      const cardMarginRight = parseInt(cardStyle.marginRight);
      return cards[0].offsetWidth + cardMarginRight;
  };

  function updateSlides() {
      const cardWidth = calculateCardWidth();
      const offset = -currentIndex * cardWidth;
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

  // Resize event to handle dynamic card widths (e.g., on window resize)
  window.addEventListener("resize", updateSlides);
});
