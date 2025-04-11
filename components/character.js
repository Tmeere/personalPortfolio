const character = document.getElementById('character');
const box = document.getElementById('box');
const info = document.getElementById('info');

let isJumping = false;
let position = 50;

// Move character with arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    position += 10;
    character.style.left = position + 'px';
  } else if (event.key === 'ArrowLeft') {
    position -= 10;
    character.style.left = position + 'px';
  } else if (event.key === 'ArrowUp' && !isJumping) {
    jump();
  }

  checkCollision();
});

// Jump function
function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    let bottom = parseInt(window.getComputedStyle(character).bottom);
    if (bottom >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (bottom <= 50) {
          clearInterval(downInterval);
          isJumping = false;
        }
        bottom -= 5;
        character.style.bottom = bottom + 'px';
      }, 20);
    }
    bottom += 5;
    character.style.bottom = bottom + 'px';
  }, 20);
}

// Check collision with the box
function checkCollision() {
  const characterRect = character.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  if (
    characterRect.right > boxRect.left &&
    characterRect.left < boxRect.right &&
    characterRect.bottom > boxRect.top &&
    characterRect.top < boxRect.bottom
  ) {
    showInfo(box.dataset.info);
  } else {
    hideInfo();
  }
}

// Show information
function showInfo(message) {
  info.textContent = message;
  info.style.display = 'block';
}

// Hide information
function hideInfo() {
  info.style.display = 'none';
}