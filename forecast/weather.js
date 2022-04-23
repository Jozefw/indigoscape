class Weather{
    constructor(city,state){
        // this.apiKey = 'a129f36de5e0c0ce';
        this.apiKey = '8b156c1e80044351';
        this.city = city;
        this.state = state;
    }
    // fetch weather
    async getWeather(){
        const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)

        const responseData = await response.json();
        return responseData.current_observation;
    }

    // change weather location
    changeLocale(city,state){
        this.city = city;
        this.state = state;
    }
}
