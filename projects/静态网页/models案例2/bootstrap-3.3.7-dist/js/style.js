$('.navbar-nav > li.dropdown').hover(function(){
	$(this).addClass('open')
},function(){
	$(this).attr('class','dropdown')
})
$('.v-Gallery .cont .row .col-xs-12 img').click(
	function(){
		$('#vmy').html('<img src="'+this.src+'">')
		$('#myModal').addClass('in').css('display','block')
		$('body').append('<div class="modal-backdrop fade in"></div>')
		$('#myModal .v-modal .modal-content').css('margin-top','100px')
	}
)
$('#v-close').click(function(){
	console.log(1)
	$('#myModal').attr('class','modal fade')
	$('#myModal').css('display','none')
	$('body>.modal-backdrop').remove()
})