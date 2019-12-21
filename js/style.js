var lis = document.getElementsByClassName('active');
var btn = document.getElementById('confirm');
var loca = document.getElementById('goGoogle');

function myAct (){
	lis[2].style.color='red';
	lis[1].style.textDecoration='underline';
	lis[0].style.opacity=50+'%';
	
	for (var i=0; i<lis.length; i++){
		lis[i].style.fontSize=3+'rem';
		lis[i].style.fontWeight='bold';
	}	
}

function myLocation (){
	var openWindow = window.open('about:blank');
	openWindow.location.href = 'http://google.com';
}

btn.addEventListener('click', myAct);
loca.addEventListener('click', myLocation);