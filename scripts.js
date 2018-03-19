var withButtonClass = document.getElementsByClassName('button')
console.log(withButtonClass)
var buttonLength = withButtonClass.length;
console.log(buttonLength)

for (var n = 0; n < buttonLength; n++) {
	console.log(withButtonClass[n].innerText)
}
