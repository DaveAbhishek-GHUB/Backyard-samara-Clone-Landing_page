
// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });


// 1st swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// 2nd swiper
var swiper2 = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//420sqft

document.addEventListener("DOMContentLoaded", function() {
  let maxZIndex = 10; // Define the maximum z-index value
  let previousElement = null; // To store the previously clicked element

  // Map of color-box classes to their corresponding image IDs
  const colorBoxMap = {
      "color-box-420-1": "white-420sqft",
      "color-box-420-2": "driftwood-420sqft",
      "color-box-420-3": "parchment-420sqft",
      "color-box-420-4": "evergreen-420sqft",
      "color-box-420-5": "darkbronze-420sqft"
  };

  // Iterate through each entry in the colorBoxMap
  for (const [colorBoxClass, imgId] of Object.entries(colorBoxMap)) {
      // Select the color box element
      const colorBox = document.querySelector(`.${colorBoxClass}`);
      
      // Add a click event listener to the selected element
      colorBox.addEventListener("click", function() {
          // Select the target image element using the ID from the map
          const targetElement = document.getElementById(imgId);
          
          // Reset the z-index of the previously clicked element
          if (previousElement) {
              previousElement.style.zIndex = "";
          }

          // Set the z-index of the current element to max
          targetElement.style.zIndex = maxZIndex;

          // Update the previously clicked element
          previousElement = targetElement;
      });
  }
});

const colorbox420_1 = document.querySelector(".color-box-420-1");
const bonewhite420 = colorbox420_1.querySelector("p");

colorbox420_1.addEventListener("mouseenter", function() {
    bonewhite420.style.display = "block";
});

colorbox420_1.addEventListener("mouseleave", function() {
    bonewhite420.style.display = "none";
});
