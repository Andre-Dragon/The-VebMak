function burgerMenu(icon) {
  icon.classList.toggle("change");
}

$(function(){
  $('.menuBurger').on('click', function(){
    $('.top-menu__list').toggle(800, function(){
      if($(this).css('display') === 'none'){
      $(this).removeAttr('style');
  }
});
});
});