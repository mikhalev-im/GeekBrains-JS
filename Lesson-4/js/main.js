// Inspired by http://dimox.name/examples/universal-jquery-tabs-script/

(function($){
  function Tabs (container) {
    function eventHandler(e) {
      var index = tabs.filter('.menu__item_active').removeClass('menu__item_active').index();
      text.eq(index).hide();
      index = $(e.currentTarget).addClass('menu__item_active').index();
      text.eq(index).show();
    }

    var text = container.find('.text-wrapper > .text');
    var tabs = container.find('.menu > .menu__item').click(eventHandler);
  }
  
  $(document).ready(function () {
    var tab1 = new Tabs($('#container-1'));
    var tab2 = new Tabs($('#container-2'));
  });
})(jQuery);