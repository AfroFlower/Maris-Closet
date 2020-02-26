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

    var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + apiKey + "&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
        console.log(response);
        
        var temp = parseInt(response.main.temp);
        console.log(temp);

        // return as hot if the tempation of the current location is greater than 70
        if (temp >= 70) {
            alert("its hot outside!");
        } else {
            alert("its cold outside!");
        }
    });

}, function(e){

    console.log(e)
});

