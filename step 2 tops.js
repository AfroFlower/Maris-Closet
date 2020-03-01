var chosenOccasion = "casual";
var temp = "hot";

var top1 = {
    image: "https://us.shein.com/Men-Sequin-Shawl-Collar-Tuxedo-Suit-Jacket-p-869586-cat-1982.html?scici=navbar_3~~tab03navbar02menu01dir11~~2_1_11~~real_1982~~SPcCccMenCategory_default~~0~~0",
    item: "shirt",
    occasion: "formal",
    lengthhh: "cold",
    color: "gold",
    neutral: true,
    };
    var top2 = {
    image: "https://img.ltwebstatic.com/images3_pi/2019/11/14/15737274792d5b4446567091708d97f9c95327cd52_thumbnail_600x.webp",
    item: "shirt",
    occasion: "business",
    lengthhh: "hot",
    color: "burgundy",
    neutral: true,
    };
    var top3 = {
    image: "https://img.ltwebstatic.com/images3_pi/2019/11/18/157406159928106a64b0ed0fd9d15eed92351f70e7_thumbnail_600x.webp",
    item: "shirt",
    occasion: "casual",
    lengthhh: "cold",
    color: "yellow",
    neutral: true,
    };  
    var top4 = {
    item: "shirt",
    image: "https://img.ltwebstatic.com/images3_pi/2019/10/25/15719893554f4137319d0a963071e6509409c4d388_thumbnail_600x.webp",
    occasion: "casual",
    lengthhh: "hot",
    color: "burgundy",
    neutral: true,
    };
    var top5 = {
    item: "shirt",
    image: "https://img.ltwebstatic.com/images2_pi/2019/08/07/156514884934442198_thumbnail_405x552.webp",
    occasion: "business",
    lengthhh: "cold",
    color: "red",
    neutral: true,
    };
    var top6 = {
    item: "shirt",
    image: "https://img.ltwebstatic.com/images2_pi/2019/06/11/15602426472485560367_thumbnail_600x799.webp",
    occasion: "casual",
    lengthhh: "hot",
    color: "black",
    neutral: true,
    };
    var top7 = {
    item: "shirt",
    image: "https://img.ltwebstatic.com/images3_pi/2019/12/07/15757080560237079477ec02fb5d2a79b0f284a2ee_thumbnail_600x.webp",
    occasion: "business",
    lengthhh: "cold",
    color: "black",
    neutral: true,
    };
    var top8 = {
    image: "https://img.ltwebstatic.com/images3_pi/2019/10/18/1571393387d4b1bf24561be2fbabc8ec3ff9a43c00_thumbnail_600x.webp",
    item: "shirt",
    occasion: "casual",
    lengthhh: "cold",
    color: "white",
    neutral: true,
    }; 
    var top9 = {
    image: "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
    item: "shirt",
    occasion: "business",
    lengthhh: "cold",
    color: "blue",
    neutral: false,
    }; 
    var top10 = {
    image: "https://img.ltwebstatic.com/images3_pi/2019/12/10/15759653993967f59704aa5b35e8247a3f6fd3bbe1_thumbnail_405x552.webp",
    item: "shirt",
    occasion: "casual",
    lengthhh: "cold",
    color: "purple",
    neutral: false,
    }; 
    var top11 = {
    image: "https://img.ltwebstatic.com/images2_pi/2018/06/05/1528183672179344041_thumbnail_600x799.webp",
    item: "shirt",
    occasion: "business",
    lengthhh: "hot",
    color: "black",
    neutral: true,
    }; 
    var top12 = {
    image: "https://img.ltwebstatic.com/images3_pi/2019/11/01/1572584527b47ab417b259db773d6b78aa26465a69_thumbnail_600x.webp",
    item: "shirt",
    occasion: "business",
    lengthhh: "hot",
    color: "black",
    neutral: true,
    }; 

var usersTops = [top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, top11, top12];

// Create a FUNCTION that will narrow tops options.
function outfitTop (chosenOccasion, temp, finalShoe) {
    
    var optionsTops = [];
    var finalTop = {};
    
    // go through the users tops
    for (var i = 0; i < usersTops.length; i++) {

        // if the bottoms match the chosen occasion ...
        if  ( usersTops[i].occasion === chosenOccasion
            // and if the occasion is FORMAL ...
            && chosenOccasion === "formal"
            //  and the bottoms match the final top color ...
            && ( usersTops[i].color === finalShoe.color
            // or the bottoms are a neutral color ... 
            || usersTops[i].neutral === true ) ) {

                // move matching formal bottoms to the options array
                // (we are not checking weather because all formal bottoms lengthhh should be long)
                optionsTops.push(usersTops[i]);

                // console.log(finalTops)

            } 

        // if the tops match the chosen occasion ...
        else if (((usersTops[i].occasion === chosenOccasion)
                // and the tops match the weather temperature ... 
                && (usersTops[i].lengthhh === temp))
                // and the tops color match the outfits shoes ...
                && ((usersTops[i].color === finalShoe.color)
                // or the tops color is neutral ...
                || (usersTops[i].neutral === true))) {
            
                    // move matching tops to the options array
                    optionsTops.push(usersTops[i]);

                    // console.log(finalTops)

                };

    };

// randomly pick tops from options array
finalTop = optionsTops[Math.floor(Math.random() * optionsTops.length)];    
console.log(finalTop);

};

outfitTop(chosenOccasion, temp, finalShoe);