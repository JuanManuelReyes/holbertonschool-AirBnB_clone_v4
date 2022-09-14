const idAmenity = [];
$( document ).ready(function() {
	$("input[type=checkbox]").change(function(){
		if ($(this).prop("checked")) {
			idAmenity.push($(this))
			console.log(idAmenity)
		}
		else{
			idAmenity.empty()
		}
	})
})
