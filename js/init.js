$(document).ready(function () {
	 nodePosition(".character");
	 nodePosition(".planet-1");
	 $("#archedName").arctext({radius: 300});
});
$(window).resize(function () {
	nodePosition(".character");
	nodePosition(".planet-1");
});

function nodePosition(nodeName){
	var panelWidth = $("#mainPanel").width();
	var node = $(nodeName);
	console.log(panelWidth);
	node.css('right', (panelWidth/2)-(node.width()/2)+14);
}
