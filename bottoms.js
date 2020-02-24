var chosenOccasion = "casual";
var temp = "hot";
var rain = "yes";

var finalShoe = {
image: "picture",
item: "shoe",
occasion: "casual",
wet: "yes",
color: "yellow",
neutral: false,  
};

var finalTop = {
image: "picture",
item: "shirt",
occasion: "casual",
length: "hot",
color: "white",
neutral: true,
};

var a = {
image: "picture",
item: "bottom",
occasion: "casual",
lengthhh: "hot",
color: "white",
neutral: true,
denim: false, 
};
var b = {
image: "picture",
item: "bottom",
occasion: "casual",
lengthhh: "cold",
color: "gray",
neutral: true,
denim: false, 
};
var c = {
image: "picture",
item: "bottom",
occasion: "casual",
lengthhh: "hot",
color: "blue",
neutral: false,
denim: false,   
};
var d = {
image: "picture",
item: "bottom",
occasion: "casual",
lengthhh: "cold",
color: "black",
neutral: true,
denim: false,  
};
var e = {
image: "picture",
item: "bottom",
occasion: "business",
lengthhh: "hot",
color: "red",
neutral: false,
denim: false,  
};
var f = {
image: "picture",
item: "bottom",
occasion: "casual",
lengthhh: "cold",
color: "blue",
neutral: false,
denim: true,  
};
var g = {
image: "picture",
item: "bottom",
occasion: "formal",
lengthhh: "hot",
color: "yellow",
neutral: false,
denim: false,   
};

var usersBottoms = [a, b, c, d, e, f, g];
var optionsBottoms = [];
var finalBottom = {};

// Create a FUNCTION that will narrow bottom options.
function outfitBottom () {

    // go through the users bottoms
    for (var i = 0; i < usersBottoms.length; i++) {

        // if the bottoms match the chosen occasion ...
        if (((usersBottoms[i].occasion === chosenOccasion)
        // and it is raining ...
        && (rain = "yes"))
        //  and the bottoms match the final top color ...
        && ((usersBottoms[i].color === finalTop.color)
        // or the bottoms are a neutral color ... 
        || (usersBottoms[i].neutral === true) 
        // or the bottoms are jeans ...
        || (usersBottoms[i].denim === true))) {
            
            // since it is raining only long bottoms
            if (usersBottoms[i].lengthhh === "cold") {

                // move matching bottoms to the options array
                optionsBottoms.push(usersBottoms[i]);

                // randomly pick bottoms from options array
                finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

            }

        }

        // or else if the bottoms matches the chosen occasion and weather...
        else if (((usersBottoms[i].occasion === chosenOccasion)
        // and it is not raining ...
        && (usersBottoms[i].lengthhh === temp))
        && ((usersBottoms[i].color === finalTop.color)
        || (usersBottoms[i].neutral === true)
        || (usersBottoms[i].denim === true))) {
            
            // move matching bottoms to the options array
            optionsBottoms.push(usersBottoms[i]);

            // randomly pick bottom from options array
            finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

        }

    };
    
console.log(finalBottom);

};

outfitBottom();