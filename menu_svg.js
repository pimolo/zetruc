var calques = $('g');
console.log(calques);
calques.each(function() {
  $(this).click(function() {
    calques.removeAttr('class');
    var clicked = $(this);
    console.log(clicked[0]);
    // TODO : supprimer ckicked de calques[]
    for (var i = calques.length - 1; i >= 0; i--) {
      if (clicked[0] !== $(calques)[i]) {
        $(calques[i]).attr('class', 'anim' + (i+1));
      };
    };
  });
});
