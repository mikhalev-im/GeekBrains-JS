(function ($) {

  $(document).ready(function () {
    $('input[type=submit]').on('click', function (e) {
      $.post('validator.php', 
          	{
          	  username: $('#username').val(),
          	  password: $('#password').val(),
          	  email: $('#email').val(),
          	  gender: $('#gender').val(),
          	  credit_card: $('#cred').val(),
          	  bio: $('#bio').val()
          	}, 
            function (data) {            	
          		if (data.result === true) {
          		  $('#result').html('Entered data is correct!');
          		}
          		else {
          		  data = data.error;
          		  $('#result').html('You have made mistakes in those fields:');
          		  $('#result').append("<ul></ul>");
          		  for (var key in data) {
          		    $('#result > ul').append("<li>" + key + ": " + data[key] + "</li>");
          		  }
          	  }
            }, 
            'json');
      e.preventDefault();
    });
  });

})(jQuery);
