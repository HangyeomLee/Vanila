function onGeoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "906914dbdd28f790abc1c0f6e3a4b4a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
            const name = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
        });
}
function onGeoError(){
    alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);