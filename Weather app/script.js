
   
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d3e7e355fmshce14a9f9acf72e3p183802jsn93cdac7c475f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    }
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then((response) => {
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = unixTimestampToDateTime(response.sunrise)
            sunset.innerHTML = unixTimestampToDateTime(response.sunset)

        })

        .catch(error => {
            console.error(error);
        });
}



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

 // Call the function to execute the code
getWeather("Mumbai")
