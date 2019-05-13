var geocoder;
var map;

var addressData = {
sender: null,
timestamp: null,
address: "9500 Gilman Dr.",
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });
    geocoder = new google.maps.Geocoder();
    var marker = codeAddress(geocoder, map);
    marker.setMap(map);
}

function codeAddress() {
    geocoder.geocode({'address': addressData.address}, function(results, status) {
        if (status === 'OK') {
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: results[0].geometry.location
        });
        map.setCenter(results[0].geometry.location);
        map.setZoom(15);
        return marker;
        } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

$('#addAddress').on( "click", () =>{
    console.log('Adding address to map');
    addressData.address = document.getElementById("AddressSearchBar").value;
    console.log(addressData);
    // Creates a new geocoder object
    // geocoder = new google.maps.Geocoder();
    // calls codeAddress method (above) to plot a new marker
    var addedmarker = codeAddress(geocoder, map);
    addedmarker.setMap(map);
});