var n = 1;
$(".banners > ul").append($(".banner").eq(0).clone());
var end = $('.banner').length - 1;
var interval = setInterval (ani, 2000);

$(".banner").each(function(i){
	$(this).css({
		"left":(i*100)+"%"
	});
});

$(window).on("resize", function(){
	$(".banners > ul").height($(".banner").height())
}).trigger("resize");

function ani () {
	$('.banners > ul').stop().animate({
		"left":(-n*100)+"%"
	}, 500, function(){
		if(n == end) {
			$(this).css({"left":0})
			n = 1;
		}
		else n++;
	});
}