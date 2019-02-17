// main loop

if (browser === undefined) {
	var browser = chrome
}

browser.runtime.onMessage.addListener(request => {
	console.log("start")
	var xml = textToXml(request.file)
	console.log(xml);
	get_question_ids().forEach(id => {
		var val = extractXmlValue(xml, id)
		console.log("val is + " + val)
		if (val !== undefined) {
			setValue(id, val);
		}
	})
});

