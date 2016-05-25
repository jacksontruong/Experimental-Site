//LISTERNERS
$(document).ready(function () {
	nodePosition(".character");
	shipPosition();
	planetText();
	$("#archedName").arctext({radius: 300});
	planetPosition();	 
});
$(window).resize(function () {
	nodePosition(".character");
	shipPosition();
	planetText();
	planetPosition();	
});
$(window).scroll(function() {
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
	$('.planet').each(function(i, obj) {
			$(this).css('margin-top', initHeight);
	});
}

function shipPosition(){
	var panelWidth = $("#mainPanel").width();
	var node = $(".ship");
	node.css('right', (panelWidth/2)-(node.width()/2)+14);
}

function nodePosition(nodeName){
	var panelWidth = $("#mainPanel").width();
	var node = $(nodeName);
	node.css('right', (panelWidth/2)-(node.width()/2)+14);
}
function planetText(){
	var planetWidth = $(".planet").width();
	var node = $(".planet-core");
	node.css('margin-top', (planetWidth/2)-(node.height()/2)+14);
}

//ANIMATION FUNCTIONS
function homeScroll(yCord){
	$('#GoHome').prop("disabled",true);
	$('.character').prop("src","./asset/fire.png");
	$('.character').addClass("shake");
	$('html, body').stop().animate({
        scrollTop: yCord
    }, 600, function() {
		$('.character').prop("src","./asset/astro.png");
		$('#GoHome').prop("disabled",false);
		$('.character').removeClass("shake");
	});
    return false;
}
