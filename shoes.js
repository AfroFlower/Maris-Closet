// If weather - rain - narrow shoes array to shoes that can get wet.
// Else if weather - no rain - narrow shoes array to shoes that can not get wet.
// From new narrowed shoe array choose shoe at random.
// Set final shoe choice aside for final outfit.

var chosenOccasion = "casual";
var rain = "no";

var a = {
image: "picture",
occasion: "casual",
wet: "no",
color: "white",
neutral: true,  
};
var b = {
image: "picture",
occasion: "business",
wet: "no",
color: "gray",
neutral: true,  
};
var c = {
image: "picture",
occasion: "formal",
wet: "no",
color: "brown",
neutral: false,  
};
var d = {
image: "picture",
occasion: "casual",
wet: "yes",
color: "black",
neutral: true,  
};
var e = {
image: "picture",
occasion: "business",
wet: "yes",
color: "red",
neutral: false,  
};
var f = {
image: "picture",
occasion: "formal",
wet: "yes",
color: "blue",
neutral: false,  
};
var g = {
image: "picture",
occasion: "casual",
wet: "no",
color: "yellow",
neutral: false,  
};

var usersShoes = [a, b, c, d, e, f, g];
var optionsShoes = [];
var finalShoe = {};

// Create a FUNCTION that will narrow shoe options.
function outfitShoe () {

    // go through the users shoes
    for (var i = 0; i < usersShoes.length; i++) {

        // if the shoes matches the chosen occasion ...
        if ((usersShoes[i].occasion === chosenOccasion) 
        // and the the shoes match the weather forcast ... 
        && (usersShoes[i].wet === rain)) {
            
            // move matching shoes to the options array
            optionsShoes.push(usersShoes[i]);

            // randomly pick shoe from options array
            finalShoe = optionsShoes[Math.floor(Math.random() * optionsShoes.length)];

        };

    };
    
console.log(finalShoe);

};

outfitShoe();


// tries that didnt work

                // // go through the occasion shoes
                // for (var i = 0; i < occasionShoes.length; i++) {
                //     // if the shoes matches the weather...
                //     if (occasionShoes[i].wet === rain) {
                //         // move shoes for the weather to the next array
                //         weatherShoes.push(occasionShoes[i]);
                //         console.log(weatherShoes);
                //     }; 
                //  };

        // // Based on what occasion was chosen by the user narrow shoe array to their objects that have in their discriptions the matching occasion.    
        // // if the user occasion is casual
        // if chosenOccasion === $(shoe[i]).occasion("casual") {
        // // remove shoes that are not casual
        // shoe.remove($(shoe[i]).occasion("business", "formal"))}
        // // if the user occasion is business
        // else if $(shoe[i]).occasion("business") {
        // // remove shoes that are not business
        // shoe.remove($(shoe[i]).occasion("casual", "formal"))}
        // // if the user occasion is formal
        // else if $(shoe[i]).occasion("formal") {
        // // remove shoes that are not formal 
        // shoe.remove($(shoe[i]).occasion("casual", "business"))};

        //     // OR OR OR IS IT //
        //     // what ever matches the user occasion
        //     if chosenOccasion === $(shoe[i]).occasion() {
        //     // remove everything else that does not match
        //     shoe.remove(!chosenOccasion == $(shoe[i]).occasion())    
        //     };
