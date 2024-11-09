function showcity(event) {
  event.preventDefault();
  let cityElement = document.querySelector(".search-box");
  let city = document.querySelector("h2");
  city.innerHTML = cityElement.value;
  api(cityElement.value);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", showcity);

function api(city) {
  let key = "44f7a844ccaae8fbao1218t90975e873";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

  axios.get(url).then(tempChange);
}

function tempChange(response) {
  let tempElement = document.querySelector("#temprature");
  let temp = response.data.temperature.current;
  tempElement.innerHTML = Math.round(temp);
  let descElement = document.querySelector("#description");
  let desc = response.data.condition.description;
  descElement.innerHTML = desc;
  let humidElement = document.querySelector("#Humidity");
  let humidity = response.data.temperature.humidity;
  humidElement.innerHTML = humidity;
  let windElement = document.querySelector("#Wind");
  let wind = response.data.wind.speed;
  windElement.innerHTML = wind;
}

let now = new Date();
let min = now.getMinutes();
let hr = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = document.querySelector(".time");
time.innerHTML = `${day} ${hr}:${min}`;
