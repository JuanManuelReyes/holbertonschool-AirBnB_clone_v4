const idAmenity = {};

$(document).ready(function () {
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		// AÑADIMOS EL ID DEL AMENITY CAMBIADO A LA LISTA, KEY VALUE
		idAmenity[$(this).attr("data-id")] = $(this).attr("data-name");
		// console.log("aaaayuda", idAmenity)
	  } else {
		// ELIMINAMOS POR CLAVE, ID DEL AMENITY
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
    $.getJSON('http://856a58936b7e.e8b08b41.hbtn-cod.io:5001/api/v1/status', function (data) {
      if (data.status === 'OK') {
          $('#api_status').addClass('available')
        } else {
          $('#api_status').removeClass('available')
        }
  	});

  $.ajax({
	type: "POST",
	url: "http://856a58936b7e.e8b08b41.hbtn-cod.io:5001/api/v1/places_search/",
	data: "{}",
	dataType: "json",
	contentType: "application/json",
	success: function(data){
		for(let i = 0; i < data.length; i++){
			$("section.places").append(`
				<article>
				<div class="title_box">
				  <h2>${data[i].name}</h2>
				  <div class="price_by_night">${data[i].price_by_night}</div>
				</div>
				<div class="information">
				  <div class="max_guest"> ${data[i].max_guest} Guest</div>
					  <div class="number_rooms"> ${data[i].number_rooms} Bedrooms</div>
					  <div class="number_bathrooms"> ${data[i].number_bathrooms} Bathrooms</div>
				</div>
				<div class="user">
				</div>
					<div class="description">${data[i].description}</div>
				</article>`);
		}
	}
  });
  
  $(':button').click(function () {
	$("article").remove();
	$.ajax({
		type: "POST",
		url: "http://856a58936b7e.e8b08b41.hbtn-cod.io:5001/api/v1/places_search/",
		data: JSON.stringify({amenities: (Object.keys(idAmenity)}),
		dataType: "json",
		contentType: "application/json",
		success: function(data){
			for(let i = 0; i < data.length; i++){
				$("section.places").append(`
					<article>
					<div class="title_box">
					  <h2>${data[i].name}</h2>
					  <div class="price_by_night">${data[i].price_by_night}</div>
					</div>
					<div class="information">
					  <div class="max_guest"> ${data[i].max_guest} Guest</div>
						  <div class="number_rooms"> ${data[i].number_rooms} Bedrooms</div>
						  <div class="number_bathrooms"> ${data[i].number_bathrooms} Bathrooms</div>
					</div>
					<div class="user">
					</div>
						<div class="description">${data[i].description}</div>
					</article>`);
			}
		}
	}   
	console.log(Object.keys(idAmenity));
});



});
