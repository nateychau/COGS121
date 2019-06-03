// Used when inputting addresses in during sign up process. Utilizes Google Maps API to display a map 
// and create a marker once address has been inputted. First gets the script with the api, then
// initializes the map using html5 geolocation to get the current location of the user (if supported).
// If the add address button is clicked, the function uses Geocoder to find the address location, 
// adds it to the map as a google maps marker, and zooms in to the location. If no address was submitted, add the invalid class to the data field,
// otherwise, enable the submit button and scroll to the submit button on the page. Once the submit
// button was pressed, it gets the address, saves it to database, and redirects to the end of 
// instructor sign up.


var scriptkey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWsb3UJbBCnDwp2vM8cYsEKfBG2jtvyoY";

// Google Maps API global variables
var geocoder;
var map;
var infoWindow;
var marker;
var lat;
var long;

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
        console.log("Coding address...");
        geocoder.geocode({'address': addressData.address}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                console.log("Address at: " + results[0].geometry.location);
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                marker.setPosition(results[0].geometry.location);
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    $('#addAddress').click(() =>{
        console.log('Adding address to map');
        addressData.address = document.getElementById("AddressSearchBar").value;
        console.log(addressData);
        // calls codeAddress method (above) to plot a new marker
        codeAddress(geocoder, map);
        // sleep(10000);

        // Copied from addressSubmit button to check for empty addresses
        const address = $('#AddressSearchBar').val();
        if (address == null || address == "") {
          $('#AddressSearchBar').addClass("invalidInput");
        }
        else {
            // Set submit button to be enabled
            $('#AddressSubmit').removeAttr("disabled");
            $('#AddressSubmit').attr("enabled","");

            // Scroll to be able to see the button if unable to
            document.getElementById('AddressSubmit').scrollIntoView({behavior: "smooth"});
        }
    });

});

// Preloader
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('.preloader').show();
}

$(document).ready( function() {
    const database = firebase.database();

    $('.preloader').hide();
    ready = true;
    console.log('loaded!');

    
    $('#AddressSubmit').click(()=>{
        // get session name
        const name = localStorage.getItem("keyName");
        
        const address = $('#AddressSearchBar').val();

        if (address == null || address == "") {
          $('#AddressSearchBar').addClass("invalidInput");
        }
        else {
            database.ref('users/'+name).update({
                address: address,
                coordinates: {lat, lng},
			}, (error)=> {
                if(error) {
                    console.log("Error:" +  error);
                    // write failed
                    alert("An error occured for updating " + name + " in the database: " + error);
                }
                else {
                    // data saved successfully
                    snackbarActivate("Address for " + name + " added to the database");
                    window.location.href = "instructor_prof.html";
                }
            });
          
        }
      });

});

// Custom function to make the computer wait... (used in testing)
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}