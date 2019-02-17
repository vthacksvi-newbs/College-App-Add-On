file.onchange =  function () {
	var loadedfile = file.files[0]

	if (loadedfile === undefined) {
		return
	}

	const reader = new FileReader();

	// This fires after the blob has been read/loaded.
	reader.addEventListener('loadend', (e) => {
		browser.storage.sync.set({
			"name": loadedfile.name,
			"file": e.target.result
		})
	});


	reader.readAsText(loadedfile.slice());
}

if (chrome !== undefined) {
	var browser = chrome
}

run.onclick = () => {
	browser.tabs.executeScript({ file: "/commonapp/iterate.js" })
	browser.tabs.executeScript({ file: "/commonapp/setvals.js" })
	browser.tabs.executeScript({ file: "/commonapp/lookup.js" })
	setTimeout(() => browser.tabs.executeScript({ file: "/commonapp/main.js" }), 100) // just in case

	setTimeout(() => browser.storage.sync.get(["file"], fileconts => browser.tabs.query({currentWindow: true, active: true}, (tabs) => tabs.forEach(tab => browser.tabs.sendMessage(tab.id, fileconts)))), 200) // just in case
}

window.onload = () => {
	console.log('run onload');
	browser.storage.sync.get(["name"],function(contents) { 
		console.log(contents);
		if (contents != {}){
			file.dispatchEvent( new Event("change"));
		}
	});
}
	
