$(function() {
  $(".next").mousedown(function(e) {
    $(this).toggleClass("mouse-down");
  });

  $(".next").mouseup(function(e) {
    $(this).toggleClass("mouse-down");
  });
  
  var order = 12;
	$(".next").click(function() {
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
});

function pauseAnim() {
  $(".card").css("transition", "none");
}

function resumeAnim() {
  $(".card").css("transition", "opacity 1s, top 1s");
}
