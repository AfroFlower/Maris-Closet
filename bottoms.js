// user would pick the chosenOccasion
// casual, business, or formal
var chosenOccasion = "formal";
// the weather api function gives us the temp
var temp = "hot";
// the weather api function gives us whether or not it is raining
var rain = "no";

// to test the bottoms function we need a final shoe that has already been chosen for the outfit
var finalShoe = {
image: "picture",
item: "shoe",
occasion: "formal",
wet: "no",
color: "yellow",
neutral: false,  
};

// to test the bottoms function we need a final top that has already been chosen for the outfit
var finalTop = {
image: "picture",
item: "shirt",
occasion: "casual",
weatherType: "hot",
color: "yellow",
neutral: true,
};

// each object is a different bottom.
// var a = {
// image: "a",
// item: "bottom",
// occasion: "formal",
// weatherType: "hot",
// color: "white",
// neutral: true,
// denim: false, 
// };
// var b = {
// image: "picture",
// item: "bottom",
// occasion: "casual",
// weatherType: "cold",
// color: "gray",
// neutral: true,
// denim: false, 
// };
// var c = {
// image: "c",
// item: "bottom",
// occasion: "casual",
// weatherType: "hot",
// color: "blue",
// neutral: false,
// denim: true,   
// };
// var d = {
// image: "d",
// item: "bottom",
// occasion: "formal",
// weatherType: "cold",
// color: "yellow",
// neutral: true,
// denim: false,  
// };
// var e = {
// image: "picture",
// item: "bottom",
// occasion: "business",
// weatherType: "hot",
// color: "red",
// neutral: false,
// denim: false,  
// };
var f = {
image: "f",
item: "bottom",
occasion: "casual",
weatherType: "hot",
color: "blue",
neutral: false,
denim: true,  
wet: "no"   

};
var g = {
image: "g",
item: "bottom",
occasion: "casual",
weatherType: "hot",
color: "yellow",
neutral: false,
denim: false,
wet: "no"   
};

var usersBottoms = [f, g];

// Create a FUNCTION that will narrow bottom options.
function outfitBottom (chosenOccasion, wet, temp, finalTop) {
    var optionsBottoms = [];
    var finalBottom = {};

    // go through the users bottoms
    for (var i = 0; i < usersBottoms.length; i++) {

        // check if the occasion is FORMAL

        // if the bottoms match the chosen occasion ...
        if ( usersBottoms[i].occasion === chosenOccasion
            // and if the occasion is FORMAL ...
            && chosenOccasion === "formal"
            //  and the bottoms match the final top color ...
            && ( usersBottoms[i].color === finalTop.color
            // or the bottoms are a neutral color ... 
            || usersBottoms[i].neutral === true ) ) {

            // move matching formal bottoms to the options array
            // (we are not checking weather because all formal bottoms lengthhh should be long)
            optionsBottoms.push(usersBottoms[i]);
            // console.log(finalBottom)

        } 



        // check if it is raining and casual and business

        // if the bottoms match the chosen occasion ...
        else if ( usersBottoms[i].occasion === chosenOccasion
        // and it is raining ...
        && usersBottoms[i].wet === wet

        && wet === "yes"
        // and if the bottom lengthhh is long ...
        && usersBottoms[i].weatherType === "cold"
        //  and the bottoms match the final top color ...
        && ( usersBottoms[i].color === finalTop.color
        // or the bottoms are a neutral color ... 
        || usersBottoms[i].neutral === true 
        // or the bottoms are jeans ...
        || usersBottoms[i].denim === true ) ) {

            // move long bottoms to the options array
            // (because user should wear long bottoms when it rains)
            optionsBottoms.push(usersBottoms[i]);
            // console.log(optionsBottoms)  
        }



        // check if the weather is cold or hot

        // or else if the bottoms matches the chosen occasion...
       else if ( usersBottoms[i].occasion === chosenOccasion
        // and the bottoms matches the weather...
        && usersBottoms[i].weatherType === temp
        // // and if it is not raining  ...
        && usersBottoms[i].wet === wet
        //  and the bottoms match the final top color ...
        && ( usersBottoms[i].color === finalTop.color
        // or the bottoms are a neutral color ... 
        || usersBottoms[i].neutral === true 
        // or the bottoms are jeans ...
        || usersBottoms[i].denim === true ) ) {
            
            // move matching bottoms to the options array
            optionsBottoms.push(usersBottoms[i]);
            // console.log(optionsBottoms) 
        }
        
    };
    
    // randomly pick bottom from options array
    finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];
    console.log(finalBottom);
    return finalBottom

};

outfitBottom("casual", rain, "hot", finalTop);