let h3 = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('body');
let hex = document.querySelector('#hex');

function colorCh(){
    body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
    h3.textContent = body.style.background + ";";    
}

function convert(){
	let rgba1 = color1.value;
	let rgba2 = color2.value;
	h3.textContent = 'linear-gradient(to right, ' + rgba1 + ',' + rgba2 + ')';
}

hex.addEventListener('click', convert);

color1.addEventListener('input', colorCh);

color2.addEventListener('input', colorCh)
