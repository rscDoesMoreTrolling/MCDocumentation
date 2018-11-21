$(document).ready(function () {
	document.getElementById("DefaultOpened").click();
});
function opendoc(evt, docName) {
	var i,
	documentation,
	doctab;
	documentation = document.getElementsByClassName("documentation");
	for (i = 0; i < documentation.length; i++) {
		documentation[i].style.display = "none";
	}
	doctab = document.getElementsByClassName("doctab");
	for (i = 0; i < doctab.length; i++) {
		doctab[i].className = doctab[i].className.replace("active", "");
	}
	document.getElementById(docName).style.display = "block";
	evt.currentTarget.className += " active";
}
