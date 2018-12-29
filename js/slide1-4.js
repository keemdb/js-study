var n = 1;
var end = $('.banners').length -1;
var interval = setInterval (ani, 2000);

$(window).on("resize", function(){
	$(".banners").height($(".banner").eq(0).height());
}).trigger("resize");

$(".banner").each(function(){
	$(this).css({"left":(i)})
});