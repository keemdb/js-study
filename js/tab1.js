$('.tabs > li').click(function(){
	$('.tabs > li').css({
		"background-color":"#fff",
		"color":"#333",
		"transition":"0.5s"
	});
	$(this).css({
		"background-color":"#333",
		"color":"#fff",
		"font-weight":"bold"
	});
});