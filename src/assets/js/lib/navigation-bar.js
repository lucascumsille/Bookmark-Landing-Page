
import $ from 'jquery'

    $( ".menu-icon" ).click(function() {
     // $("#desktop-bar").addClass("is-hidden");
     $("#desktop-bar").fadeOut(300);
    }); 


    $( ".close-button" ).click(function() {
      //$("#desktop-bar").removeClass("is-hidden");
      $("#desktop-bar").fadeIn(300);
    }); 