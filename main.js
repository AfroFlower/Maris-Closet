
// create a new var called weather

var weather;
var chosenOccasion;
var raining;
var temp; 
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

    raining = true;

    } 
    
    else {

    raining = false;

    }

// console.log(weather)

});

$("#btn-casual").on("click", function(){

    chosenOccasion = "casual";
    var shoe = outfitShoe(chosenOccasion, raining);
    var top = outfitTop (chosenOccasion, temp, finalShoe);
    var bottom = outfitBottom (chosenOccasion, raining, temp, finalTop);

    console.log( shoe.image);
    console.log( top.image);
    console.log( bottom.image);    

    var shoeImage = $("<img src=" + shoe.image + " class='card-img-top' id='header' alt=" + shoe.image + ">");
    var topImage = $("<img src=" + top.image + " class='card-img-top' id='header' alt=" + top.image + ">");
    var bottomImage = $("<img src=" + bottom.image + " class='card-img-top' id='header' alt=" + bottom.image + ">");

    $("#shoes").append(shoeImage)
    $("#tops").append(topImage)
    $("#bottoms").append(bottomImage)

});

$("#btn-business").on("click", function () {

    chosenOccasion = "business";
    var shoe = outfitShoe(chosenOccasion, raining);
    var top = outfitTop (chosenOccasion, temp, finalShoe);
    var bottom = outfitBottom (chosenOccasion, raining, temp, finalTop);

    console.log( shoe.image);
    console.log( top.image);
    console.log( bottom.image);    

    var shoeImage = $("<img src=" + shoe.image + " class='card-img-top' id='header' alt=" + shoe.image + ">");
    var topImage = $("<img src=" + top.image + " class='card-img-top' id='header' alt=" + top.image + ">");
    var bottomImage = $("<img src=" + bottom.image + " class='card-img-top' id='header' alt=" + bottom.image + ">");

    $("#shoes").append(shoeImage)
    $("#tops").append(topImage)
    $("#bottoms").append(bottomImage)

});

$("#btn-formal").on("click", function(){

    chosenOccasion = "formal";
    var shoe = outfitShoe(chosenOccasion, raining);
    var top = outfitTop (chosenOccasion, temp, finalShoe);
    var bottom = outfitBottom (chosenOccasion, raining, temp, finalTop);

    console.log( shoe.image);
    console.log( top.image);
    console.log( bottom.image);    

    var shoeImage = $("<img src=" + shoe.image + " class='card-img-top' id='header' alt=" + shoe.image + ">");
    var topImage = $("<img src=" + top.image + " class='card-img-top' id='header' alt=" + top.image + ">");
    var bottomImage = $("<img src=" + bottom.image + " class='card-img-top' id='header' alt=" + bottom.image + ">");

    $("#shoes").append(shoeImage)
    $("#tops").append(topImage)
    $("#bottoms").append(bottomImage)

});

