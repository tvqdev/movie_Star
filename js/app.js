$(document).ready(() => {
     $('#hamburger-menu').click(() => {
          $('#hamburger-menu').toggleClass('active')
          $('#nav-menu').toggleClass('active')    
     })

     // SETTING CAROUSEL

     let navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"]
     $('#hero-carousel').owlCarousel({
          items: 1,
          dots: false,
          loop: true,
          nav: true,
          navText: navText,
          autoplay: true,
          autoplayHoverPause:true,
     })

     $('#top-movies-slide').owlCarousel({
          items: 2,
          dots: false,
          loop: true,
          autoplay: false,
          autoplayHoverPause: true,
          responsive: {
               500: {
                    items: 3
               },
               1280: {
                    items: 4
               },
               1600: {
                    items: 6
               }
          }
     })
})