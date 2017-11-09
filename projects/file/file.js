var reader = new FileReader();

$(function() {
  $('input[multiple]').change(handleFiles);
  
  

});

function handleFiles() {
  var fileList = this.files;
  for (var i = 0; i < fileList.length; i++) {
    $('.output').append(fileList[i].name + "<br>" + fileList[i].type + "<br>" + fileList[i].size + " bytes<br><br>");
    reader.readAsText(fileList[i]);
  }
}
  

reader.onload = function(e) {
  var contents = e.target.result;
  $('.output').append(contents);
};