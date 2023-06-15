const axios = require('axios');

// Maps API configuration
const mapsAPIKey = 'https://api.openweathermap.org/data/2.5/weather?q=bali&appid=8d020e83cccb5f9f60ba9e5939797cd1';

exports.index_get = (req, res) =>{
    res.render('homepage/home')
}
exports.packages_get = (req, res) =>{
    res.render('about/about')
}


exports.japan_get = async(req, res) =>{
    const weatherResponsej = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kyoto&appid=8d020e83cccb5f9f60ba9e5939797cd1`);
    
    console.log("weatherResponse----------------------------------------------------------------------")
    console.log("weatherResponse", weatherResponsej.data)

    console.log("weatherResponse, ,", weatherResponsej.data.main.temp)
    console.log("weatherResponse, ,", weatherResponsej.data.weather[0].description)
    console.log("weatherResponse, ,", weatherResponsej.data.wind.speed)
    console.log("weatherResponse, ,", weatherResponsej.data.clouds.all)
    
    const temp = weatherResponsej.data.main.temp;
    const description =  weatherResponsej.data.weather[0].description;
    const speed = weatherResponsej.data.wind.speed;
    const all = weatherResponsej.data.clouds.all;
    
    res.render('about/japan', { temp , description , speed, all});





    
}

exports.russia_get = async(req, res) =>{
    const weatherResponseR = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=8d020e83cccb5f9f60ba9e5939797cd1`);
    
    console.log("weatherResponse----------------------------------------------------------------------")

    console.log("weatherResponse, ,", weatherResponseR.data.main.temp)
    console.log("weatherResponse, ,", weatherResponseR.data.weather[0].description)
    console.log("weatherResponse, ,", weatherResponseR.data.wind.speed)
    console.log("weatherResponse, ,", weatherResponseR.data.clouds.all)
    
    const temp = weatherResponseR.data.main.temp;
    const description =  weatherResponseR.data.weather[0].description;
    const speed = weatherResponseR.data.wind.speed;
    const all = weatherResponseR.data.clouds.all;
    
    res.render('about/russia', { temp , description , speed, all});


}

exports.indonesia_get = async (req, res) =>{
    // Fetch weather data
    const weatherResponseI = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=bali&appid=8d020e83cccb5f9f60ba9e5939797cd1`);
    
    console.log("weatherResponse----------------------------------------------------------------------")

console.log("weatherResponse, ,", weatherResponseI.data.main.temp)
console.log("weatherResponse, ,", weatherResponseI.data.weather[0].description)
console.log("weatherResponse, ,", weatherResponseI.data.wind.speed)
console.log("weatherResponse, ,", weatherResponseI.data.clouds.all)

const temp = weatherResponseI.data.main.temp;
const description =  weatherResponseI.data.weather[0].description;
const speed = weatherResponseI.data.wind.speed;
const all = weatherResponseI.data.clouds.all;

res.render('about/indonesia', { temp , description , speed, all});
    
   
}

exports.turkey_get = async(req, res) =>{
    const weatherResponseT = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=8d020e83cccb5f9f60ba9e5939797cd1`);
    
    console.log("weatherResponse----------------------------------------------------------------------")
    console.log("weatherResponse, ,", weatherResponseT.data.main.temp)
    console.log("weatherResponse, ,", weatherResponseT.data.weather[0].description)
    console.log("weatherResponse, ,", weatherResponseT.data.wind.speed)
    console.log("weatherResponse, ,", weatherResponseT.data.clouds.all)
    
    const temp = weatherResponseT.data.main.temp;
    const description =  weatherResponseT.data.weather[0].description;
    const speed = weatherResponseT.data.wind.speed;
    const all = weatherResponseT.data.clouds.all;
    
    res.render('about/turkey', { temp , description , speed, all});

}