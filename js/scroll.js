$('html, body').animate({
    scrollTop: $('#start_now').offset().top
  }, 2500, function(){

  // Add hash (#) to URL when done scrolling (default click behavior)
  window.location.hash = '#start_now';
  });

//   // Header fixed and Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 400) {
//       $('#up').fadeIn('slow');
//     } else {
//       $('#up').fadeOut('slow');
//     }
//   });

//   $('#up').click(function() {
//     $('html, body').animate({
//       scrollTop: $('#top_scroll').offset().top
//     }, 250, function(){
//     // Add hash (#) to URL when done scrolling (default click behavior)
//     window.location.hash = '#start_now';
//     });  
//   });