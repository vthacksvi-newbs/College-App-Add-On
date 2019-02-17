// main loop
console.log("start")
get_question_ids().forEach(id => {
	console.log(id);
	setValue(id, extractXmlValue(id));
})

