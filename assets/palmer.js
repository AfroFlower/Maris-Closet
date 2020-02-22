// API call example:
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
 
// The below code is for the weather api. Below has ORLANDO hard-coded for the project
//  var city = "USER INPUT HERE"
//  var zip = "&zip=32817,";
var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&units=imperial" + apiKey;
console.log(queryURL)

// Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32

// var temp = F * (K - 273.15) * 1.80 + 32


 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){

    console.log(response)
    
    $("#city").text("City: " + response.name);
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    $("#sky").text("Sky: " + response.weather[0].description);
    $("#tempature").text("Tempature: " + response.main.temp);



 });
