function textToXml(text) {
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(text,"text/xml");
	return xmlDoc;
}
// function getText(file) {
	// var file = document.getElementById("file").files[0]; //for input type=file
	// var reader=new FileReader();
	// reader.onload = function(e) {}
	// reader.readAsText(file);
	// var error = reader.error;
	// var texte=reader.result;
// }

//file.addEventListener("change", toText);
