(function ($) {

  $(document).ready(function () {
    $('#birthday').datepicker({
      dateFormat: "yy-mm-dd",
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      firstDay: 1
    });

    $('input[type=submit]').on('click', function (e) {
      $.post('validator.php', 
          	{
          	  username: $('#username').val(),
          	  password: $('#password').val(),
          	  email: $('#email').val(),
          	  gender: $('#gender').val(),
          	  credit_card: $('#cred').val(),
          	  bio: $('#bio').val(),
              birth: $('#birthday').val()
          	}, 
            function (data) {            	
          		if (data.result === true) {
                $('#progress').progressbar({value: 100});
          		  $('#result').dialog({
                  title: 'Data is correct!',
                  width: 300
                });
                $('#result').html('Entered data is correct!');
          		}
          		else {
          		  data = data.error;
          		  $('#progress').progressbar({
                  value: (700 - 100*Object.keys(data).length) / 7
                });
                $('#result').dialog({
                  title: 'Wrong data!',
                  width: 600
                });
                $('#result').html('You have made mistakes in those fields:');
          		  $('#result').append("<ul></ul>");
          		  for (var key in data) {
          		    $('#result > ul').append("<li>" + key + ": " + data[key] + "</li>");
                  if (key === 'Credit Card') {
                    $('input[name="Credit"').effect('bounce');
                  }
                  else {
                    $('input[name=' + key + ']').effect('bounce');
                  }
                }
          	  }
            }, 
            'json');
      e.preventDefault();
    });
  });

})(jQuery);
