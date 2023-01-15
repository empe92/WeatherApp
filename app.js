let weather = {
  apiKey: "1808cc01766e43e2bc5172218230901",
  
  fetchWeather: function (city) {
    fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=" + this.apiKey + "&q=" + city + "&days=7&aqi=no&alerts=no"
    )
    .then ((response) => response.json())
    .then((data) => this.displayWeather(data));
  }, 
  displayWeather: function(data) {
    const { name, country, localtime } = data.location;
    const { temp_c, humidity, wind_kph } = data.current;
    const { text, icon } = data.current.condition;
    const { date } = data.forecast.forecastday[0];
    const { maxtemp_c, mintemp_c } = data.forecast.forecastday[0].day;
    const { time } = data.forecast.forecastday[0].hour[0];
    
    const morningTemp = data.forecast.forecastday[0].hour[6].temp_c;
    const dayTemp = data.forecast.forecastday[0].hour[12].temp_c;
    const eveningTemp = data.forecast.forecastday[0].hour[18].temp_c;
    const nightTemp = data.forecast.forecastday[1].hour[0].temp_c;
   
    const morningIcon = data.forecast.forecastday[0].hour[6].condition.icon;
    const dayIcon = data.forecast.forecastday[0].hour[12].condition.icon;
    const eveningIcon = data.forecast.forecastday[0].hour[18].condition.icon;
    const nightIcon = data.forecast.forecastday[1].hour[0].condition.icon;


    console.log(name, country, localtime, temp_c, humidity, wind_kph, text, icon,
    date, maxtemp_c, mintemp_c, time, morningTemp, dayTemp, eveningTemp, nightTemp,
    morningIcon, dayIcon, eveningIcon, nightIcon);
    
    document.querySelector(".cityClass").innerText = name + " - ";
    document.querySelector(".countryClass").innerText = " " + country;
    document.querySelector(".localtimeClass").innerText = localtime;
    document.querySelector(".tempClass").innerText = temp_c + "°C";
    document.querySelector(".humidityClass").innerText = "Humidity - " + humidity + "%";
    document.querySelector(".windSpeedClass").innerText = "Wind speed - " + wind_kph + " km/h";
    document.querySelector(".cloudinessClass").innerText = text;
    document.querySelector(".iconClass").src = "https:" + icon;
    
    document.querySelector(".morningClass").innerText = morningTemp + "°C";
    document.querySelector(".dayClass").innerText = dayTemp + "°C";
    document.querySelector(".eveningClass").innerText = eveningTemp + "°C";
    document.querySelector(".nightClass").innerText = nightTemp + "°C";
    
    document.querySelector(".morningIconClass").src = "https:" + morningIcon;
    document.querySelector(".dayIconClass").src = "https:" + dayIcon;
    document.querySelector(".eveningIconClass").src = "https:" + eveningIcon;
    document.querySelector(".nightIconClass").src = "https:" + nightIcon;

    for (let i = 0; i <= 6; i++) {
      let weekDate = ["#day1date", "#day2date","#day3date","#day4date","#day5date","#day6date","#day7date"];
      let weekMaxTemp = ["#day1MaxTemp", "#day2MaxTemp", "#day3MaxTemp", "#day4MaxTemp", "#day5MaxTemp", "#day6MaxTemp", "#day7MaxTemp"];
      let weekMinTemp = ["#day1MinTemp", "#day2MinTemp", "#day3MinTemp", "#day4MinTemp", "#day5MinTemp", "#day6MinTemp", "#day7MinTemp"];
      let weekIcon = ["#day1Icon", "#day2Icon", "#day3Icon", "#day4Icon", "#day5Icon", "#day6Icon", "#day7Icon"];

      document.querySelector(weekDate[i]).innerText = data.forecast.forecastday[i].date;
      document.querySelector(weekMaxTemp[i]).innerText = data.forecast.forecastday[i].day.maxtemp_c + "°C";
      document.querySelector(weekMinTemp[i]).innerText = data.forecast.forecastday[i].day.mintemp_c + "°C";
      document.querySelector(weekIcon[i]).src = "https:" + data.forecast.forecastday[i].day.condition.icon;
    };





  },
  search: function () {
    this.fetchWeather(document.querySelector("#citySearch").value);
  }

  

  
    
};

document.querySelector("#searchBtn").addEventListener("click", function (){
  weather.search();
});

const btn3 = document.querySelector("#changeBtn");
const weekForecastDiv = document.querySelector("#weekForecast");

btn3.addEventListener("click", function (){
  weekForecastDiv.style.display = "flex";

})

document
.querySelector("#searchBtn")
.querySelector("keypress", function(event){
  if (event.key == "Enter") {
    
  }
});



weather.fetchWeather("Warsaw");
