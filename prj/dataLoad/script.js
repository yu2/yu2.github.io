document.addEventListener("DOMContentLoaded", function() {	
	timer = document.querySelector('#timeDisplay');
});

var content = [];
function handleFiles(files) {
	const t1 = performance.now();
	for (let i = 0; i < files.length; i++) {
		(function(file) {
			var reader = new FileReader();
			reader.onload = function(e) {
				let piece = e.target.result;
				content = content.concat(piece.split('\n'));
			}
			reader.readAsText(file);
		 })(files[i]);
	}
	const t2 = performance.now();
	updatePerformance(t1, t2);
	downloadBlob(content);
}

function updatePerformance(t1, t2) {
	timer.innerHTML = t2 - t1;
}

function downloadBlob(data) {
	let blob = new Blob([data], {type: 'text/csv'});
	let url = URL.createObjectURL(blob);
	let elem = window.document.createElement('a');
	elem.href = url;
	elem.download = 'lemma.txt';
	document.body.appendChild(elem);
	alert('here');
}
