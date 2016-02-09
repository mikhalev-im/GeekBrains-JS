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
                	  $(document.body).append(data + " ");
            }, 
            'html');
      e.preventDefault();
    });
  });

})(jQuery);
