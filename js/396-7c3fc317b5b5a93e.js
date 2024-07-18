const textsToType = ["Builds Brand", "Engages Viewers", "Educates Customers"];
const typedTextElement = document.getElementById("typed-text");
let textIndex = 0;
let index = 0;

function typeText() {
  if (index < textsToType[textIndex].length) {
    typedTextElement.querySelector("span").textContent +=
      textsToType[textIndex][index];
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed (milliseconds per character)
  } else {
    setTimeout(eraseText, 1000); // Wait for 1 second before erasing
  }
}

function eraseText() {
  const currentText = typedTextElement.querySelector("span").textContent;
  if (currentText.length > 0) {
    typedTextElement.querySelector("span").textContent = currentText.slice(
      0,
      -1
    );
    setTimeout(eraseText, 50); // Adjust the erasing speed (milliseconds per character)
  } else {
    textIndex = (textIndex + 1) % textsToType.length; // Move to the next text
    index = 0; // Reset the index when switching to a new text
    setTimeout(typeText); // Wait for 1 second before typing again
  }
}

// Start the typing animation
typeText();

const imageSources = ["image_1.PNG", "image_4.PNG", "image.PNG"]; // Add more image sources as needed
let currentIndex = 0;

function changeImage() {
  const imageElement = document.getElementById("fir");
  currentIndex = (currentIndex + 1) % imageSources.length;
  imageElement.src = imageSources[currentIndex];
}

setInterval(changeImage, 2000);

const imageSources1 = ["image_2.PNG", "image_5.PNG", "image_6.PNG"]; // Add more image sources as needed
let currentIndex1 = 0;

function changeImage2() {
  const imageElement1 = document.getElementById("sec");
  currentIndex1 = (currentIndex1 + 1) % imageSources1.length;
  imageElement1.src = imageSources1[currentIndex];
}

setInterval(changeImage2, 2000);

const imageSources2 = ["image_3.PNG", "image_7.PNG", "image_5.PNG"]; // Add more image sources as needed
let currentIndex2 = 0;

function changeImage3() {
  const imageElement2 = document.getElementById("thi");
  currentIndex2 = (currentIndex2 + 1) % imageSources2.length;
  imageElement2.src = imageSources2[currentIndex];
}

setInterval(changeImage3, 2000);

function toggleContent(svgElement) {
    // Get the parent 'firr' div of the clicked SVG
    var firrDiv = svgElement.closest(".firr");
  
    // Find the 'additional-content' div within the parent 'firr' div
    var additionalContent = firrDiv.querySelector(".additional-content");
  
    // Toggle the 'display' property of the additional content
    additionalContent.style.display =
      additionalContent.style.display === "none" ? "block" : "none";
  
    // Toggle the height of the 'firr' div
    firrDiv.style.height = firrDiv.style.height === "auto" ? "60px" : "auto";
  }

function toggleContentt(svgElement) {
    // Get the parent 'firr' div of the clicked SVG
    var firrDiv = svgElement.closest("#full");
  
    // Find the 'additional-content' div within the parent 'firr' div
    var additionalContent = firrDiv.querySelector(".additional-content");
  
    // Toggle the 'display' property of the additional content
    additionalContent.style.display =
      additionalContent.style.display === "none" ? "block" : "none";
  
    // Toggle the height of the 'firr' div
    firrDiv.style.height = firrDiv.style.height === "auto" ? "90px" : "auto";
  }

  document.getElementById("dropdownButton").addEventListener("click", function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("active");
  });
  
  // Check if the screen width is less than a certain threshold (e.g., 768 pixels for typical mobile devices)
  function isMobile() {
    return window.innerWidth < 800;
  }
  
  // Toggle the dropdown only on mobile devices
  window.addEventListener("resize", function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (isMobile()) {
      dropdownContent.classList.remove("active");
    }
  });
  