var n = 1;
var end = $('.banner').length - 1;
var interval = setInterval (ani, 2000);

$('.banner').each(function(i){
	$(this).css({'left':(i*100)+'%'});
});

function ani(){
	$('.banners > ul').stop().animate({'left':(-n*100)+"%"}, 500, function(){
		if(n == end) n = 0;
		else n++;
	});
}