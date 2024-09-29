document.getElementById("greetings").innerHTML = "<span>howdy hey, internet stranger.</span>";

var messages = [
	", 812",
	", it's all part of the story.",
	", azubah will show itself to you one day.",
	" to brush your teeth",
	" jeremy"
];
function secret() {
if (Math.random() < 0.005) {
	var prior = document.getElementById("f").innerHTML;
	document.getElementById("f").innerHTML = "<span style=\"color:#FFFFFF;font-weight:bold;\">OPÉRE WILL REVEAL ME\nI AM NOT MISSING FROM THE LIST\nI AM MERELY FORSAKEN\nSAY MY NAME AND I WILL APPEAR</span>"
	setTimeout(() => { document.getElementById("f").innerHTML = prior; }, 3000); }
else {
	min = Math.ceil(0);
	max = Math.floor(messages.length);
	var prior = document.getElementById("secrets").innerHTML;
	document.getElementById("secrets").innerHTML = (messages[Math.floor(Math.random() * (max - min) + min)]);
	setTimeout(() => { document.getElementById("secrets").innerHTML = prior; }, 3000); }
}