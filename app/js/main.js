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
var clicks = 0;
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
	clicks++;
	if(clicks == 100) {
		console.log('yoy');
	}
	if(clicks == 101) {
		console.log('yike');
	}
});

if (window.addEventListener) {
	var kkeys = []
	var konami = "38,38,40,40,37,39,37,39,66,65,13";
	var snacks = "83,78,65,67";
	window.addEventListener("keydown", function(e){
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf( konami ) >= 0) {
			if(clicks == 100) {
				window.location = '/ha-ha-ha-now-you-will-have-to-type-in-this-really-long-url-to-access-the-secret-game-of-four-dimensinoal-tic-tac-toe-ha-ha-ha';
			}
			kkeys = [];
		}
		if (kkeys.toString().indexOf(snacks) >= 0) {
			$('body').append('<div id="snacks" style="position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:10000;font-size:2rem;font-family:Roboto,sans-serif"><a href="https://www.vedicpro.com/snacks/candy/jin-jin-lychee-coconut-jelly-halal-52-9-oz-1500-grams/?gclid=CjwKCAjwuvjNBRBPEiwApYq0zvHsMNikDJTD6elauH0H2NTdHGMLQ1Fr7WsHmebrdh7KLd89kgiscxoCbJEQAvD_BwE">sNACKS? </a></div>');
			kkeys = [];
			setInterval(function() {
				$('#snacks').append([
					'<a href="https://www.vedicpro.com/snacks/candy/jin-jin-lychee-coconut-jelly-halal-52-9-oz-1500-grams/?gclid=CjwKCAjwuvjNBRBPEiwApYq0zvHsMNikDJTD6elauH0H2NTdHGMLQ1Fr7WsHmebrdh7KLd89kgiscxoCbJEQAvD_BwE">sNACKS? </a>',
					'<a href="https://freshbitesbasket.com/products/voortman-wafer-cookies-sugar-free-orange-cream-7oz-bag-pack-of-4">SNAX? </a>',
					'<a href="https://www.target.com/p/oreo-original-chocolate-sandwich-cookies-14-3oz/-/A-12959727?ref=tgt_adv_XS000000&AFID=google_pla_df&CPNG=PLA_Grocery+Essentials+Shopping&adgroup=SC_Grocery&LID=700000001170770pgs&network=g&device=c&location=9027782&gclid=CjwKCAjwuvjNBRBPEiwApYq0zjP8O0RnyJc54oDa-Gf1TJc0GuDYnKIkWeL_L0jv6uTkSTsqRExeIBoC8aQQAvD_BwE&gclsrc=aw.ds">SNAXKS!? </a>',
					'<a href="https://www.walmart.com/ip/Frito-Lay-Party-Mix-Variety-Pack-32-count-31-oz-Box/46535223?wmlspartner=wlpa&adid=22222222227034495791&wl0=&wl1=g&wl2=c&wl3=75277683032&wl4=pla-146028833552&wl5=9027782&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=online&wl12=46535223&wl13=&veh=sem">SNAcKS </a>',
					'<a href="https://www.dhgate.com/product/fresh-lychee-lychy-litchi-seeds-leechee-fruit/178431496.html?utm_source=pla&utm_medium=GMC&utm_campaign=lijiao&utm_term=178431496&f=bm%7c178431496%7c019004%7cGMC%7c812091101%7cpla%7clijiao%7cUS%7c019004012%7cc%7cOSLNBL%7c2%7c&gclid=CjwKCAjwuvjNBRBPEiwApYq0zi7YJ5fZKtqWmHOXljTEXEMfmkFM2LjPxQBFCPj2SctgFsn95scEHRoCm5wQAvD_BwE">SNAK </a>',
					'<a href="http://i0.kym-cdn.com/photos/images/facebook/001/116/586/96f.jpg">SNEK </a>',
					'<a href="https://www.walmart.com/ip/KitKat-Green-Tea-Matcha-Chocolate-Mini-Bars-4-7-Oz/677829787?wmlspartner=wlpa&selectedSellerId=9386&adid=22222222227073197995&wmlspartner=wmtlabs&wl0=&wl1=g&wl2=c&wl3=184837236421&wl4=pla-287835951973&wl5=9027782&wl6=&wl7=&wl8=&wl9=pla&wl10=115794710&wl11=online&wl12=677829787&wl13=&veh=sem">SNACK </a>',
					'<a href="https://www.samsclub.com/sams/nestle-pure-life-40-16-9-oz/prod21002929.ip?pid=_CSE_Google_PLA_753259&source=ifpla&CAWELAID=730010300000993423&adid=22222222627000079135&wl0=&wl1=g&wl2=c&wl3=175713933742&wl4=pla-50622957145&wl5=9027782&wl6=&wl7=&wl8=&wl9=pla&wl10=1247713&wl11=online&wl12=753259&wl13=&wl15=34502940930&wl17=1o3&veh=sem">SNACK? </a>',
					'<a href="https://jet.com/product/detail/1cd1520cb2634a749521846fbe7c2713?jcmp=pla:ggl:NJ_dur_Gen_Grocery_a3:grocery_other_a3:na:PLA_786070959_39626560685_pla-290823209227:na:na:na:2&code=PLA15&pid=kenshoo_int&c=786070959&is_retargeting=true&clickid=022132b6-caf0-45d3-a18c-55ca9b59be3c">SNACKS? </a>',
					'<a href="https://www.walmart.com/ip/Jin-Jin-Lychee-Coconut-Candy-Jelly-Cups-52-9-Ounce-Container/734034387?wmlspartner=wlpa&selectedSellerId=4657&adid=22222222227096347252&wmlspartner=wmtlabs&wl0=&wl1=g&wl2=c&wl3=213623642607&wl4=pla-345960317431&wl5=9027782&wl6=&wl7=&wl8=&wl9=pla&wl10=113734502&wl11=online&wl12=734034387&wl13=&veh=sem"SNACKKKSSS??? </a>'
				][Math.floor(10*Math.random())]);
			}, 0);
		}
	}, true);
}