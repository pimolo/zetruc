$(document).ready(function() {
  $('body').addClass('reverse');
  var calques = $('g');
  calques.each(function() {
    $(this).click(function() {
      var clicked = $(this);
      calques.removeAttr('class');
      $('body').toggleClass('reverse');
      $('#contact path').toggle('slow');
      $('#presentation text:last-child').toggle('slow');
      for (var i = calques.length - 1; i >= 0; i--) {
        if (clicked[0] !== $(calques)[i]) {
          $(calques[i]).attr('class', 'anim' + (i+1));
        }
      };
    });
  });
});
