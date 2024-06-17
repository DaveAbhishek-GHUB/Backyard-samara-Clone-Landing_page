
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});


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
var swiper2 = new Swiper(".second-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener("DOMContentLoaded", function() {
  let maxZIndex = 10;
  let previousElements = [];

  const colorBoxMap = {
    "color-box-420-1": ["white-420sqft", "540-bonewhite", "690-bonewhite", "800-bonewhite"],
    "color-box-420-2": ["driftwood-420sqft", "540-driftwood", "690-driftwood", "800-driftwood"],
    "color-box-420-3": ["parchment-420sqft", "540-parchment", "690-parchment", "800-parchment"],
    "color-box-420-4": ["evergreen-420sqft", "540-evergreen", "690-evergreen", "800-evergreen"],
    "color-box-420-5": ["darkbronze-420sqft", "540-darkbronze", "690-darkbronze", "800-darkbronze"]
};

  function setZIndexForIds(ids) {
      previousElements.forEach(element => {
          element.style.zIndex = "";
      });

      previousElements = [];

      ids.forEach(imgId => {
          const targetElement = document.getElementById(imgId);
          if (targetElement) {
              targetElement.style.zIndex = maxZIndex;
              previousElements.push(targetElement);
          }
      });
  }

  for (const [colorBoxClass, imgIds] of Object.entries(colorBoxMap)) {
      const colorBox = document.querySelector(`.${colorBoxClass}`);
      
      colorBox.addEventListener("click", function() {
          setZIndexForIds(imgIds);
      });
  }

  const nextButton = document.querySelector('.swiper-button-next');
  const prevButton = document.querySelector('.swiper-button-prev');

  if (nextButton) {
      nextButton.addEventListener("click", function() {
          setZIndexForIds(colorBoxMap["color-box-420-1"]);
      });
  }

  if (prevButton) {
      prevButton.addEventListener("click", function() {
          setZIndexForIds(colorBoxMap["color-box-420-1"]);
      });
  }
});

// Define an array of color-box classes and their corresponding p elements
const colorBoxes = [
  { box: "color-box-420-1", text: "p" },
  { box: "color-box-420-2", text: "p" },
  { box: "color-box-420-3", text: "p" },
  { box: "color-box-420-4", text: "p" },
  { box: "color-box-420-5", text: "p" }
];

// Iterate through each color box and add event listeners
colorBoxes.forEach(({ box, text }) => {
  const colorBox = document.querySelector(`.${box}`);
  const textElement = colorBox.querySelector(text);

  colorBox.addEventListener("mouseenter", function() {
      textElement.style.display = "block";
  });

  colorBox.addEventListener("mouseleave", function() {
      textElement.style.display = "none";
  });
});


// page-7-swiper

var swiper = new Swiper(".page-7-swiper", {
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
});
