$(document).ready(function () {
	 nodePosition(".character");
	 nodePosition(".planet-1");
	 planetText();
	 $("#archedName").arctext({radius: 300});
});
$(window).resize(function () {
	nodePosition(".character");
	nodePosition(".planet-1");
	planetText();
});

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
