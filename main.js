function main() {
	get_question_ids().forEach(id => {
		setValue(id, extractXmlValue(id));
	})
}

