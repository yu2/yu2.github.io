$(function() {
  var fileCtrl = $('input[multiple]')[0];
  $(fileCtrl).change(function() {
    myFiles = fileCtrl.files;
    for (var i = 0; i < myFiles.length; i++) {
      $('.output').append(myFiles[i].name + "<br>" + myFiles[i].type + "<br>" + myFiles[i].size + " bytes<br><br>");
    }
  });
});