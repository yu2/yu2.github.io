document.addEventListener("DOMContentLoaded", function() {
	port = document.querySelector(".port");
	updatePort();
})

function updatePort() {
	for (let i = 0; i < data.length; i++) {
		let question = document.createElement("div");
		let answer = document.createElement("div");
		question.innerText = data[i].q;
		answer.innerText = data[i].a;
		port.appendChild(question);
		port.appendChild(answer);
	}
}

data = [
{q: "intO reasons", a: ["research"]},
{q: "sigO reasons", a: ["tech challenge"]},
{q: "logO reasons", a: ["management?"]},
{q: "resume highlights", a: ["thing1", "thing2"]},
{q: "education & activities", a: ["thing1", "thing2"]}
];

