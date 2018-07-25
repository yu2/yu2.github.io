document.addEventListener("DOMContentLoaded", function() {	
});

function handleFiles(files) {
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		console.log(reader.readyState);
		reader.readAsText(file);
		console.log(file.name);
	}
}

var reader = new FileReader();
reader.onload = function(e) {
	let content = e.target.result;
	console.log(content);
	reader.abort();
}
