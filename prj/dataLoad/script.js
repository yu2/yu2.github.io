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
/*
function handleFiles(files) {
	t1 = performance.now();
	for (let i = 0; i < files.length; i++) {
		(function(file) {
			let reader = new FileReader();

			//set up handler for reading completion
			reader.onload = function(e) {
				let piece = e.target.result;
				content = content.concat(piece.split('\n'));
				if (i == files.length - 1) {
					moreWork();
				}
			};

			reader.readAsText(file);
		 })(files[i]);
	}
}
*/

function handleFiles(files) {
	t1 = performance.now();
	var i = 0;
	var target = files.length;
	doFile(files[i]);
	function doFile(file) {
		let reader = new FileReader();
		reader.onload = function(e) {
			let piece = e.target.result;
			pieceArray = piece.split('\n');
			content = content.concat(pieceArray);
			if (i < target - 1) {
				i++;
				doFile(files[i]);
			}
			else if (i == target - 1) {
				updatePerformance(t1)
				downloadBlob(content);
			}
		};
		reader.readAsText(file);
	}
}

//var handler = doWork();
//handler.then(moreWork());
function moreWork() {
	const t2 = performance.now();
	updatePerformance(t1, t2);
	downloadBlob(content);
}

function updatePerformance(t1) {
	const t2 = performance.now();
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
}
