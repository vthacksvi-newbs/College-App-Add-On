function toText() {
	var file = document.getElementById("file").files[0]; //for input type=file
	var reader=new FileReader();
	reader.onload = function(e) {}
	reader.readAsText(file);
	var error = reader.error;
	var texte=reader.result;
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(texte,"text/xml");
	console.log(texte);
}

//file.addEventListener("change", toText);
