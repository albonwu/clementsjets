'use strict';

var paused = false;
var i=0;
shiftIcon();
setInterval(shiftIcon,1500);
function shiftIcon() {
	if (!paused){
		$('#landing-icon').attr('src','./dist/imgs/landing-icons/'+i+'.svg');
		$('#landing-icon').css({"opacity":0});
		$('#landing-icon').animate({
			opacity: 1,
		}, 500);
		if (i==29) {i=0;}
		else i++;
	}
}