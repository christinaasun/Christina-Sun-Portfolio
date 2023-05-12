const audio = new Audio(mixkit-air-woosh-1489.wav);
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});