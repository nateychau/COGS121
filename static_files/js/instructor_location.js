var scriptkey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWsb3UJbBCnDwp2vM8cYsEKfBG2jtvyoY";

// Google Maps API global variables
var geocoder;
var map;
var infoWindow;
var marker;

$.getScript(scriptkey, function() {

   
    initMap();

    var addressData = {
        address: "7655 Palmilla Dr.",
    };

    function initMap() {
        geocoder= new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: -34.397, lng: 150.644}
        });
        marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: null,
        });
        getcurrentLocation();

        // codeAddress(geocoder, map);
    }

    function getcurrentLocation() {
        // infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Current Location');
            // infoWindow.open(map);
            map.setCenter(pos);
            }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function codeAddress(geocoder, map) {
        console.log("TEST");
        geocoder.geocode({'address': addressData.address}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                marker.setPosition(results[0].geometry.location);
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    // Custom function to make the computer wait...
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }
});

var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('.preloader').show();
}

$(document).ready( function() {
    $('.preloader').hide();
    ready = true;
    console.log('loaded!');

    $('#addAddress').click(() =>{
        console.log('Adding address to map');
        addressData.address = document.getElementById("AddressSearchBar").value;
        console.log(addressData);
        // calls codeAddress method (above) to plot a new marker
        codeAddress(geocoder, map);
        // sleep(10000);
        // $('#map').show();
    });

});