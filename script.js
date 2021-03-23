const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

setInterval(startGame, 1000/500);

// Variables 
var dots = [];
const states = document.querySelectorAll('[state]');

function startGame() {
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	dots.forEach(dot=> {
		dot.draw();
	})
}

function checkState(event, state) {
	// If paint box is checked
	if (event.buttons === 1 && state.value === 'paint') {
		const pickedColor = document.getElementById('color').value;
		const pickedRange = parseInt(document.getElementById('range').value);
		dots.push(new Dot(event.offsetX, event.offsetY, pickedColor, pickedRange));
	}

	// If erase box is checked
	if (event.buttons === 1 && state.value === 'erase') {
		dots.forEach((i, index)=> {
			if (i.posX - i.size < event.offsetX && event.offsetX < i.posX + i.size && i.posY - i.size < event.offsetY && event.offsetY < i.posY + i.size ) {
				dots.splice(index, 1)
			}
		});
	}
}

// Check when want to draw
['mousedown', 'mousemove'].forEach((eventName)=>{
	canvas.addEventListener(eventName, (event)=> {
		for (let state of states) {
			if (state.checked) {
				checkState(event, state);
			}
		}
	})	
})


// Check if label clicked
paint.addEventListener('click',()=>{
	states[0].checked = true;
});
erase.addEventListener('click',()=>{
	states[1].checked = true;
});

// Erase all dots
window.addEventListener('keydown', (event)=>{
	if (event.keyCode === 8){
		dots = [];
	}
})