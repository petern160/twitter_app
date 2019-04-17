$(function() {
    var $form = $('#tweetform');
    $form.on('submit', function () {
      event.preventDefault();
      let inputLength = $('#inputcount').val().length;
      if (inputLength === 0 || inputLength === null){
        alert("tweet cannot be empty");
      }else if (inputLength > 140) {
        alert('you cannot have more then 140 letters')
      }else{
        console.log('Button works');
        let $formData = $form.serialize();
        console.log($formData)
        $.ajax('/tweets', { method: 'POST', data: $formData })
        .then(function (event) {
          console.log('Success: ', event);
  
        });

      }


    
    });
  });

  