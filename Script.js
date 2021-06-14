document.querySelector('#searchBtn').addEventListener('click', eventhandler)

function eventhandler(event){
    
    event.preventDefault();
    var    city = event.target.previousSibling.previousSibling.value
    
    TodayweatherAPI(city);
    ForecastAPI(city);

    
}

function TodayweatherAPI(city){

var api = `https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=${city}`;
fetch(api)
  .then(
    function(response) {
      if (response.status !== 200) {
        alert("City is not found, please input other city name")
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
     // today's weather info creation
        document.querySelector('#cityInfo').innerHTML = data.name + ", " + data.sys.country;
        console.log("Today data :", data);

        // var iconCodeToday = data.weather[0].icon;
        // var iconUrlToday = "http://openweathermap.org/img/w/" + iconCodeToday + ".png";
        // var iconEl = document.querySelector('#iconToday')
        // iconEl.setAttribute('src',iconUrlToday)

        document.querySelector('#detailInfo').innerHTML = '';
        document.querySelector('#todayTemp').innerHTML = "Temp: " + data.main.temp + "F";
        document.querySelector('#todayWind').innerHTML = "wind: " + data.wind.speed + "MPH";
        document.querySelector('#todayHumidity').innerHTML = "Humidity: " + data.main.humidity + "%";

       

      });
    }
  )
  }

  function ForecastAPI(city){
    var api = `https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=${city}`;
    fetch(api)
      .then(
        function(response) {
          if (response.status !== 200) {
            alert("City is not found, please input other city name")
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
         // today's weather info creation
            console.log(data);
           
        //1st date
            //date
            document.querySelector('#one .date').innerHTML = data.list[0].dt_txt.substr(0,10);
            //icon setting
            var iconCodeOne = data.list[0].weather[0].icon;
            var iconUrlOne = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
            iconEl = document.querySelector('#one .icon')
            iconEl.setAttribute('src',iconUrlOne)
            //temp
            document.querySelector('#one .temp').innerHTML = "Temp: " + data.list[0].main.temp;
            //wind
            document.querySelector('#one .wind').innerHTML = "wind: " + data.list[0].wind.speed + "MPH"
            //humidity
            document.querySelector('#one .humidity').innerHTML = "humidity: " + data.list[0].main.humidity;



        //2nd date
            document.querySelector('#two .date').innerHTML = data.list[1].dt_txt.substr(0,10);
            //icon setting
            var iconCodeTwo = data.list[1].weather[0].icon;
            var iconUrlTwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
            iconEl = document.querySelector('#two .icon')
            iconEl.setAttribute('src',iconUrlTwo)
            //temp
            document.querySelector('#two .temp').innerHTML = "Temp: " + data.list[1].main.temp;
            //wind
            document.querySelector('#two .wind').innerHTML = "wind: " + data.list[1].wind.speed + "MPH"
            //humidity
            document.querySelector('#two .humidity').innerHTML = "humidity: " + data.list[1].main.humidity;


        //3rd date
            document.querySelector('#three .date').innerHTML = data.list[2].dt_txt.substr(0,10);
            //icon setting
            var iconCodeThree = data.list[2].weather[0].icon;
            var iconUrlThree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
            iconEl = document.querySelector('#three .icon')
            iconEl.setAttribute('src',iconUrlThree)
            //temp
            document.querySelector('#three .temp').innerHTML = "Temp: " + data.list[2].main.temp;
            //wind
            document.querySelector('#three .wind').innerHTML = "wind: " + data.list[2].wind.speed + "MPH"
            //humidity
            document.querySelector('#three .humidity').innerHTML = "humidity: " + data.list[2].main.humidity;

        //4th date
            document.querySelector('#four .date').innerHTML = data.list[3].dt_txt.substr(0,10);
            //icon setting
            var iconCodeFour = data.list[3].weather[0].icon;
            var iconUrlFour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
            iconEl = document.querySelector('#four .icon')
            iconEl.setAttribute('src',iconUrlFour)
            //temp
            document.querySelector('#four .temp').innerHTML = "Temp: " + data.list[3].main.temp;
            //wind
            document.querySelector('#four .wind').innerHTML = "wind: " + data.list[3].wind.speed + "MPH"
            //humidity
            document.querySelector('#four .humidity').innerHTML = "humidity: " + data.list[3].main.humidity;

        //5th date
            document.querySelector('#five .date').innerHTML = data.list[4].dt_txt.substr(0,10);
            //icon setting
            var iconCodeFive = data.list[4].weather[0].icon;
            var iconUrlFive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
            iconEl = document.querySelector('#five .icon')
            iconEl.setAttribute('src',iconUrlFive)
            //temp
            document.querySelector('#five .temp').innerHTML = "Temp: " + data.list[4].main.temp;
            //wind
            document.querySelector('#five .wind').innerHTML = "wind: " + data.list[4].wind.speed + "MPH"
            //humidity
            document.querySelector('#five .humidity').innerHTML = "humidity: " + data.list[4].main.humidity;
          });
        }
      )
      }