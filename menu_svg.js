$(document).ready(function() {
  alert("Les technologies utilisées dans ce site ne sont pas très bien supportées par Firefox et IE.\nMerci d'utiliser un navigateur à jour tel que Google Chrome.");
  $('body').addClass('reverse');
  var calques = $('g');
  console.log(calques);
  calques.each(function() {
    $(this).click(function() {
      calques.removeAttr('class');
      var clicked = $(this);
      $('body').toggleClass('reverse');
      console.log(clicked[0]);
      // TODO : supprimer ckicked de calques[]
      for (var i = calques.length - 1; i >= 0; i--) {
        if (clicked[0] !== $(calques)[i]) {
          $(calques[i]).attr('class', 'anim' + (i+1));
        }
      };
    });
  });
});
