var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
var buttonLength = document.getElementsByClassName('button').length;
console.log(buttonLength);


for (var n = 0; n <= buttonLength; n++) {
	var innerText = '';
	innerText = withButtonClass[n];
	console.log(innerText);
}