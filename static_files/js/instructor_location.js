var geocoder;
var map;
var infoWindow;
var marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    map: map,
    position: null
});

var addressData = {
    address: "9500 Gilman Dr.",
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: -34.397, lng: 150.644}
    });
    getcurrentLocation();

    // geocoder = new google.maps.Geocoder();
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
    geocoder.geocode({'address': addressData.address}, function(results, status) {
        if (status === 'OK') {
            marker.setPosition(results[0].geometry.location);
            // map.setCenter(results[0].geometry.location);
            // map.setZoom(15);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

$('#addAddress').click(() =>{
    console.log('Adding address to map');
    addressData.address = document.getElementById("AddressSearchBar").value;
    console.log(addressData);
    // Creates a new geocoder object
    geocoder = new google.maps.Geocoder();
    // calls codeAddress method (above) to plot a new marker
    codeAddress(geocoder, map);
    sleep(10000);
    // $('#map').show();
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
