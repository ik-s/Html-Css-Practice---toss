const arrowD = document.querySelector(".down-arrow");

let isDown = true;
let isVisible = true;
let moveCount = 0;

function animate() {
  setInterval(() => {
    // 아래로/위로 움직임
    arrowD.style.transform = isDown ? "translateY(50px)" : "translateY(0)";
    isDown = !isDown;

    moveCount++;

    // 2n번 움직였을 때 (즉, 아래-위 1 cycle 완료마다)
    if (moveCount % 4 === 0) {
      isVisible = !isVisible;
      arrowD.style.opacity = isVisible ? "1" : "0";
    }
  }, 1000); // 0.5초 간격으로 위/아래
}

animate();