/*

*/
function SetValue_dropdown(d, v) {
	if (v === null) {
		v = ""
	}
	var actual_dropdown = d.querySelector("select")
	actual_dropdown.value = v

	// $._data($(actual_dropdown)[0]).events["liszt:updated"][0].handler()
	// would be nice if I could disable xray...

	var input = d.querySelector(".chzn-search > input")

	if (v !== "") {
		input.dispatchEvent(new KeyboardEvent("keyup", {keyCode: 32}))

		input.dispatchEvent(new KeyboardEvent("keyup", {
			keyCode: 13,
			bubbles: true,
			cancelable: true,
			which: 13,
		}))
	}
}

function SetValue_radio(d, v) {
	var buttons = d.querySelectorAll("input[type=radio]") 
	for (var i in buttons) {
		var rb = buttons[i]
		var label = d.querySelector("label[for=" + rb.id + "]")
		if (label == null) {
			return;
		}
		if (label.innerText == v) {
			rb.click()
			return
		}
	}
}

function SetValue_short(d, v) {
	console.log("value is " + v)
	var input = d.querySelector("input.input")
	input.value = v
	$(input).blur()
}

function SetValue_date(d, v) {
	SetValue_dropdown(d.querySelector("label[aria-label*=Month]"), String(v.getMonth() + 1).padStart(2, "0"))
	SetValue_dropdown(d.querySelector("label[aria-label*=Day]"), String(v.getDate()).padStart(2, "0"))
	SetValue_dropdown(d.querySelector("label[aria-label*=Year]"), String(v.getFullYear()))
}

function setValue(id, v) {
	var elem = document.getElementById(id)
	if (elem.classList.contains("short")) {
		return SetValue_short(elem, v)
	} else if (elem.classList.contains("singleSelect")) {
		return SetValue_dropdown(elem, v)
	} else if (elem.classList.contains("singleSelectRadio")) {
		return SetValue_radio(elem, v)
	} else if (elem.classList.contains("date")) {
		return SetValue_date(elem, v)
	}
}
