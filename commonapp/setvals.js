function setdropdowntovalue(n, v) {
	var selector = 'select[name^="Controls[' + n + '"]'
	var actual_dropdown = $(selector)[0]
	actual_dropdown.value = v
	$._data($(actual_dropdown)[0]).events["liszt:updated"][0].handler()
	var input = $(selector + ' + div input')[0]
	input.dispatchEvent(new KeyboardEvent("keyup", {
		keyCode: 13,
		bubbles: true,
		cancelable: true,
		which: 13,
	}))
	input.dispatchEvent(new KeyboardEvent("keyup", {
		keyCode: 13,
		bubbles: true,
		cancelable: true,
		which: 13,
	}))
}

