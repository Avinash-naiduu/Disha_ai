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



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
  
    // Toggle the active class for menu visibility
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active");
      }
    });
  });
  


//popup

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openPopupBtn = document.querySelector(".Join-us-btn"); // Adjust this selector if needed
  const closeBtn = document.querySelector(".close-btn");

  if (openPopupBtn) {
    // Open Popup
    openPopupBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  } else {
    console.error("Join Us button not found. Check the class name or ensure it exists.");
  }

  if (closeBtn) {
    // Close Popup
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  } else {
    console.error("Close button not found. Check the class name or ensure it exists.");
  }

  if (popup) {
    // Close Popup on outside click
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  } else {
    console.error("Popup container not found. Check the ID or ensure it exists.");
  }

  const popupForm = document.getElementById("popup-form");
  if (popupForm) {
    // Form Submission
    popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
      popup.style.display = "none";
    });
  } else {
    console.error("Popup form not found. Check the ID or ensure it exists.");
  }
});