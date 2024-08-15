function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-Input");
  let city = document.querySelector("#city-name");
  city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
