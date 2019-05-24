
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

    //result.html scripts
    $('#ResultDisplay').click(()=>{
      database.ref('users/').once('value', (snapshot)=>{
        const data = snapshot.val();
        console.log('you received some data', Object.keys(data));
        $('#status').html('all users:'+ Object.keys(data));
      }
      )
    });


    $('#nameSearch').click(() => {
      const searchName = $('#nameVal').val();
      const key = 'users/' + $('#nameVal').val();
      console.log(searchName);
      window.location.href = "results.html"
      $('#query').html(searchName);
      // 'once' reads the value once from the database
      database.ref(key).once('value', (snapshot) => {
        const data = snapshot.val();
        console.log('You received some data!', data);
        if (!data) {
          // clear the display
          $('#nameDiv').html('');
          $('#locationDiv').html('');
          $('#pricingDiv').html('');
          return;
        }
        if (data.experience && data.lastname && data.location) {
          $('#nameDiv').html(data + '&nbsp' + data.lastname);
          $('##locationDiv').html(data.location);
         // $('#pricingDiv').html(data.experience);
        } else {
          // clear the display
          $('#nameDiv').html('');
          $('#locationDiv').html('');
          $('#pricingDiv').html('');
        }
      });
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