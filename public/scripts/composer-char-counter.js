$(function(){

    // char counter
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