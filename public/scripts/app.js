/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $( ".textarea" ).keypress(function() {
//     console.log( "Handler for .keypress() called." );
//   });

//   $(".button").on('click', function() {
//     console.log(this); //The this keyword is a reference to the button
//   });



$(function(){

    
    var max_length = 140;
    $('#inputcount').keyup(function (){
        var textarea_length = $('#inputcount').val().length;
        var maxTweet = max_length - textarea_length;
        if(maxTweet < 0){
            $('#count').css('color', 'red')
        }
        $('#count').html(maxTweet);
    })

});
