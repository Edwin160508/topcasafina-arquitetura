$('#collapse-navbar').on('show.bs.collapse', function(){
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 50%)');
});
$('#collapse-navbar').on('hide.bs.collapse', function(){
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});