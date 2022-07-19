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



/* sidebar  */
$('.collapse-sidebar-button').on('click', function() {
	$(".sidebar").toggleClass('sidebar-collapsed');
  $('#toggle-icon').toggleClass('rotate');
	$('.main').toggleClass('main-slide');
});


/* sidebar responsive  */
$(window).resize(function()
{
  if ($("#sidebar").hasClass("sidebar-collapsed")) {
    $('#toggle-icon').addClass('rotate');
  }

var $theWindowSize = $(this).width();
    if($theWindowSize < 900)
    {
      $("#sidebar").addClass('sidebar-collapsed');
      $('#main').addClass('main-slide');
    }
    if ($theWindowSize < 576)
    {
      $("#sidebar").removeClass('sidebar-collapsed').addClass('mobile');
      $('#main').removeClass('main-slide');
    }

});


/* Formulario mesa ayuda */
var linkB = '${boton.linkB.getData()}';
var linkB2 = '${boton2.linkB2.getData()}';

	$(document).ready(function(){

	    $(".tipo_ayuda").hide();

		$("#ayuda_select").on("change",function() {
            $(".tipo_ayuda").hide();
            $(".esconder").hide();
            $("#"+ $(this).val()).show();

        });
	});

  jQuery(document).ready(function($) {
    setTimeout(function() {
      $(".bts-popup").addClass("is-visible");
    }, 2000);
  
    //open popup
    $(".bts-popup-trigger").on("click", function(event) {
      event.preventDefault();
      $(".bts-popup").addClass("is-visible");
    });
  
    //close popup
    $(".bts-popup").on("click", function(event) {
      if (
        $(event.target).is(".bts-popup-close") ||
        $(event.target).is(".bts-popup")
      ) {
        event.preventDefault();
        $(this).removeClass("is-visible");
      }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
      if (event.which == "27") {
        $(".bts-popup").removeClass("is-visible");
      }
    });
  });
  