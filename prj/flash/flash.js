$(function() {
  $(".next").mousedown(function(e) {
    $(this).toggleClass("mouse-down");
  });

  $(".next").mouseup(function(e) {
    $(this).toggleClass("mouse-down");
  });
  
  var order = 12;
	$(".next").click(function(e) {
		e.stopPropagation();
	  resumeAnim();
	  if (order === 12) {
	    $("#card1").css("opacity", 0);
  		$("#card1").css("top", "0vh");
  		$("#card1").on("transitionend", function() {
  		  pauseAnim();
  		  $(this).css("top", "75vh");
  		  $(this).off("transitionend");
  		});
  		
  		$("#card2").css("opacity", "100");
  		$("#card2").css("top", "25vh");
  		order = 21;
	  } else {
	    $("#card2").css("opacity", 0);
  		$("#card2").css("top", "0vh");
  		$("#card2").on("transitionend", function() {
  		  pauseAnim();
  		  $(this).css("top", "75vh");
  		  $(this).off("transitionend");
  		});
  		
  		$("#card1").css("opacity", "100");
  		$("#card1").css("top", "25vh");
  		order = 12;
	  }
		
	});

	$(".card").click(function() {
		let id = $(this)[0].id;
		let backID = (id.length === 5) ? id + "b" : id.substring(0, id.length - 1); 
		$(this).css("transform", "rotate3d(0, 1, 0, 90deg)");
		$(this).on("transitionend", function() {
			$(this).css("display", "none");
			$("#" + backID).css("transform", "rotate3d(0, 1, 0, 0deg)");
			$(this).off("transitionend");
			$("#" + backID).on("transitionend", function() {
				$("#" + id).css("display", "flex");
				$("#" + id).off("transitionend");
			});
		});
	});
});

function pauseAnim() {
  $(".card").css("transition", "none");
}

function resumeAnim() {
  $(".card").css("transition", "opacity 1s, top 1s");
}
