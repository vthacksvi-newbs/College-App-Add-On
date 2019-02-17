// main loop
console.log("start")
get_question_ids().forEach(id => {
	var val = extractXmlValue(id)
	console.log("val is + " + val)
	if (val !== undefined) {
		setValue(id, val);
	}
})

