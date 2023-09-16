function gotowhatsapp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var url = "https://wa.me/917358583060?text="
      + "First Name: " + firstName + "%0a"
      + "Last Name: " + lastName + "%0a"
      + "Email: " + email + "%0a"
      + "Phone Number: " + phoneNumber + "%0a"
      + "Subject: " + subject + "%0a"
      + "Message: " + message;

  window.open(url, '_blank').focus();
}

(function($) {

  "use strict";
  // JavaScript to filter the gallery

// Get all filter buttons and gallery items

const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".content");

// Add a click event listener to each filter button
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");

        // Loop through all gallery items
        galleryItems.forEach((item) => {
            const itemFilters = item.classList;

            // If the item has the selected filter or the "all" filter is selected, show it; otherwise, hide it
            if (filterValue === "all" || itemFilters.contains(filterValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



  const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
}


function gotowhatsapp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var url = "https://wa.me/917358583060?text="
      + "First Name: " + firstName + "%0a"
      + "Last Name: " + lastName + "%0a"
      + "Email: " + email + "%0a"
      + "Phone Number: " + phoneNumber + "%0a"
      + "Subject: " + subject + "%0a"
      + "Message: " + message;

  window.open(url, '_blank').focus();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

showSlide(currentSlide);


  // slide image animations whike scrolling
  var init_scroll_animations = function() {
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener("scroll", () => { 
      handleScrollAnimation();
    });
  }

  $('.navbar').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    // $(selector).find('.autocomplete').focus();
    $(this).toggleClass('active');

    e.preventDefault();
  });

  // close when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
      $('.search-toggle').removeClass('active');
      $('.navbar').removeClass('show');
    }
  });
    

   $(document).ready(function(){

      init_scroll_animations();

      Chocolat(document.querySelectorAll('.image-link'), {
                imageSize: 'contain',
                loop: true,
            })

      $('.testimonial-slider').slick({
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              arrows: false,
            }
          }
        ]
      }); 

      /*var scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
      });*/

    }); 

   $('#header').each(function(){
      var navOffset = $('#header').offset().top;

      jQuery(window).scroll(function () {
          
        if($(window).scrollTop() > navOffset + 300){
          $('#header').addClass('fixed');
        } else {
          $('#header').removeClass('fixed');
        } 

        if($(window).scrollTop() > navOffset + 600 ){
            $('#header').addClass('sticky');
          } else {
            $('#header').removeClass('sticky');
        }

      });

    });
  

})(jQuery);



