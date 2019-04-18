/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


  $(function(){

    $('#btncomp').on('click', function () {
      $('#composebody').fadeToggle('slow');
      $('#inputcount').focus()
    })

    function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    function loadTweets() {
      console.log('is this here')
      $.ajax('/tweets', { method: 'GET' })
      .then(function (data) {
        console.log('test', data)
        renderTweets(data);
      });
   }
  

  //  function escape(str) {
  //   var div = document.createElement('div');
  //   div.appendChild(document.createTextNode(str));
  //   return div.innerHTML;
  // }
  // const safeHTML = `<p>${escape(inputcount)}</p>`;
 
      function renderTweets(tweets){
          for (let key in tweets){
            console.log('tweet', tweets[key])
            let $tweet = createTweetElement(tweets[key]);
            $('#tweetload').prepend($tweet)
          }
      }

      function convertMS( milliseconds ) {
        var day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hour: hour,
            minute: minute,
            seconds: seconds
        };
    }
      
      function createTweetElement(tweet) {
        const dateNow = Date.now()
        const createdAt = tweet.created_at
        const timeSince = dateNow - createdAt
        const difference = convertMS(timeSince)

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
        h2.text(tweet.user.name)
        h3.text(tweet.user.handle)
        
        pTwo.text(difference.day + ' days ago')
        pTwo.append(iOne)
        pTwo.append(iTwo)
        pTwo.append(iThree)


        p.text(tweet.content.text)
        return section;
      }
    
      // $(function() {
        var $form = $('#tweetform');
        $form.on('submit', function () {
          event.preventDefault();
          let inputLength = $('#inputcount').val().length;
          if (inputLength === 0 || inputLength === null){
            $('.error-alert').show()
          }else if (inputLength > 140) {
            $('.error-alert').show()
          }else{
            console.log('Button works');
            let $formData = $form.serialize();
            console.log($formData)
            $.ajax('/tweets', { method: 'POST',
             data: $formData,
             success: function() {
              loadTweets();
            }
             })
           
           
    
          }
    
    
        
        });
      // });
    
loadTweets()
     
      
});
