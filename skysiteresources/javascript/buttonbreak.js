function buttonbreak(buttonid) {
	document.getElementById(buttonid).style.opacity = 0;
	document.getElementById(buttonid).style.transform = "rotate(-20deg) translateY(300px) translateX(-55px)";
	document.getElementById(buttonid).style.pointerEvents = "none"
}