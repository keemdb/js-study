var btnAppend = document.getElementById('append');
var btnBefore = document.getElementById('before');

function appendChild (){
	var wrap = document.getElementById('wrap');
	var li = document.createElement('li');
	var text = document.createTextNode('test3');
	
	li.appendChild(text);
	wrap.appendChild(li);
}

function beforeChild (){
	var wrap = document.getElementById('wrap');
	var li = document.createElement('li');
	var text = document.createTextNode('test3');
	
	li.appendChild(text);
	wrap.insertBefore(li, wrap.firstChild);
}

btnAppend.addEventListener('click', appendChild);
btnBefore.addEventListener('click', beforeChild);