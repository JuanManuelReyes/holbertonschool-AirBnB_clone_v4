const idAmenity = [];

console.log("holaaa");

$(document).ready(function() {
	console.log("dogchaw");
	$("input[type=checkbox]").change(function(){
		if ($(this).prop("checked")) {
			idAmenity.push($(this).attr("id"))
			console.log("aaaaaa", idAmenity)
		}
		console.log("ayuda")
	})
})
