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


////menu lateral colapsable
var state = "expanded";
//Check if navbar is expanded or minimized and handle
//$('#navbar-toggler').click(function() {
   // if (state == "expanded") {
   //     $('.sidebar').addClass('collapse');
   //     state = "minimized";
    //} else {
    //    if (state == "minimized") {
    //        $('.sidebar').removeClass('collapse');
   //         state = "expanded";
    //    }
  //  }
//})

//menu lateral colapsable
$('.collapse-sidebar-button').on('click', function() {
	$(".sidebar").toggleClass('sidebar-collapsed');
	$('.main').toggleClass('main-slide');
  $('#toggle-icon').toggleClass('rotate');
});


var linkB = '${boton.linkB.getData()}';
var linkB2 = '${boton2.linkB2.getData()}';

	$(document).ready(function(){
	    
	    $(".tipo_ayuda").hide();

		$("#ayuda_select").on("change",function() {
            $(".tipo_ayuda").hide();
            $("#"+ $(this).val()).show();
    		
        });
	});

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }