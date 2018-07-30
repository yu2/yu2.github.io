document.addEventListener("DOMContentLoaded", function() {	
	timer = document.querySelector('#timeDisplay');
	//tLoop();
	function tLoop() {
		for (let i = 0; i < 1000000; i++) {
			if (i == 999999) {
				console.log("loop finished");
			}
		}
		cont();
	}
	function cont() {
		console.log("cont");
	}
});

var content = [];
function handleFiles(files) {
	t1 = performance.now();
	doWork(files);
	//return new Promise(function (resolve) {});
}

function doWork(files) {
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
	var a = true;
	const timer1 = performance.now();
	while(a) {
		if (content.length > 2000) {
			a = false;
			return new Promise(function(success) {});
		}	
		else if (performance.now() - timer1 > 1000) {
			console.log("timeout");
			break;
		}
	}
}

var handler = doWork();
handler.then(moreWork());
function moreWork() {
	const t2 = performance.now();
	console.log(content);
	updatePerformance(t1, t2);
}

function updatePerformance(t1, t2) {
	timer.innerHTML = t2 - t1;
}

//handler.then(downloadBlob(content));

function downloadBlob(data) {
	let blob = new Blob([data], {type: 'text/csv'});
	let url = URL.createObjectURL(blob);
	let elem = window.document.createElement('a');
	elem.href = url;
	elem.download = 'lemma.txt';
	elem.innerHTML = "Download";
	document.body.appendChild(elem);
	console.log(content);
	alert('here');
}
