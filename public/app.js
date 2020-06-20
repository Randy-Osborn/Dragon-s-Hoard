const initButton = document.getElementById("Initiative");
const theResultSpan = document.getElementById("Result");

initButton.addEventListener("click", () => {
  const rNum = Math.floor(Math.random() * 20) + 1;
  theResultSpan.textContent = rNum;
  console.log(rNum);
});
