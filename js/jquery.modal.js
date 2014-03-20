$.fn.showModal = function(options) {
    
	//Creating Mask  
	if(!$('.mask').length){
		$('body').append("<div class='mask'></div>");
	}
	
	var modal ={
			maskHeight: $(document).height(),
			maskWidth: $(window).width(),
			winH: $(window).height(),
			winW: $(window).width()
	};
	
	return this.each(function() {
	 
		var obj = $(this);
        
        //Masking entire window 		
		$('.mask').css({'width':modal.maskWidth,'height':modal.maskHeight});
		$('.mask').show();
		
		//Bring up the popup
		$(obj).css({'top':modal.winH/2 - $(obj).outerHeight()/2,'left':modal.winW/2 - $(obj).outerWidth()/2});		 		
		$(obj).show();
	 
	});
};

//To close the popup
$.fn.closeModal = function() {
	return this.each(function() {
		$(this).hide();
		$('.mask').hide();
	});
}