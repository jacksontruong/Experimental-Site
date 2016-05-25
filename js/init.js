//CONSTANTS
var NUM_PLANETS = 3;

//LISTERNERS
$(document).ready(function () {
	nodePosition(".character");
	planetText();
	$("#archedName").arctext({radius: 300});
	planetPosition();	 
	$('#astro').show();
	$('#fire').hide();
});
$(window).resize(function () {
	nodePosition(".character");
	planetText();
	planetPosition();	
});
$(window).scroll(function() {
	
	if(digCheck() == true){
		console.log("I AM IN A PLANET");
		$("#astro").prop("src","./asset/hammer.png");
		$("#astro").addClass("bounce");
	}
	else{
		$("#astro").prop("src","./asset/astro.png");
		$("#astro").removeClass("bounce");
	}
	
	var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight; 
	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	/*
	console.log("AstroPOS: "+ $(".character").offset().top+	
	"| P1 - "+$("#planet-1").offset().top+
	"| P2 - "+$("#planet-2").offset().top+
	"| P3 - "+$("#planet-3").offset().top+
	"| WindowOFF - "+top+
	"| WindowH - "+height);
	*/
});


//OPTIMIZATION FUNCTIONS
function planetPosition(){
	var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight; 
	var planet = $(".planet");
	var initHeight = height+(height/2)+(planet.height()/2);
	$(".mainPanel").css('height', height*4);	
	$("body").attr('data-offset',initHeight);
	$(".planetary-gap").css('margin-top', initHeight/2);
	$('.planet').each(function(i, obj) {
			$(this).css('margin-top', initHeight);
	});
}
function nodePosition(nodeName){
	var panelWidth = $("#mainPanel").width();
	var node = $(nodeName);
	node.css('right', (panelWidth/2)-(node.width()/2)+9);
}
function planetText(){
	var planetWidth = $(".planet").width();
	var node = $(".planet-core");
	node.css('margin-top', (planetWidth/2)-(node.height()/2)+14);
}


//ANIMATION FUNCTIONS
function homeScroll(yCord){
	$('#GoHome').prop("disabled",true);
	$('#fire').show();
	$('#astro').hide();
	$('html, body').stop().animate({
        scrollTop: yCord
    }, 600, function() {
		$('#GoHome').prop("disabled",false);
		$('#astro').show();
		$('#fire').hide();
	});
    return false;
}
function planetScroll(planetNum){
	$('.planet').each(function(i, obj) {
		if(i == planetNum){
			$('html, body').stop().animate({
				scrollTop: $(this).offset().top - ($(this).width()/2)
			}, 600, function() {
				//done
			});	
		}
	});
}
function digCheck(){
	var nearPlanet = false;
	$('.planet').each(function(i, obj) {
			if($(".character").offset().top > $(this).offset().top - ($(this).width()/1.5) && $(".character").offset().top < $(this).offset().top + ($(this).width()/3) + $(this).width()){
				nearPlanet = true;
			}
	});
	return nearPlanet;
}


//HELPER FUNCTIONS
function nextPlanet(){
	$('.pNav').each(function(i, obj) {
		if($(this).hasClass('active')){
			if(i+1 > (NUM_PLANETS-1)){
				planetScroll(0)
			}
			else{
				planetScroll(i+1);
			}
		}
	});
}
function previousPlanet(){
	$('.pNav').each(function(i, obj) {
		if($(this).hasClass('active')){
			if(i == 0){
				planetScroll(NUM_PLANETS-1);
			}
			else{
				planetScroll(i-1);
			}
		}
	});
}
