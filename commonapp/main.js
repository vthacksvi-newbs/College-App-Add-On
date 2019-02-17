// main loop

if (browser === undefined) {
	var browser = chrome
}

browser.runtime.onMessage.addListener(request => {
	console.log("start")
	console.log(request);
	get_question_ids().forEach(id => {
		var val = extractXmlValue(id)
		console.log("val is + " + val)
		if (val !== undefined) {
			setValue(id, val);
		}
	})
});

