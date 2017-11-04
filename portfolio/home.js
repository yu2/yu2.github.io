$(function() {
  var menuWidth = $(".shelf").width() - $(".toggle-display").width();
  var shelfHidden = false;
  $(".toggle-display").click(function() {
    if (shelfHidden === false) {
      $(".shelf").animate({
        left: "-=" + menuWidth
      });
      shelfHidden = true;
    } else {
      $(".shelf").animate({
        left: "+=" + menuWidth
      });
      shelfHidden = false;
    }
    
    
  });
});