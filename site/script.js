const title = document.querySelector("#title");
const button = document.querySelector("#changeButton");

button.addEventListener("click", () => {
  title.textContent = "It works!";
});
