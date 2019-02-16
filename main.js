function main() {
	get_question_ids().forEach(id => {
		setValue(id, extractXmlValue(id));
	})
}
function onUploadFile(file_input) {
	var file = file_input.files[0]

	const reader = new FileReader();

	// This fires after the blob has been read/loaded.
	reader.addEventListener('loadend', (e) => {
		browser.storage.sync.set({
			"name": file.name,
			"file": e.target.result
		})
	});


	reader.readAsText(file.slice())
}

document.addEventListener("DOMContentLoaded", () => {
	browser.tabs.create({
		url: "/fullscreen.html"
	})
	window.close()
});
