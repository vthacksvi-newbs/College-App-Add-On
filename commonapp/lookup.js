function extractXmlValue(id) {
	return {
		"container_ques_173": function() { // first name
			//return getxmlvalue(me.name.first)
			return "firstname"
		},
		"container_ques_174": function() { // middle name
			return "middlename"
		},
		"container_ques_175": function() { // middle name
			return "lastname"
		},
		"container_ques_176": function() { // suffix
			return null // no suffix
		},
		"container_ques_179": function() { // preferred name aka nickname
			return null // no nickname
		},
		"container_ques_177": function() { // former names?
			return "No"
		},
		"container_ques_178": function() { // former last name
			return null // no former last name
		},
		"container_ques_180": function() { // sex
			return "Male"
		},
		"container_ques_1901": function() { // gender identity
			return "" // or null, no additional gender identity
		},
		"container_ques_181": function() { // date of birth
			return new Date(2000, 1, 1)
		},
	}[id]()
}
