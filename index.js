var h1 = document.querySelector('h1');
function setName(){
	var name = prompt('Please Enter Your Name:');
	localStorage.setItem('name',name);
	h1.textContent = "Welcome "+ name.toUpperCase() +". Let's create fantastic Music";
}
if (!localStorage.getItem('name')) {
	setName();
} else{
	var storedName = localStorage.getItem('name');
	h1.textContent = "Welcome " + storedName.toUpperCase() + ". Let's create Fantastic Music";
}

window.addEventListener('keydown', function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio)return; //for keys not in the page
	audio.currentTime = 0; //rewind the time
	audio.play();
	key.classList.add('playing');
});
const keys = document.querySelectorAll('.key');
keys.forEach(function(key){
	return key.addEventListener('transitionend', function (e) {
		if (e.propertyName!=='transform') return;
		this.classList.remove('playing');
	})
} )
