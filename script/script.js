// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: [
      {
        id: "counter",
        position: "center",
      },
      "zoom",
      "slideshow",
      "fullscreen",
      "thumbs",
      "close",
    ],
  }
})
// const myCarousel = new Carousel(document.querySelector(".carousel"), {
//   slides: [
//       {
//           html: "1",
//       },
//       {
//           html: "2",
//       },
//       {
//           html: "3",
//       },
//   ],
// });
const myCarousel = new Carousel(document.querySelector(".carousel"), {
  'slidesPerPage' : 'auto',
});