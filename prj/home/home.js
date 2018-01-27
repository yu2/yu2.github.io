$(function() {
  //var menuWidth = $(".shelf").width() - $(".toggle-display").width();
  var menuWidth = $(".shelf").width();
  var shelfHidden = false;
  $(".toggle-display").click(function() {
    if (shelfHidden === false) {
      $(".shelf").animate({
        width: "0%",
        //left: "-=" + menuWidth,
        complete: function() {
          alert("done");
        }
      });
      shelfHidden = true;
      /*
      $('.main').css({
        "flex-grow": "1"
      });
      */
    } else {
      $(".shelf").animate({
        //left: "+=" + menuWidth
        width: "20%"
      });
      shelfHidden = false;
    }
  });
});
