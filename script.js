//animacion label formulario
$('input, textarea').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  $('input, textarea').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  })

//boton atras menu
  $('a#backbutton').on('click', function(e){
    e.preventDefault();
    window.history.back();
});

//busqueda tabla
$("#search").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#table tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});