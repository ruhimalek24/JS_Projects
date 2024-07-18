// alert('ruhi');
const btn = document.getElementById('searchBtn');
const input = document.getElementById('cityInput');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=703a58ee14fd453da10134711241507&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

btn.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name} , ${result.location.country} , ${result.location.tz_id}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}`;
})