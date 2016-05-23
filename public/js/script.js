
$(document).read(function(){
	$('#dissable').show();

    $('[data-toggle="tooltip"]').tooltip();
    console.log("document had ready");
    $('#wrap').hide();
    
});
function d(){  $("#theModal").modal('show');}
    var w = window.innerWidth;
    var h = window.innerHeight;

$(window).scroll(
 function(){
if($('.img-blog').height()-10 < window.pageYOffset){
	$('#wrap').show( "slow");
}
else{
	 $('#wrap').hide( "fast");
}
}
);


$(document).click(function(){
	$('#di').hide();
});

