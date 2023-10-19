// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Свой код пишем здесь

/*
 $(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width > 768) {
      $('.swiper-wrapper').slick('unslick');
    } else {
      $('.swiper-wrapper').not('.slick-initialized').slick({  
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      });
    }
  });
*/

/*
   $('.swiper-wrapper').slick({
    infinite: true,
    dots: false,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: false,
    responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
               breakpoint: 1144,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
            }
        },
    ]
  });
  */

  /*
       function slickify(){
            $('.swiper-wrapper').slick({
                arrows: false,
                autoplay: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1
            });
          }

          $(window).resize(function(){
              var $windowWidth = $(document).width();
              if ($windowWidth < 1144) {
                  slickify();   
              }else{
                  $('.swiper-wrapper').slick("unslick");
              }
          });
  */



   $('.slick').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    
    // adaptiveHeight: false,
    // variableWidth: false,
    responsive: [
    
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2, 
            }
        },
        {
            breakpoint: 570,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            }
        },
        {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    
  });

  $('.shop-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    
    // adaptiveHeight: false,
    // variableWidth: false,
    responsive: [
    
        {
            breakpoint: 1164,
            settings: {
              slidesToShow: 3, 
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              centerMode: false,
            }
        },
        {
            breakpoint: 489,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    
  });

// библиотка fansybox предварительно установить через nodemodules
// документация https://fancyapps.com/fancybox/getting-started/

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});