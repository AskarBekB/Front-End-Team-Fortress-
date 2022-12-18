// // let menu = document.getElementById('#menu-icon')[0];
// // let navbar = document.getElementsByClassName('navbar')[0];

// // menu.addEventListener('click', () => {
// //     document.getElementById('nav').style.display = 'block';
// // });

// function menu_icon_toggle(){
//     document.getElementById('nav').style.display = 'block';
// }

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	
	navbar.classList.toggle('open');
}

let slides = document.querySelectorAll('.container-slides');
let index = 0;

function next(){
	slides[index].classList.remove('active');
	index = (index+1)%slides.length;
	slides[index].classList.add('active');

}
function prev(){
	slides[index].classList.remove('active');
	index = (index-1 + slides.length)%slides.length;
	slides[index].classList.add('active');

}


function video1(){
	var video1 = document.getElementById('video1');
	video1.style.visibility = 'visible';
}
function close_video1(){
	var video1 = document.getElementById('video1');
	video1.style.visibility = 'hidden';
}

function video2(){
	var video1 = document.getElementById('video2');
	video1.style.visibility = 'visible';
}
function close_video2(){
	var video1 = document.getElementById('video2');
	video1.style.visibility = 'hidden';
}

function video3(){
	var video1 = document.getElementById('video3');
	video1.style.visibility = 'visible';
}
function close_video3(){
	var video1 = document.getElementById('video3');
	video1.style.visibility = 'hidden';
}

function video4(){
	var video1 = document.getElementById('video4');
	video1.style.visibility = 'visible';
}
function close_video4(){
	var video1 = document.getElementById('video4');
	video1.style.visibility = 'hidden';
}

