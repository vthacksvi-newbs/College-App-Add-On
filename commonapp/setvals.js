function SetValue_dropdown(d, v) {
	var actual_dropdown = d.querySelector("select")
	actual_dropdown.value = v

	$._data($(actual_dropdown)[0]).events["liszt:updated"][0].handler()

	var input = d.querySelector(".chzn-search > input")

	input.dispatchEvent(new KeyboardEvent("keyup", {keyCode: 32}))

	input.dispatchEvent(new KeyboardEvent("keyup", {
		keyCode: 13,
		bubbles: true,
		cancelable: true,
		which: 13,
	}))
}

function SetValue_radio(d, v) {
	var buttons = d.querySelectorAll("input[type=radio]") 
	for (var i in buttons) {
		var rb = buttons[i]
		var label = d.querySelector("label[for=" + rb.id + "]")
		if (label.innerText == v) {
			rb.click()
			return
		}
	}
}

function SetValue_short(d, v) {
	d.querySelector("input.input").value = v
}

function setValue(id, v) {
	var elem = document.getElementById(id)
	if (elem.classList.contains("short")) {
		return SetValue_short(elem, v)
	} else if (elem.classList.contains("singleSelect")) {
		return SetValue_dropdown(elem, v)
	} else if (elem.classList.contains("singleSelectRadio")) {
		return SetValue_radio(elem, v)
	}
}
