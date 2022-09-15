const idAmenity = {};

$(document).ready(function () {
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		// AÑADIMOS EL ID DEL AMENITY CAMBIADO A LA LISTA
		idAmenity[$(this).attr("data-id")] = $(this).attr("data-name");
		// console.log("aaaayuda", idAmenity)
	  } else {
		// ELIMINAMOS EL ELEMENTO ESPECIFICO QUE FUE AÑADIDO POR POSITION
		delete idAmenity[$(this).attr('data-id')];
	  }
		//SI NUESTRA LISTA RESULTA ESTAR VACÍA REMPLAZAMOS CON ESPACIO VACÍO   
	  if (idAmenity.length === 0)
	  	$('div.amenities h4').html("&nbsp;");
		//SINO REMPLAZAMOS LOS H4 CON CADA ID DE AMENITY 
	  else {
		$("div.amenities h4").text(Object.values(idAmenity).join(', '));
	  }
	});
  });
