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
if($(window).height() < 350 || $(window).width() < 350) {
	$('#landing-icon').remove();
}
var mclicks = 0
$('#landing-icon').click(function() {
	mclicks++;
	if(mclicks == 150) {
		paused = true
		$('#landing-icon').attr('src','./dist/imgs/landing-icons/mudkip.png');
		$('#landing-icon').css({"opacity":0});
		$('#landing-icon').animate({
			opacity: 1,
		}, 500);
	}
});