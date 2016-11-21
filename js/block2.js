$(document).ready(function(){
    $('.forward').slick({
    аccessibility: false,
		autoplay: true,
		autoplaySpeed: 600,
		arrows: false,
		slidesToShow: 10,
  });
$(document).ready(function(){
    $('.backward').slick({
    аccessibility: false,
		autoplay: true,
		autoplaySpeed: 600,
		arrows: false,
		slidesToShow: 10.5,
		slidesToScroll: -1,
  });
	
	$('.forward').on('beforeChange', function(event, slick, currentSlide, previousSlide){
  console.log(previousSlide);
});
});
    $('.backward').on('beforeChange', function(event, slick, currentSlide, previousSlide){
  console.log(previousSlide);
});
});