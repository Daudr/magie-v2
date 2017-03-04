$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper').css('z-index','-100');
    }, 3000);
 
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}

	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,

        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(45.890629, 12.337388), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},
        	{"featureType": "administrative.locality","elementType": "labels.text","stylers": [{"visibility": "on"}]},
        	{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#29b6f6"}]},
        	{"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},
        	{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
        	{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45}]},
        	{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#80deea"}]},
        	{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
        	{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
        	{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
        	{"featureType": "water","elementType": "all","stylers": [{"color": "#46bcec"},{"visibility": "on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.890629, 12.337388),
        map: map,
        title: 'Siamo qui!'
    });
}
