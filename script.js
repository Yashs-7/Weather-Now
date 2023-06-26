async function fetchData(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b4c936ef6fmsh706d9ded4caf6fbp1746b0jsn024df15a906e',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    document.getElementById('city').innerText = city;
    document.getElementById('cloud_pct').innerText = data.cloud_pct;
    document.getElementById('temp').innerText = data.temp;
    document.getElementById('feels_like').innerText = data.feels_like;
    document.getElementById('humidity').innerText = data.humidity;
    document.getElementById('min_temp').innerText = data.min_temp;
    document.getElementById('max_temp').innerText = data.max_temp;
    document.getElementById('wind_speed').innerText = data.wind_speed;
    document.getElementById('wind_degrees').innerText = data.wind_degrees;
    document.getElementById('sunrise').innerText = convertTime(data.sunrise);
    document.getElementById('sunset').innerText = convertTime(data.sunset);
    if(data.cloud_pct>=90){
      document.getElementById('weatherIcons').src ="images/rain.png";
    }
    else if(data.cloud_pct<=50){ 
      document.getElementById('weatherIcons').src ="images/clear.png";
    }
    else if(data.cloud_pct<70){
      document.getElementById('weatherIcons').src ="images/mist.png";
    }
    else {
      document.getElementById('weatherIcons').src ="images/clouds.png";
    }
    

    
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

const button1 = document.getElementById('fetchButton1');
const weatherIcon = document.getElementById('weatherIcon');


button1.addEventListener('click', function(event) {
  event.preventDefault();
  const city = document.getElementById('cityInput').value;
  fetchData(city);
});


window.addEventListener('load', function() {
  const defaultCity = cityInput.value;
  fetchData(defaultCity);
});

function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
}
