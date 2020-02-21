// API call:
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

// Parameters:
// id: City ID

// Examples of API calls:
// api.openweathermap.org/data/2.5/weather?q=London

// api.openweathermap.org/data/2.5/weather?q=London,uk

// API call:
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?zip=94040,us

// Parameters:
// zip: zip code
 
// The below code fills in the first row of the table
//  var city = "USER INPUT HERE"
 var zip = "&zip=32817,";
var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Orlando" + zip + apiKey;
console.log(queryURL)

 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){

    console.log(response)

 });
