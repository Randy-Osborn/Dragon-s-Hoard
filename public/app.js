const initButton = document.getElementById("Initiative");
const theResultSpan = document.getElementById("Result");
const aboutButton = document.getElementById("About");
aboutButton.addEventListener("click", () => {
  window.location = "about.html";
});
initButton.addEventListener("click", () => {
  const rNum = Math.floor(Math.random() * 20) + 1;
  theResultSpan.textContent = rNum;
  console.log(rNum);
});
