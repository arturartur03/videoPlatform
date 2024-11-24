const allVideos = document.querySelectorAll('video');
const sidebar = document.querySelector('.left-section');
const sidebarItems = document.querySelectorAll('.sidebar .item');
const catItems = document.querySelectorAll('.categories a');
const rightBarItems = document.querySelectorAll('.weekly .item');


allVideos.forEach(video => {
	video.addEventListener('mouseover', () => {
		video.play();
	});
	video.addEventListener('mouseleave', () => {
		video.pause();
	});
});

rightBarItems.forEach(rightItem => {
	rightItem.addEventListener('click', () => {
		rightBarItems.forEach(item => {
			item.classList.remove('active');
		});
		rightItem.classList.add('active');
	});
});

sidebarItems.forEach(sideItem => {
	sideItem.addEventListener('click', () => {
		sidebarItems.forEach(item => {
			item.classList.remove('active');
		});
		sideItem.classList.add('active');
	});
});

catItems.forEach(catItem => {
	catItem.addEventListener('click', () => {
		catItems.forEach(item => {
			item.classList.remove('active');
		});
		catItem.classList.add('active');
	});
});

window.addEventListener('scroll', () => {
	if(window.innerWidth <= 992){
		if(this.pageYOffset > 20){
			sidebar.style.paddingTop = '20px';
		} else {
			sidebar.style.paddingTop = '70px';
		}
	}
});


function darkmode(){
	const body = document.body;
	const wasDarkMode = localStorage.getItem('darkmode') === 'true';
    
	localStorage.setItem('darkmode', !wasDarkMode);
	body.classList.toggle('dark-mode', !wasDarkMode); 
    
}

document.querySelector('.dark-mode-a').addEventListener('click', function() {
	this.textContent = this.textContent === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
});

document.querySelector('.dark-mode-a').addEventListener('click', darkmode);


function onload(){
	document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

document.addEventListener('DOMContentLoaded', onload);