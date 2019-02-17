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

if (chrome !== undefined) {
	var browser = chrome
}

run.onclick = () => {
	browser.tabs.executeScript({file: "/commonapp/iterate.js"})
	browser.tabs.executeScript({file: "/commonapp/setvals.js"})
	browser.tabs.executeScript({file: "/commonapp/lookup.js"})
	setTimeout(() => browser.tabs.executeScript({file: "/commonapp/main.js"}), 100) // just in case
}
