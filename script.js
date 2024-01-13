let apikey = "9b3abd72af5e8ee4c215adb53b59b0e5";
 getweatherdata = (city) => {
    var url = "https://api.openweathermap.org/data/2.5/weather";
    var full=`${url}?q=${city}&appid=${apikey}&units=imperial`;
    var weatherPromise = fetch(full);
    console.log(city);
        return weatherPromise.then((response)=>{
            return  response.json();
        });
    
    }


function searchcity(){
    const city = document.getElementById("city-input").value;
    getweatherdata(city)
    .then((Response)=>{
        console.log(Response)
        showdata(Response)
    })
    .catch((err)=>{
        console.log(err);
    })
    

}
showdata=(weatherData)=>{
document.getElementById("city-name").innerText = weatherData.name;
document.getElementById("weather-type").innerText = weatherData.weather[0].main;
document.getElementById("temp").innerText = weatherData.main.temp;
document.getElementById("min-temp").innerText = weatherData.main.temp_min;
document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

