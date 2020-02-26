
// $('#recipeCarousel').carousel({
//     interval :2000
// })
  
//   $('.carousel .carousel-item').each(function(){
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       for (var i=0;i<2;i++) {
//           next=next.next();
//           if (!next.length) {
//               next = $(this).siblings(':first');
//             }
          
//           next.children(':first-child').clone().appendTo($(this));
//         }
//   });
  
  // start loop
        var div = $("<div>");
            div.attr('class', "carousel-item active")
         var  img = $("<img>")
            img.attr('class', 'd-block col-3 img-fluid')
            img.attr('src', arrayname[i].image)

            div.append(img)
            $('#caro').append(div)
        // loop end 