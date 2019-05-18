
$(document).ready(() =>{
    const database = firebase.database();

    //index.html scripts
    $('#resetButton').click(()=>{
      console.log('Resetting database');


      database.ref('users/').remove();

      database.ref('users/Eric').set({lastname: 'Wang', location: 'San Diego', experience: 'none'});
      database.ref('users/Joseph').set({lastname: 'Tsai', location: 'Anaheim', experience: '-4 years'});
      database.ref('users/Mel').set({lastname: 'Lee', location: 'Los Angeles', experience: '6 years'});
    });

    $('#deleteButton').click(()=>{
      const name = $('#deleteNameBox').val();
      database.ref('users/'+ name).remove();
    });

    $('#insertButton').click(()=>{
      const name = $('#insertNameBox').val()

      database.ref('users/'+name).set({
        location: $('#insertLocationBox').val(),
        experience: $('#insertExperienceBox').val()
      });
    });


    $('#homeSearch').click(()=>{
      database.ref('users/').once('value', (snapshot)=>{
        const data = snapshot.val();
        console.log('you received some data', Object.keys(data));
        $('#status').html('all users:'+ Object.keys(data));
      }
      )
    });

//instructor_start.html scripts
    $('#instructorSubmit').click(()=>{
        const name = $('#firstNameInput').val()
  
        database.ref('users/'+name).set({
            lastname: $('#lastNameInput').val(),
            experience: $('#experienceInput').val(),
            about: $('#aboutInput').val(),
            price: $('#priceInput').val(),
            availability: $('#availabilityInput').val()
        });
      });


  });