// weather api testing here
navigator.geolocation.getCurrentPosition(function(p){
    console.log(p)

    geoLat = p.coords.latitude;
    geoLon = p.coords.longitude;

    var lat = geoLat;
    var lon = geoLon;
    // console.log(lat);
    // console.log(lon);

    // Below is the updated weather api with geolocation api together 
    // to give us the current location dinamically
    var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + apiKey + "&units=imperial";


    // Below code is calling the weather and geolocation api to return an accurate weather tempature
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
        console.log(response);
        
        var temp = parseInt(response.main.temp);
        console.log(temp);

        if (response.main.temp >= 70) {
           hot = true;
        //    alert("its hot outside!");
        }
        else {
           hot = false;
        //    alert("its cold outside!");
        }

        if (response.main.temp <= 69) {
            cold = true;
            // alert("its cold outside!");
         } 
         else {
            cold = false;
            // alert("its hot outside!");
         }

        // code if need
        // // return as hot if the tempature of the current location is greater than 70
        // if (temp >= 70) {
        //     hot = true;
        //     // alert("its hot outside!");
        // } else {
        //     hot = false;
        //     // alert("its cold outside!");
        // }

    });

    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
     if (response.weather[0].main === "Rain"
     || response.weather[0].main === "Drizzle" 
     || response.weather[0].main === "Thunderstorm" ) {

        raining = true;
     } 
     else {
        raining = false;
     }

    });

}, function(e){
    // (e) returns any erros in the code
    console.log(e)
});


