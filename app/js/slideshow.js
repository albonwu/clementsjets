var slide = 1;
var autoScroll;
//define var total; total number of pics on import
//define var directory; string on import: "path/to/image/folder/#.extension"

function transition(forward) {
	if(forward == undefined) {
		forward = true;
	}
	slide = (slide + (forward ? 0 : total - 2)) % total + 1;
	$('#display').attr('src', directory.replace('#', slide));
	$('#display').stop();
	$('#display').css({"opacity":0});
	$('#display').animate({
		opacity: 1,
	}, 500);
	$('.slideshow').attr('height', $('#display').attr('height'));
}

$(document).ready(function() {
	$('#display').attr('src', directory.replace('#', '1'));
	autoScroll = setInterval(function() {
		transition(true);
	}, 7500);
	$('#display').click(transition);
	$('#right').click(transition);
	$('#left').click(function() {
		transition(false);
		clearInterval(autoScroll);
	});
});