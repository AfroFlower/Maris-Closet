// If weather - rain - narrow shoes array to shoes that can get wet.
// Else if weather - no rain - narrow shoes array to shoes that can not get wet.
// From new narrowed shoe array choose shoe at random.
// Set final shoe choice aside for final outfit.

var chosenOccasion;
var raining = false;

 
var shoe1 = {
    image: "https://belk.scene7.com/is/image/Belk?layer=0&src=3900006_25329719_A_719&$DWP_PRODUCT_PDP_LARGE$",
    occasion: "formal",
    getWet: false,
    color: "gold",
    neutral: false,  
    };
    var shoe2 = {
    image: "https://media.aldoshoes.com/v3/product/daywen/600-001-031/daywen_red_600-001-031_main_rc_nt_1000x1270.jpg",
    occasion: "business",
    getWet: false,
    color: "burgundy",
    neutral: false,  
    };
    var shoe3 = {
    image:  "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bd27653-9e2a-4cc9-9eab-1c01915c1804/zoom-freak-1-soul-glo-basketball-shoe-tmk8Hw.jpg",
    occasion: "casual",
    getWet: true,
    color: "yellow",
    neutral: false,  
    };
    var shoe4 = {
    image: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1710532-3afe-4db5-8126-199c3d9f2d79/air-force-1-07-lv8-mens-shoe-1qm6ML.jpg",
    occasion: "casual",
    getWet: true,
    color: "burgundy",
    neutral: false,  
    };
    var shoe5 = {
    image: "https://media.aldoshoes.com/v3/product/daywen/600-001-031/daywen_red_600-001-031_main_rc_nt_1000x1270.jpg",
    occasion: "business",
    getWet: false,
    color: "red",
    neutral: false,  
    };
    var shoe6 = {
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDMwMHYzMDBIMHoiIGZpbGw9IiNFQ0VERUYiLz48L3N2Zz4=",
    occasion: "casual",
    getWet: true,
    color: "white",
    neutral: true,  
    };
    var shoe7 = {
    image: "https://media.aldoshoes.com/v3/product/mccrery/001-001-046/mccrery_black_001-001-046_main_rc_nt_350x445.jpg",
    occasion: "business",
    getWet: false,
    color: "black",
    neutral: true,  
    };
    var shoe8 = {
    image: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/91f51b14a34841c59fb9a82b0139dc49_9366/terrex-swift-r2-mid-gore-tex-hiking-shoes.jpg",
    occasion: "casual",
    getWet: true,
    color: "black",
    neutral: true,  
    };
    var shoe9 = {
    image: "https://media.aldoshoes.com/v3/product/daywen/450-001-031/daywen_blue_450-001-031_main_rc_nt_500x635.jpg",
    occasion: "business",
    getWet: false,
    color: "blue",
    neutral: false,  
    };
    var shoe10 = {
    image: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9b8eeb0-2a77-41d3-ad6d-233491fbe365/lebron-17-monstars-basketball-shoe-CR7772.jpg",
    occasion: "casual",
    getWet: true,
    color: "purple",
    neutral: false,  
    };
    var shoe11 = {
    image: "https://media.aldoshoes.com/v3/product/mirandi/001-003-038/mirandi_black_001-003-038_main_rc_nt_350x445.jpg",
    occasion: "business",
    getWet: false,
    color: "black",
    neutral: true,  
    };
    var shoe12 = {
    image: "https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-191-Royale-Gum-Blanco-RRWG-Product-101.jpg?v=1563991254",
    item: "shoe",
    occasion: "casual",
    getWet: false,
    color: "white",
    neutral: true,  
    };
    var shoe13 = {
    image: "https://cdn.shopify.com/s/files/1/0468/9441/products/Taft_OnWhite-064-min_800x.jpg?v=1542949082",
    item: "shoe",
    occasion: "business",
    getWet: false,
    color: "gray",
    neutral: true,  
    };
    var shoe14 = {
    image: "https://i0.wp.com/ae01.alicdn.com/kf/Hcf852273a0414c69b22751178871cfb03.jpg?crop=3,5,959,601&quality=3182",
    item: "shoe",
    occasion: "formal",
    getWet: true,
    color: "brown",
    neutral: false,  
    };
    var shoe15 = {
    image: "https://tjp4all.com/wp-content/uploads/2019/04/7115Dm2UG1L._UL1500_.jpg",
    item: "shoe",
    occasion: "casual",
    getWet: true,
    color: "black",
    neutral: true,  
    };
    var shoe16 = {
    image: "http://t0.gstatic.com/images?q=tbn%3AANd9GcTcSEtUZvUYUIwKEJKa-nyLmPetPRxlf38VzVNAhxKwbLTJYsatdakM7qOhWMTyJ5CFdhVFHSnP&usqp=CAc",
    item: "shoe",
    occasion: "business",
    getWet: false,
    color: "red",
    neutral: false,  
    };

var usersShoes = [shoe1, shoe2, shoe3, shoe4, shoe5,shoe6, shoe7, shoe8, shoe9, shoe10, shoe11];

// Create a FUNCTION that will narrow shoe options.
function outfitShoe (chosenOccasion, raining) {
    
    // console.log(chosenOccasion);
    // console.log(wet);

    var optionsShoes = [];
    var finalShoe = {};

    // go through the users shoes
    for (var i = 0; i < usersShoes.length; i++) {

        // if the shoes matches the chosen occasion ...
        if ( usersShoes[i].occasion === chosenOccasion 
        // and the the shoes match the weather forcast ... 
        && usersShoes[i].getWet === raining ) {
            
            // move matching shoes to the options array
            optionsShoes.push(usersShoes[i]);

            // randomly pick shoe from options array
            finalShoe = optionsShoes[Math.floor(Math.random() * optionsShoes.length)];

            // console.log(finalShoe);
        }; 

    };

    return finalShoe;

};

outfitShoe (chosenOccasion, raining);