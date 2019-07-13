// $(function() {
// 	$('a[href*=#]:not([href=#])').click(function() {
// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	   var target = $(this.hash);
// 	   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 	   if (target.length) {
// 		  $('html,body').animate({
// 		  scrollTop: target.offset().top
// 		  },1000);
// 		  return false;
// 	   }
// 	}
// 	});
// });

$(document).ready(function(){ 
	$('.tab-a').click(function(){  
		$(".tab").removeClass('current');
		$(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("current");
		$(".tab-a").removeClass('current');
		$(this).addClass('current');
	});


	$(".feature_sec").click(function() {
		$('html,body').animate({
			scrollTop: $(".flagship_wrapper").offset().top-150
		}, 1000);
	});

	$(".pricing_sec").click(function() {
		$('html,body').animate({
			scrollTop: $(".pricing_card_section").offset().top-150
		}, 1000);
	});

	$(".close").click(function() {
		$('#thankYou').hide();
		$('#formBody, #submitBtn').show();
	});
	$("#mobile-number").intlTelInput();
	 
	$("#mobile-number").keypress(function (e) {
	  //if the letter is not digit then display error and don't type anything
	  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		 //display error message
		 //$("#errmsg").html("Digits Only").show().fadeOut("slow");
			   return false;
	   }
	});

	$("#videoModal").on('hidden.bs.modal', function (e) {
	    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
	});

});



$(window).scroll(function(){
	var sticky = $('.header_wrap'),
	scroll = $(window).scrollTop();

	if (scroll >= 70){
		sticky.addClass('fixed');
	} else{
		sticky.removeClass('fixed');
	}
});