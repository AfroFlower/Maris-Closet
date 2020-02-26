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

        // check if the occasion is FORMAL

        // if the bottoms match the chosen occasion ...
        if ((usersBottoms[i].occasion === chosenOccasion)
        // and if the occasion is FORMAL ...
        && (usersBottoms[i].occasion === "formal")
        //  and the bottoms match the final top color ...
        && ((usersBottoms[i].color === finalTop.color)
        // or the bottoms are a neutral color ... 
        || (usersBottoms[i].neutral === true))) {

            // move matching bottoms to the options array
            // (because all formal bottoms should be long)
            optionsBottoms.push(usersBottoms[i]);

            // randomly pick bottoms from options array
            finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

            // console.log(optionsBottoms)

        } 



        // check if it is raining

        // if the bottoms match the chosen occasion ...
        else if (((usersBottoms[i].occasion === chosenOccasion)
        // and it is raining ...
        && (rain = "yes"))
        // and if the bottom lengthhh is long ...
        && (usersBottoms[i].occasion === "cold")
        //  and the bottoms match the final top color ...
        && ((usersBottoms[i].color === finalTop.color)
        // or the bottoms are a neutral color ... 
        || (usersBottoms[i].neutral === true) 
        // or the bottoms are jeans ...
        || (usersBottoms[i].denim === true))) {

            // move matching bottoms to the options array
            optionsBottoms.push(usersBottoms[i]);

            // randomly pick bottoms from options array
            finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

            // console.log(optionsBottoms)            

        }



        // check if the weather is cold

        // or else if the bottoms matches the chosen occasion...
        else if (((usersBottoms[i].occasion === chosenOccasion)
        // and the bottoms matches the weather...
        && (usersBottoms[i].lengthhh === temp))
        // and if the bottom lengthhh is long ...
        && (usersBottoms[i].occasion === "cold")  
        //  and the bottoms match the final top color ...
        && ((usersBottoms[i].color === finalTop.color)
        // or the bottoms are a neutral color ... 
        || (usersBottoms[i].neutral === true) 
        // or the bottoms are jeans ...
        || (usersBottoms[i].denim === true))) {
            
            // move matching bottoms to the options array
            optionsBottoms.push(usersBottoms[i]);

            // randomly pick bottom from options array
            finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

            // console.log(optionsBottoms) 

        }



        // check if the weather is hot

        // or else if the bottoms matches the chosen occasion...
        else if (((usersBottoms[i].occasion === chosenOccasion)
        // and the bottoms matches the weather...
        && (usersBottoms[i].lengthhh === temp))
        // and if the bottom lengthhh is short ...
        && (usersBottoms[i].occasion === "hot")  
        //  and the bottoms match the final top color ...
        && ((usersBottoms[i].color === finalTop.color)
        // or the bottoms are a neutral color ... 
        || (usersBottoms[i].neutral === true) 
        // or the bottoms are jeans ...
        || (usersBottoms[i].denim === true))) {
            
            // move matching bottoms to the options array
            optionsBottoms.push(usersBottoms[i]);

            // randomly pick bottom from options array
            finalBottom = optionsBottoms[Math.floor(Math.random() * optionsBottoms.length)];

            // console.log(optionsBottoms) 

        }

    };
    
console.log(finalBottom);

};

outfitBottom();