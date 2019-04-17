/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



  $(function(){

    function loadTweets () {
      var $form = $('#tweetform');
      $form.on('submit', function () {
        event.preventDefault();
        console.log('GET REQUEST');
        let $formData = $form.serialize();
        console.log($formData)
        $.ajax('/tweets', { method: 'GET', data: $formData })
        .then(function (event) {
          console.log('Success: ', event);
  
        });
      });
    }

      function renderTweets(tweets){
          for (let key in tweets){
            let $tweet = createTweetElement(tweets[key]);
            $('.container').append($tweet)
          }
      }

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
        "created_at": new Date()
      }

      
      function createTweetElement(tweet) {
        const section = $('<section>').addClass("tweets")
        const div1 = $('<div>').addClass("tweetsmade")
        const div2 = $('<div>').addClass("tweetbackground")
        const img = $('<img>').addClass("avatar")
        const h2 = $('<h2>').addClass("twitterhandle")
        const h3 = $('<h3>').addClass("twitteruser")
        const p = $('<p>').addClass("tweetcontext")
        const pTwo = $('<div>').addClass("daycount")
        const iOne = $('<i>').addClass("fas fa-flag")
        const iTwo = $('<i>').addClass("fas fa-retweet")
        const iThree = $('<i>').addClass("fas fa-heart")



       
        
        section.append(div1)
        div1.append(div2)
        div2.append(img)
        div2.append(h2)
        div2.append(h3)

        
        div1.append(p)
        div1.append(pTwo)


    


        iOne.attr('id', 'icon')
        iTwo.attr('id', 'icon')
        iThree.attr('id', 'icon')
        img.attr('src', tweet.user.avatars.small)
        h2.html(tweet.user.name)
        h3.html(tweet.user.handle)
        pTwo.html(tweet.created_at)
        pTwo.append(iOne)
        pTwo.append(iTwo)
        pTwo.append(iThree)


        p.html(tweet.content.text)
        return section;
      }
    
      const data = [
        {
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
          "created_at": new Date()
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": new Date()
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": new Date()
        }
      ];

    

        
          // calls createTweetElement for each tweet
          // takes return value and appends it to the tweets container
      
          renderTweets(data);

      
});
