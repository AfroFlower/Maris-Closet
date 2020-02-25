// If weather - rain - narrow shoes array to shoes that can get wet.
// Else if weather - no rain - narrow shoes array to shoes that can not get wet.
// From new narrowed shoe array choose shoe at random.
// Set final shoe choice aside for final outfit.

// var chosenOccasion = "casual";
// var rain = "no";

var a = {
image: "https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-191-Royale-Gum-Blanco-RRWG-Product-101.jpg?v=1563991254",
item: "shoe",
occasion: "casual",
wet: "no",
color: "white",
neutral: true,  
};
var b = {
image: "https://cdn.shopify.com/s/files/1/0468/9441/products/Taft_OnWhite-064-min_800x.jpg?v=1542949082",
item: "shoe",
occasion: "business",
wet: "no",
color: "gray",
neutral: true,  
};
var c = {
image: "https://i0.wp.com/ae01.alicdn.com/kf/Hcf852273a0414c69b22751178871cfb03.jpg?crop=3,5,959,601&quality=3182",
item: "shoe",
occasion: "formal",
wet: "no",
color: "brown",
neutral: false,  
};
var d = {
image: "https://tjp4all.com/wp-content/uploads/2019/04/7115Dm2UG1L._UL1500_.jpg",
item: "shoe",
occasion: "casual",
wet: "yes",
color: "black",
neutral: true,  
};
var e = {
image: "http://t0.gstatic.com/images?q=tbn%3AANd9GcTcSEtUZvUYUIwKEJKa-nyLmPetPRxlf38VzVNAhxKwbLTJYsatdakM7qOhWMTyJ5CFdhVFHSnP&usqp=CAc",
item: "shoe",
occasion: "business",
wet: "no",
color: "red",
neutral: false,  
};
var f = {
image: "picture",
item: "shoe",
occasion: "formal",
wet: "yes",
color: "blue",
neutral: false,  
};
var g = {
image: "picture",
item: "shoe",
occasion: "casual",
wet: "no",
color: "yellow",
neutral: false,  
};

var usersShoes = [a, b, c, d, e, f, g];

// Create a FUNCTION that will narrow shoe options.
function outfitShoe (chosenOccasion, wet) {
    
    // console.log(chosenOccasion);
    // console.log(wet);

    var optionsShoes = [];
    var finalShoe = {};

    // go through the users shoes
    for (var i = 0; i < usersShoes.length; i++) {

        // if the shoes matches the chosen occasion ...
        if ( usersShoes[i].occasion === chosenOccasion 
        // and the the shoes match the weather forcast ... 
        && usersShoes[i].wet === wet ) {
            
            // move matching shoes to the options array
            optionsShoes.push(usersShoes[i]);

            // randomly pick shoe from options array
            finalShoe = optionsShoes[Math.floor(Math.random() * optionsShoes.length)];

            // console.log(finalShoe);
        }; 

    };

return finalShoe;

};