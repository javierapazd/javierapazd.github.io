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


$("#filtro").keyup(function () {
  var value = this.value.toLowerCase().trim();

  $("table tr").each(function (index) {
      if (!index) return;
      $(this).find("td").each(function () {
          var id = $(this).text().toLowerCase().trim();
          var not_found = (id.indexOf(value) == -1);
          $(this).closest('tr').toggle(!not_found);
          return not_found;
      });
  });
});