function get_question_ids() {
	return [].slice.call(document.querySelectorAll(".questionlayout > div[id*=container_ques_]")).map(elem => elem.id)
}
