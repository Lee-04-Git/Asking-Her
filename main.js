const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function moveNoButton() {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
}

// Desktop: move on hover
btnNo.addEventListener("mouseover", (event) => {
  moveNoButton();
});

// Mobile: move on click
btnNo.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

btnYes.addEventListener("click", (e) => {
  const headerImg = document.getElementById("headerImg");
  const btnRestart = document.querySelector(".btn-restart");

  // Fade out the header image
  headerImg.style.opacity = "0";

  // After fade out, change the image and fade in
  setTimeout(() => {
    headerImg.src = "assets/I-knew-you-d-say-yes-Raven-09-11-2025.png";
    headerImg.alt = "I knew you'd say yes!";
    headerImg.style.opacity = "1";
  }, 500);

  btnNo.classList.add("hide");
  btnYes.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");

  // Show restart button after a delay
  setTimeout(() => {
    btnRestart.classList.remove("hide");
  }, 1000);
});

// Restart button functionality
const btnRestart = document.querySelector(".btn-restart");
btnRestart.addEventListener("click", () => {
  const headerImg = document.getElementById("headerImg");

  // Fade out header
  headerImg.style.opacity = "0";

  // Reset everything
  setTimeout(() => {
    headerImg.src = "assets/Will-You-Play-Roblox-With-Me-09-11-2025.png";
    headerImg.alt = "Will you play?";
    headerImg.style.opacity = "1";

    btnYes.classList.remove("hide");
    btnNo.classList.remove("hide");
    btnRestart.classList.add("hide");
    imageOne.classList.remove("hide");
    imageTwo.classList.add("hide");

    // Reset button positions
    btnNo.style.top = "calc(100% - 5rem)";
    btnNo.style.left = "calc(50% + 1rem)";
  }, 500);
});
