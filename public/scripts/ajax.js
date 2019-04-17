$(function() {
    var $form = $('#tweetform');
    $form.on('submit', function () {
      event.preventDefault();
      console.log('Button works');
      let $formData = $form.serialize();
      console.log($formData)
      $.ajax('/tweets', { method: 'POST', data: $formData })
      .then(function (event) {
        console.log('Success: ', event);

      });
    });
  });