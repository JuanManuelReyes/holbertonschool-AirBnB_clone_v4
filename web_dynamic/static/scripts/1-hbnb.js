const idAmenity = [];

$(document).ready(function () {
	let checkedAmenities = {};
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		// AÑADIMOS EL ID DEL AMENITY CAMBIADO A LA LISTA
		idAmenity.push($(this).data("id"))
		// console.log("aaaayuda", idAmenity)
	  } else {
		// ELIMINAMOS EL ELEMENTO ESPECIFICO QUE FUE AÑADIDO POR POSITION
		idAmenity.splice(idAmenity.indexOf($(this), 1));
	  }
	});
  });
