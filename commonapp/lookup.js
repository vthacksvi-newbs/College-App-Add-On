function extractXmlValue(id) {
	var responseFunc = {
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
		//
		//Adddress tab functions go here
		//
		
		"containter_ques_188": function() { //phone number type
			return "Mobile"
		},
		"container_ques_189": function() { //phone number	
			return "123-456-7890"
		},
		"container_ques_190": function() { //alternative phone number type
			return "Home" 
		},
		"container_ques_191": function() {
			// ?
		},
		"container_ques_192": function() { //religion
			return "Scientology"
		},
		"container_ques_193": function() { // other religion
			return null // no other religion
		},
		
		"container_ques_194": function() { //military status	
			return "None"
		},
		"container_ques_200": function() { //hispanic or latino?
			return "yes"
		},
		"container_ques_201": function() { //latino/hispanic identification
		return ['Central America', 'Cuba', "Spain"]
		},
		"container_ques_202": function() { //other hispanic identification
			return null // no additional ethnicity
		},
		"container_ques_203": function() { //race
			return ["White"]
		},
		"container_ques_206": function() { //Native american federally recognized tribe?
			return null // no tribe
		},
		"container_ques_1069": function() { // choose Tribe enrollment
			return null // no tribe
		},
		"container_ques_207": function() { // tribal enrollment number
			return null // no tribe
		},
		"container_ques_208": function() { //asian background		
			return null // not asian
		},
		"container_ques_209": function() { //other east asian
			return null // not asian
		},
		"container_ques_210": function() { //other south asian	
			return null // not asian
		},
		"container_ques_211": function() { //other southeast asian
			return null // not asian
		},
		"container_ques_212": function() { // describe your black background
			return null // not black
		},
		"container_ques_213": function() { //other black
			return null // not black
		},
		"container_ques_214": function() { // native hawaiian or pacific islander  
			return null // not pacific islander
		},
		"container_ques_215": function() { //other pacific islands
			return null // not pacific islander
		},
		"container_ques_216": function() { //white background
			return ["Europe"];
		},
		"container_ques_217": function() { //other white
			return null //not other white
		},
		"container_ques_218": function() { // country of birth
			return "United States of America"
		},
		"container_ques_219": function() { // city of birth
			return "Arlington"
		},
		"container_ques_220": function() { //state of birth (if United States or canada)
			return "Virginia"
		},
		"container_ques_221": function() { //years in United States
			return null //will do in future
		},
		"container_ques_222": function() { //years outside of United States
			return null // will do in future
		},
		///
		///
		//Language Functions...one day
		///
		///
		"container_ques_234": function() { //citizenship status
			return "U.S. Citizen or U.S. National"
		},
		"container_ques_235": function() { //SSN if applying for fasfa
			return "123-456-7890"
		},
		"container_ques_1021": function() { //Fee waver
			return "Yes"
		}
	}[id]

	if (responseFunc == undefined) {
		return null;
	}

	responseFunc()
}
