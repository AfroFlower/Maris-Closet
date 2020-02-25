
// create a new var called weather

var weather;
var chosenOccasion;
var wet;
// get user's current location
// code here


// this ajax request gets the users current location
var apiKey = "&appid=809719346cfc3a45574c551cf515962c"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&units=imperial" + apiKey;
// console.log(queryURL)
 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){

    if (response.weather[0].main === "Rain"
    || response.weather[0].main === "Drizzle" 
    || response.weather[0].main === "Thunderstorm" ) {

    wet = "yes";

    } 
    
    else {

    wet = "no";

    }

// console.log(weather)
});

$("#btn-casual").on("click", function(){

    chosenOccasion = "casual";
    var shoe = outfitShoe(chosenOccasion, wet);
    console.log( shoe.image);
    
    var shoeImage = $("<img src=" + shoe.image + " class='card-img-top' id='header' alt=" + shoe.image + ">");
    
    $("#shoes").append(shoeImage)
});

$("#btn-business").on("click", function(){

    chosenOccasion = "business";
    outfitShoe(chosenOccasion, wet);

});

$("#btn-formal").on("click", function(){

    chosenOccasion = "formal";
    outfitShoe(chosenOccasion, wet);

});

