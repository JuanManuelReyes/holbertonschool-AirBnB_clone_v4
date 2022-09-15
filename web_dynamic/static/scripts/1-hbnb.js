const idAmenity = [];

$(document).ready(function () {
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		// AÑADIMOS EL ID DEL AMENITY CAMBIADO A LA LISTA
		idAmenity.push($(this).data("name"));
		// console.log("aaaayuda", idAmenity)
	  } else {
		// ELIMINAMOS EL ELEMENTO ESPECIFICO QUE FUE AÑADIDO POR POSITION
		idAmenity.splice(idAmenity.indexOf($(this), 1));
	  }
		//SI NUESTRA LISTA RESULTA ESTAR VACÍA REMPLAZAMOS CON ESPACIO VACÍO   
	  if (idAmenity.length === 0)
	  	$('div.amenities > h4').html("&nbsp;");
		//SINO REMPLAZAMOS LOS H4 CON CADA ID DE AMENITY 
	  else {
		$("div.amenities > h4").text(Object.values(idAmenity).join(', '));
	  }
	});
  });
