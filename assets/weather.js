// weather api testing here
navigator.geolocation.getCurrentPosition(function(p){
    console.log(p)

    geoLat = p.coords.latitude;
    geoLon = p.coords.longitude;

    // navigator.geolocation.getCurrentPosition(function(p){ console.log(p)}, function(e){console.log(e)})
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

        // return as hot if the tempature of the current location is greater than 70
        if (temp >= 70) {
            alert("its hot outside!");
        } else {
            alert("its cold outside!");
        }

    });

}, function(e){
    // (e) returns any erros in the code
    console.log(e)
});

