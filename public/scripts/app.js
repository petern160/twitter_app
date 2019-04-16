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

const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  $(function(){

//   function renderTweets(tweets) {
//     // loops through tweets
//       // calls createTweetElement for each tweet
//       // takes return value and appends it to the tweets container
//   }
  
//   function createTweetElement(tweet) {
//     let $tweet = $('<article>').addClass('tweet');
//     // ...
//     return $tweet;
//   }
  
//  
    
    $.each(tweetData, function () {
    $.each(this, function (name, value) {
    console.log(name + '=' + value);
    });
    });

});
