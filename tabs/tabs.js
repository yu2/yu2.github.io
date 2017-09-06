$(document).ready(function(){
  var tabbed = false;
  var tabbedId;
 
  $("#tab1, #tab2, #tab3").click(function() {
    var num = this.id.substring(3);
    var contentId = "#content" + num;

    if (tabbed === true) {
      $(tabbedId).css("zIndex", "-1");
      $(tabbedId).delay(500).slideUp(0, function(){});
    }
    $(contentId).css("zIndex", "0");
    $(contentId).slideDown(500, function(){});
    tabbed = true;
    tabbedId = contentId;
    $("#output").html($("#content1").css("zIndex") + " " + $("#content2").css("zIndex") + " " + $("#content3").css("zIndex"));
  });
});