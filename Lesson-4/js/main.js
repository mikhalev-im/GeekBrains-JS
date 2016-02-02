(function($){
  function Tabs (container) {
    function eventHandler(e) {
      var index = tabs.filter('.menu__item_active').index();
      tabs.eq(index).removeClass('menu__item_active');
      text.eq(index).hide();
      $(e.currentTarget).addClass('menu__item_active');
      index = tabs.index(e.currentTarget);
      text.eq(index).show();
    }

    var text = container.children('.text-wrapper').children('.text');
    var tabs = container.children('.menu').children('.menu__item');
    for (var i = 0, len = tabs.length; i < len; i++) {
      tabs.eq(i).click(eventHandler);
    }
  }
  
  $('document').ready(function () {
    var tab1 = new Tabs($('#container-1'));
    var tab2 = new Tabs($('#container-2'));
  });
})(jQuery);