$(document).ready(() =>{
    const database = firebase.database();

    //Add new user
    function writeUserData(username, firstname, lastname, email, phone, experience, about, price, availability,prof) {
      firebase.database().ref('users/' + username).set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        experience: experience,
        about: about,
        price: price,
        availability: availability,
        prof: prof
      });
    }


    //Delete user
    function deleteUser(username){
      firebase.database().ref('users/'+ username).remove();
    }
    
    //Search for instructors based on name and/or location
    function search(userName, location){
      localStorage.setItem("searchName", userName);
      localStorage.setItem("searchNear", location);
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
      writeUserData('eWang', 'Eric', 'Wang', 'ewang@ucsd.edu', '123', '2 years', 'heck', '$5/hr', 'Sunday', 'bear.jpg');
      writeUserData('jTsai', 'Joseph', 'Tsai', 'jtsai@ucsd.edu', '456', '-4 years', 'tough', '$0/hr', 'None','donkey.jpg');
      writeUserData('mLee', 'Mel', 'Lee', 'mlee@ucsd.ed', '789', '1 year', 'burr', '$2/hr', 'Monday','cat.jpg');
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
      console.log(localStorage.getItem("searchName"));
      console.log(localStorage.getItem("searchNear"));
      location.href = 'results.html';
    });





//instructor_start.html scripts

    //add new user
    // $('#instructorSubmit').click(()=>{
    //     const firstName = $('#firstNameInput').val()
    //     const lastName = $('#lastNameInput').val()
    //     const email = $('#emailInput').val()
    //     const phone = $('#phoneInput').val()
    //     const experience = $('#experienceInput').val()
    //     const about = $('#aboutInput').val()
    //     const pricing = $('#priceInput').val()
    //     const availability =  $('#availabilityInput').val()
    //     const userId = firstName.substring(0,1).toLowerCase()+lastName
    //     writeUserData(userId, firstName, lastName, email, phone, experience, about, pricing, availability);
    //   });

  });
function snackbarActivate(text) {
	// Fill the snackbar with the text parameter
	$('#snackbar').text(text);

	// Get the snackbar DIV
	var x = document.getElementById("snackbar");
	// Add the "show" class to DIV
	x.className = "show";
	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
