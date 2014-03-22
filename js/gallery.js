(function() {
    var margin_left = parseInt($('img[class*="photo"]').parent().css('marginLeft'), 10),
      margin_top = parseInt($('img[class*="photo"]').parent().css('marginTop'), 10);
  
  // Initial position values for images
  $('img[class*="photo"]').each(function(index) {
    var position = $(this).parent().position()

    $(this).css({
      "position": "absolute",
      "left": position.left + margin_left, 
      "top": position.top + margin_top
    });
  });

  // Toggle class between clicked images
  $('img[class*="photo"]').on('click', function() {
    var is_photo = $(this).hasClass('photo');
    
    remove_large_photo();
    if(is_photo){
      $(this).toggleClass('photo photo_fullsize').css({"left": 200, "top": 0});
    }    
  });

  // Reset position for fullsize photo
  function remove_large_photo() {
    if ($('.photo_fullsize').length) {
      var position = $('.photo_fullsize').parent().position()
      $('.photo_fullsize').toggleClass('photo_fullsize photo').css({
        "left": position.left + margin_left, 
        "top": position.top + margin_top
      });
    }
  }
}());