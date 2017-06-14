'use strict';

var paused = false;
var i = 0;

function shiftIcon() {
	if(!paused) {
		$('#landing-icon').attr('src','./dist/imgs/landing-icons/'+i+'.svg');
		$('#landing-icon').css({"opacity":0});
		$('#landing-icon').animate({
			opacity: 1,
		}, 500);
		i = (i + 1) % 30
	}
}
shiftIcon();
setInterval(shiftIcon, 1500);