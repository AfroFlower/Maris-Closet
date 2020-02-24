var chosenOccasion = "casual";
var temp = "hot";

var finalShoe = {
image: "picture",
item: "shoe",
occasion: "casual",
wet: "no",
color: "yellow",
neutral: false,  
};

var a = {
image: "picture",
item: "shirt",
occasion: "casual",
lengthhh: "hot",
color: "white",
neutral: true,
};
var b = {
image: "picture",
item: "shirt",
occasion: "casual",
lengthhh: "cold",
color: "gray",
neutral: true,
};
var c = {
image: "picture",
item: "shirt",
occasion: "casual",
lengthhh: "hot",
color: "brown",
neutral: false,  
};
var d = {
image: "picture",
item: "shirt",
occasion: "casual",
lengthhh: "hot",
color: "black",
neutral: true, 
};
var e = {
image: "picture",
item: "shirt",
occasion: "business",
lengthhh: "hot",
color: "red",
neutral: false,  
};
var f = {
image: "picture",
item: "shirt",
occasion: "formal",
lengthhh: "cold",
color: "blue",
neutral: false,  
};
var g = {
image: "picture",
item: "shirt",
occasion: "casual",
lengthhh: "hot",
color: "yellow",
neutral: false,  
};

var usersTops = [a, b, c, d, e, f, g];
var optionsTops = [];
var finalTop = {};

// Create a FUNCTION that will narrow tops options.
function outfitTop () {

    // go through the users tops
    for (var i = 0; i < usersTops.length; i++) {

        // if the tops match the chosen occasion ...
        if (((usersTops[i].occasion === chosenOccasion)
        // and the tops match the weather temperature ... 
        && (usersTops[i].lengthhh === temp))
        // and the tops color match the outfits shoes ...
        && ((usersTops[i].color === finalShoe.color)
        // or the tops color is neutral ...
        || (usersTops[i].neutral === true))) {
            
            // move matching tops to the options array
            optionsTops.push(usersTops[i]);

            // randomly pick tops from options array
            finalTop = optionsTops[Math.floor(Math.random() * optionsTops.length)];

        };

    };
    
console.log(finalTop);

};

outfitTop();