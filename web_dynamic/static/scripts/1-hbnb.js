const idAmenity = [];

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
		idAmenity.push($(this).data("id"))
		console.log("aaaayuda", idAmenity)
	  } else {
		idAmenity.splice(idAmenity.indexOf($(this), 1));
		console.log("chauu", idAmenity)
	  }
	});
  });

  console.log(idAmenity);