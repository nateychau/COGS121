//result.html scripts
$(document).ready(() =>{
    const database = firebase.database();
    //Show all users
    //$('#showAll').click(()=>{
        database.ref('users/').once('value', function(snapshot){
          snapshot.forEach(function(childSnapshot){
            const id = childSnapshot.key;
            const about = childSnapshot.child('about').val();
            const availability = childSnapshot.child('availability').val();
            const email = childSnapshot.child('email').val();
            const experience = childSnapshot.child('experience').val();
            const firstName = childSnapshot.child('firstName').val();
            const lastName = childSnapshot.child('lastName').val();
            const phone = childSnapshot.child('phone').val();
            const pricing = childSnapshot.child('pricing').val();
            $('#status').append(
              '<br> User ID: '+id + '<br>' +
              'Name: '+firstName+ ' '+lastName+ '<br>'+
              'Email: '+email+ '<br>'+
              'Phone: '+phone +'<br>'+
              'About: '+about +'<br>'+
              'Experience: '+experience +'<br>'+
              'Availability: '+availability +'<br>'+
              'Pricing: '+pricing+'<br><br>'
            );
          });
        });
      //});

});