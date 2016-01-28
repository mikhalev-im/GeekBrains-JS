// Задание № 1

(function () {

  var collection = $('#first > div > h1');
  for (var i = 0 , len = collection.length; i < len; i++) {
    collection.eq(i).text('Замена №' + (i + 1));
  }

}());

// Задание № 2

(function () {
  var collection = $('#second > form > :input[type=text]');
  for (var i = 0 , len = collection.length; i < len; i++) {
    collection.eq(i).val('Замена №' + (i + 1));
  }
}());


// Задание № 3

(function () {
  var collection = $('#third > select > [value="2"]');
  $('#third').append('<p>Найденный текст: ' + collection.eq(0).text() + '</p>');
}());

// Задание № 4

(function () {
  var collection = $('#fourth > ul > li:nth-child(2)');
  collection.eq(0).wrapInner('<b></b>');
}());

// Задание № 5