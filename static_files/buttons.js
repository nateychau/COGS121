$(document).ready(() =>{
    const database = firebase.database();

    //Add new user
    function writeUserData(userId, firstName, lastName, email, phone, experience, about, pricing, availability) {
      firebase.database().ref('users/' + userId).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        experience: experience,
        about: about,
        pricing: pricing,
        availability: availability
      });
    }


    //Delete user
    function deleteUser(userId){
      firebase.database().ref('users/'+ userId).remove();
    }
    
    //Search for instructors based on name and/or location
    function search(userName, location){
      firebase.database().ref('search').set({
        searchName: userName,
        searchNear: location
      });
    }



  //   //Read a user's data
  //   function readUserDetail(userId, reqDetail){
  //     database.ref('users/' + userId).once('value', function(snapshot){
  //         const detail = snapshot.child(reqDetail).val();
  //   });
  //   return detail;
  // }





  //index.html scripts

    //reset database
    $('#resetButton').click(()=>{
      console.log('Resetting database');
     
      //clear current database
      database.ref('users/').remove();

      //write base user data
      writeUserData('eWang', 'Eric', 'Wang', 'ewang@ucsd.edu', '123', '2 years', 'heck', '$5/hr', 'Sunday');
      writeUserData('jTsai', 'Joseph', 'Tsai', 'jtsai@ucsd.edu', '456', '-4 years', 'tough', '$0/hr', 'None');
      writeUserData('mLee', 'Mel', 'Lee', 'mlee@ucsd.ed', '789', '1 year', 'burr', '$2/hr', 'Monday');
    });

    //delete user from database
    $('#deleteButton').click(()=>{
      const userId = $('#deleteNameBox').val();
      deleteUser(userId);
    });
    
    $('#homeSearch').click(()=>{
      database.ref('users/').once('value', (snapshot)=>{
        const data = snapshot.val();
        console.log('you received some data', Object.keys(data));
        $('#status').html('all users:'+ Object.keys(data));
      }
      )
    });

    //save search query
    $('#instructorSearch').click(()=>{
      const userName = $('#nameVal').val();
      const near = $('#locationVal').val();
      search(userName, near);
      location.href = 'results.html';
    });





//instructor_start.html scripts

    //add new user
    $('#instructorSubmit').click(()=>{
        const firstName = $('#firstNameInput').val()
        const lastName = $('#lastNameInput').val()
        const email = $('#emailInput').val()
        const phone = $('#phoneInput').val()
        const experience = $('#experienceInput').val()
        const about = $('#aboutInput').val()
        const pricing = $('#priceInput').val()
        const availability =  $('#availabilityInput').val()
        const userId = firstName.substring(0,1).toLowerCase()+lastName
        writeUserData(userId, firstName, lastName, email, phone, experience, about, pricing, availability);
      });



//close document.ready
  });