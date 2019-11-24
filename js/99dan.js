var a = prompt('몇단을 알려드릴까요?');


for (var i = 1; i <= 9; i++){
	b = a * i;
	document.write(a + '*' + i + '=' + b);
	document.write('<br>');
}