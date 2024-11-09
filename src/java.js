function showcity(event) {
  event.preventDefault();
  let cityElement = document.querySelector(".search-box");
  let city = document.querySelector("h2");
  city.innerHTML = cityElement.value;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", showcity);
