function dynamicHeight() {
	const header = document.getElementById('header').clientHeight;
	const chat = document.getElementById('chat');
	const scrolled = window.scrollY;
	chat.setAttribute('style', 'height: calc((100vh - ' + header + 'px) + ' + scrolled + 'px)');
}

window.onscroll = function (e) {
	dynamicHeight();
};
