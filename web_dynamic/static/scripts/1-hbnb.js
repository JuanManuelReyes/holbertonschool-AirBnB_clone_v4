const idAmenity = {};


// $(document).ready(function() {
// 	$("input[type=checkbox]").change(function(){
// 		if ($(this).prop("checked")) {
// 			idAmenity.push($(this).attr("id"))
// 			console.log("aaaaaa", idAmenity)
// 		}
// 	})
// })

$(document).ready(function () {
	let checkedAmenities = {};
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		idAmenity[$(this).data('id')] = $(this).data('name');
		console.log("aaaayuda", idAmenity)
	  } else {
		delete idAmenity[$(this).data('id')];
		console.log("chauu")
	  }
	});
  });