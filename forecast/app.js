const storage = new Storage;
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city,weatherLocation.state);
const ui = new UI;
// get weather on DOM load
document.addEventListener('DOMContentLoaded',getForecast);
// change Locale
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;

    // add change to modal
    weather.changeLocale(city,state);

    // set local storage data
    getForecast();
    storage.setLocationData(city,state);

    // close modal
    $('#locModal').modal('hide');
});


function getForecast(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)})
        .catch(error =>console.log(error));
}