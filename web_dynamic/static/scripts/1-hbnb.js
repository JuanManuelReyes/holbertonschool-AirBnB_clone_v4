const idAmenity = [];
$(document).ready(function() {
	$("input[type=checkbox]").change(function(){
		if ($(this).prop("checked")) {
			idAmenity.push($(this).attr("id"))
			console.log("aaaaaa", idAmenity)
		}
		console.log("ayuda")
	})
})
