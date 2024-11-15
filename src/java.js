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

  let emojiElement = document.querySelector(".emoji");
  let emoji = `<img src="${response.data.condition.icon_url}">`;
  emojiElement.innerHTML = emoji;

  getForecast(response.data.city);
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

function getForecast(city) {
  let key = "44f7a844ccaae8fbao1218t90975e873";
  let api = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
  axios.get(api).then(forecastShow);
}

function forecastShow(response) {
  console.log(response.data);

  let forecast = document.querySelector(".forecast");
  let days = ["fri", "sat", "sun", "mon", "tue"];
  forecastElement = "";
  days.forEach(function (day) {
    forecastElement += `<div class="forecast-each">
      <div class="forecast-day">${day}</div>
      <div class="forecast-icon">☁</div>
      <div class="forecast-temps">
        <div class="temp-max">19°</div>
        <div class="temp-min">15°</div>
      </div>
      </div>`;
  });
  forecast.innerHTML = forecastElement;
}

