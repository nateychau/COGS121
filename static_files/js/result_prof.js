const database = firebase.database();
const username = localStorage.getItem("keyName");

database.ref('users/'+username).once('value', function(snapshot){

    const username = snapshot.key;
    const about = snapshot.child('about').val();
    const address = snapshot.child('address').val();
    const availability = snapshot.child('availability').val();
    const email = snapshot.child('email').val();
    const experience = snapshot.child('experience').val();
    const firstname = snapshot.child('firstname').val();
    const lastname = snapshot.child('lastname').val();
    const phone = snapshot.child('phone').val();
    const price = snapshot.child('price').val();
    
    $('#fullname').html(firstname+ ' '+lastname);
    $('#details').append(
        '<table class="table" style="margin:0">'+
            '<tr>'+
                '<th scope="row">User ID:</th>'+
                    '<td>'+username+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">Email:</th>'+
                    '<td>'+email+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">Phone:</th>'+
                    '<td>'+phone+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">About:</th>'+
                    '<td>'+about+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">Experience:</th>'+
                    '<td>'+experience+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">Availability:</th>'+
                    '<td>'+availability+'</td>'+
            '</tr>'+
            '<tr>'+
                '<th scope="row">Price:</th>'+
                    '<td>'+price+'</td>'+
            '</tr>'+
        '</table>'
    );
    $('#locationDiv').append(
        'Lesson Location:&nbsp;&nbsp;'+address
    );
        
    /* ----------------------- google maps api stuff -------------------------------------------------- */

    $(document).ready(() =>{
        var scriptkey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWsb3UJbBCnDwp2vM8cYsEKfBG2jtvyoY";

        
        $.getScript(scriptkey, function() {
            // Google Maps API global variables
            var geocoder;
            var map;
            var marker;
            var loc;
            initMap();

            function initMap() {
                geocoder= new google.maps.Geocoder();
                geocoder.geocode({'address': address}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        console.log("Address at: " + results[0].geometry.location);
                        loc = results[0].geometry.location;
                        
                        marker = new google.maps.Marker({
                            animation: google.maps.Animation.DROP,
                            map: map,
                            position: loc,
                        });
                        map.setCenter(loc);
                        map.setZoom(17);
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
                map = new google.maps.Map(document.getElementById('mapProf'), {
                    zoom: 12,
                    center: {lat: -34.397, lng: 150.644}
                });
            }

        });
    });
});