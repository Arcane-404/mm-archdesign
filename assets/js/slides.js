$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots: true,
  infinite: true,
  speed: 300
})

$(window).resize((e) => {
  $('.slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange',(e) => {
  $('.slider').not('.slick-initialized').slick('resize');
});

// /* Target element */
// const $slider = $('.slider')
// let isAlreadySet = false
// /* Slider settings */
// const settings = {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // dots: true,
//   infinite: true,

//   // respondTo:'window',
//   // arrows:true,
//   // mobileFirst:false,
//   responsive: [
//     { 
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         infinite: true
//       }
//     }, 
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         dots: true
//       }
//     }, 
//     {
//       breakpoint: 300,
//       settings: "unslick" // destroys slick
//     }
//   ],
    

//   speed: 300,
// }

// /* Check when browser window gets resized */
// $(window).on('resize', (e) => {
//   const isDesktop = window.matchMedia('(min-width: 900px)').matches
//   const isUnslicked = $slider.hasClass('slick-initialized')
//   console.log(isDesktop, isUnslicked, $(window).width() >= 900)

//   /* If screen is above mobile breakpoint unslick the slider */
//   if (isDesktop && isUnslicked) {
//     console.log('SECOND PASS')
//     // isAlreadySet = false
//     return $slider.slick('unslick')
//   }
//   /* Initialize the slider if it is not already initialized */
//   else if (!isUnslicked) {
//     console.log('FIRST PASS')
//     // isAlreadySet = true
//     return $slider.slick(settings)
//   }
// })
// /* Active once page is initially load */
// $(window).trigger('resize')