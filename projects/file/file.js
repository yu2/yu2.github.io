$(function() {
  $('input[multiple]').change(handleFiles);
  alert("hi");
});

function handleFiles() {
  var fileList = this.files;
  for (var i = 0; i < fileList.length; i++) {
    $('.output').append(fileList[i].name + "<br>" + fileList[i].type + "<br>" + fileList[i].size + " bytes<br><br>");
    reader.readAsText(fileList[i]);
  }
}
  
var reader = new FileReader();
reader.onload = function(e) {
  var contents = e.target.result;
  var lines = contents.split('\n');
  for (var i = 0; i < lines.length; i++) {
    $('.output').append(lines[i] + "<br>");
    console.log(i);
  }
  
};