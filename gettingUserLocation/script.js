const btn = document.getElementById('btn-userLocation');
const data = document.getElementById('data-display');

async function getData(lat, long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=703a58ee14fd453da10134711241507&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}

//navigator is hjavascript's inbuilt function which provides various facilities i.e. get currentposition ,etc
//It has 2 callbacks , One is for success and another is for error handling

async function getLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
    data.innerText = `${result.location.name}, ${result.location.region}, ${result.location.tz_id} \n ${result.location.localtime}`;
}
function failedToGet() {
    console.log('There was some issues');
}

btn.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet)
})