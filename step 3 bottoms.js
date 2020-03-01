// user would pick the chosenOccasion
// casual, business, or formal
var chosenOccasion = "formal";
// the weather api function gives us the temp
var temp = "hot";
// the weather api function gives us whether or not it is raining
var raining = false;

var bottom1 = {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "formal",
weatherType: "cold",
getWet: true,
color: "black",
neutral: true,
denim: false,
};
var bottom2 = {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "business",
weatherType: "hot",
getWet: false,
color: "black",
neutral: true,
denim: false,
};
var bottom3 = {
image: "https://img.ltwebstatic.com/images2_pi/2018/08/16/15344122864071547532_thumbnail_600x799.webp",
item: "bottom",
occasion: "casual",
weatherType: "hot",
getWet: false,
color: "blue",
neutral: true,
denim: true,
};
var bottom4 = {
image: "https://img.ltwebstatic.com/images2_pi/2019/09/06/15677562642354045488_thumbnail_405x552.webp",
item: "bottom",
occasion: "casual",
weatherType: "cold",
getWet: true,
color: "white",
neutral: true,
denim: false,
};
var bottom5 = {
image: "https://img.ltwebstatic.com/images3_pi/2019/12/20/15768265140a369ddb1f90489f9a2889797a901389_thumbnail_600x.webp",
item: "bottom",
occasion: "business",
weatherType: "cold",
getWet: true,
color: "beige",
neutral: true,
denim: false,
};
var bottom6 = {
image: "https://img.ltwebstatic.com/images3_pi/2019/12/30/157767067867e72dda4e26cfeeb18d4e841e8706f4_thumbnail_600x.webp",
item: "bottom",
occasion: "casual",
weatherType: "hot",
getWet: false,
color: "black",
neutral: true,
denim: false,
};
var bottom7 = {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "business",
weatherType: "cold",
getWet: true,
color: "black",
neutral: true,
denim: false,
};
var bottom8 = {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "casual",
weatherType: "cold",
getWet: true,
color: "white",
neutral: true,
denim: false,
};
var bottom9 = {
image: "https://img.ltwebstatic.com/images3_pi/2019/12/20/15768265140a369ddb1f90489f9a2889797a901389_thumbnail_600x.webp",
item: "bottom",
occasion: "business",
weatherType: "cold",
getWet: true,
color: "blue",
neutral: true,
denim: false,
};
var bottom10 = {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "casual",
weatherType: "cold",
getWet: true,
color: "purple",
neutral: true,
denim: true,
};
var bottom11= {
image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
item: "bottom",
occasion: "business",
weatherType: "cold",
getWet: true,
color: "white",
neutral: true,
denim: false,
};
var bottom12 = {
image: "https://www.fjallraven.com/globalassets/fjallraven/shorts_1/f82462/detail_7323450320621_ss18_a_high_coast_shorts_21.jpg",
item: "bottom",
occasion: "business",
weatherType: "hot",
getWet: false,
color: "white",
neutral: true,
denim: false,
};
var bottom13 = {
image: "https://www.fjallraven.com/globalassets/fjallraven/shorts_1/f82462/detail_7323450098995_ss18_a_high_coast_shorts_21.jpg",
item: "bottom",
occasion: "business",
weatherType: "hot",
getWet: false,
color: "blue",
neutral: true,
denim: false,
};

var usersBottoms = [bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8, bottom9, bottom10, bottom11, bottom12, bottom13];

// Create a FUNCTION that will narrow bottom options.
function outfitBottom (chosenOccasion, raining, temp, finalTop) {
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

        && usersBottoms[i].getWet === raining
        // and it is raining ...        
        && raining === true
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
        && usersBottoms[i].getWet === raining
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

outfitBottom(chosenOccasion, raining, temp, finalTop);