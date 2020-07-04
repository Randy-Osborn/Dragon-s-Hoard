const itemResult = document.getElementById("itemResult");
const initButton = document.getElementById("Initiative");
const theResultSpan = document.getElementById("Result");
const aboutButton = document.getElementById("About");
const searchButton = document.getElementById("search");
//aboutButton.addEventListener("click", () => {
//  window.location = "about.html";
//});
// initButton.addEventListener("click", () => {
//   const rNum = Math.floor(Math.random() * 20) + 1;
//   theResultSpan.textContent = rNum;
//   console.log(rNum);
// });
searchButton.addEventListener("click", () => {
  const itemInput = document.getElementById("item").value;
  const inputString = "https://www.dnd5eapi.co/api/equipment/" + itemInput;
  console.log("fetching: " + inputString);
  fetch(inputString).then((result) => {
    result.json().then((data) => {
      const table = document.createElement("table");
      const itemNameRow = document.createElement("tr");
      const nameLabel = document.createElement("td");
      const nameValue = document.createElement("td");
      table.appendChild(itemNameRow);
      itemNameRow.appendChild(nameLabel);
      itemNameRow.appendChild(nameValue);
      nameLabel.textContent = "Name: ";
      nameValue.textContent = data.name;
      itemResult.appendChild(table);
      console.log(data);
    });
  });
});
