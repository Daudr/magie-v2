$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper').css('z-index','-100');
    }, 3000);
 
});