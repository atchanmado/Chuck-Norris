const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#generate");
btn.addEventListener("click", getQuote);
function getQuote() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((response) => {
      quote.textContent = response.value;
    });
}
getQuote();
