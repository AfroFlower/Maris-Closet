// API call example:
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

// The below code is for the weather api. Below has ORLANDO hard-coded for the project
//  var city = "USER INPUT HERE"
//  var zip = "&zip=32817,";
var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&units=imperial" + apiKey;
console.log(queryURL)

 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){

    console.log(response)

    $("#city").text("City: " + response.name);
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    $("#sky").text("Sky: " + response.weather[0].description);
    $("#tempature").text("Tempature: " + response.main.temp + "º");
    // $("#rain").text("Chance of Rain: " + response.weather[0].id "%");

    var weather = response.main.temp;
    console.log(weather)

// Check Weather API. (above)

  var weather = {
      cold: 60 + "º",
      warm: 75 + "º",
      hot: 80 + "º",
      wet: false,
      dry: true
    };

    // console.log('%c Actual Tempature', 'color: white; font-weight: bold; background: black;');

    // these returns put the shirt into the cold  or hot array
    // the "objects" are for my other team members and the arrays they created
  if (weather = weather.cold) {
    temp = false;
    return object.longSleevedShirt;
  } else if (weather.hot){
    temp = true;
    return object.shortSleevedShirt;
  };

    // these returns put the shoes into the wet or dry array
  if (weather = weather.wet) {
    rain = false;
    return object.shoesSandels
  } else if (weather = weather.dry){
    rain = true;
    return object.shoesSneakers
  };

// Determan if weather is cold or hot. (This will let us know whether 
// the outfit can have long or short length clothing.)

// Determan weather it is not raining or it is raining. (This will let us know whether the 
// outfit can have shoes that cannot get wet or shoes that can get wet.)
  
// These determaning factors should be bullions.

// If weather is cold leave temp to false.
// Else if weather is hot set temp to true.
// If not raining leave wet to false.
// Else if raining set wet to true.


});

    


