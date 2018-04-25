$(function() {
  $(".next").mousedown(function(e) {
    $(this).toggleClass("mouse-down");
  });

  $(".next").mouseup(function(e) {
    $(this).toggleClass("mouse-down");
  });

	$(".next").click(function() {
		$(".card").toggleClass("rise");		
	});	

	$(".next").click(function() {
		$(".card").toggleClass("disappear");		
	});	

});
