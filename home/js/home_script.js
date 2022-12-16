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


