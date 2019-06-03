// implements homepage functionality for site, including preparing search queries for results.
// For any descriptions that have "(testing)" on them, they were only used for testing and not
// the actual functionality of the page. This page includes a function to save the search terms
// to localStorage to be used by results.js, as well as functions to perform certain commands
// once a button is clicked.



$(document).ready(() =>{
    const database = firebase.database();

    //Add new user (testing)
    function writeUserData(username, firstname, lastname, email, phone, experience, about, price, availability,address, coordinates,prof,port,audioid) {
      firebase.database().ref('users/' + username).set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        experience: experience,
        about: about,
        price: price,
        availability: availability,
        address: address,
        coordinates: coordinates,
        prof: prof,
        port: port,
        audioid: audioid
      });
    }


    //Delete user (testing)
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

    //reset database (testing)
    $('#resetButton').click(()=>{
      console.log('Resetting database');
     
      //clear current database
      database.ref('users/').remove();

      //write base user data
      // coord object to insert into database
      coord1 = {
        lat: 32.8635896,
        lng: -117.22448969999999,
      }
      coord2 = {
        lat: 40.731, 
        lng: -73.997
      }
      //            username, first, last,        email,       pw    experience, about, price,    avail,     address,      coordinates, prof
      // writeUserData('eWang', 'Eric', 'Wang', 'ewang@ucsd.edu', '123', '2 years', 'heck', '$5/hr', 'Sunday', '7655 Palmilla Dr.', coord1,
      //   'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fbear.jpg?alt=media&token=db0658d2-2d80-4aad-91d2-33fd7cbb0f41');
      // writeUserData('jTsai', 'Joseph', 'Tsai', 'jtsai@ucsd.edu', '456', '-4 years', 'tough', '$0/hr', 'None', '7655 Palmilla Dr.', coord1,
      // 'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fcat.jpg?alt=media&token=362b2b2e-b6e7-43f0-9ed2-314e204f0f56');
      // writeUserData('mLee', 'Mel', 'Lee', 'mlee@ucsd.ed', '789', '1 year', 'burr', '$2/hr', 'Monday', '7655 Palmilla Dr.', coord1,
      // 'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fdonkey.jpg?alt=media&token=c6bf0b91-37d9-40e5-9653-1345b3e61c88');
      writeUserData('eWang', 'Eric', 'Wang', 'ewang@ucsd.edu', '123', '2 years', 'heck', '$5/hr', 'Sunday', '7655 Palmilla Dr.', coord1,
        'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fbear.jpg?alt=media&token=db0658d2-2d80-4aad-91d2-33fd7cbb0f41', 
        'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/Audio%2FA%20flat%20scale.mp3?alt=media&token=d8f3cdc5-9095-42fb-b15a-5a8699b69cc1',
        'eWangaudio');
      writeUserData('jTsai', 'Joseph', 'Tsai', 'jtsai@ucsd.edu', '456', '-4 years', 'tough', '$0/hr', 'None', '7655 Palmilla Dr.', coord1,
      'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fcat.jpg?alt=media&token=362b2b2e-b6e7-43f0-9ed2-314e204f0f56',
      'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/Audio%2FB%20flat%20scale.mp3?alt=media&token=3ed987c7-e7f6-4fd6-aed9-e49bd1b43a23',
      'jTsaiaudio');
      writeUserData('mLee', 'Mel', 'Lee', 'mlee@ucsd.ed', '789', '1 year', 'burr', '$2/hr', 'Monday', '7655 Palmilla Dr.', coord1,
      'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/ProfilePics%2Fdonkey.jpg?alt=media&token=c6bf0b91-37d9-40e5-9653-1345b3e61c88',
      'https://firebasestorage.googleapis.com/v0/b/cogs121-4f067.appspot.com/o/Audio%2FC%20scale.mp3?alt=media&token=8789dab9-949c-42d7-a405-f84caf2efd76',
      'mLeeaudio');
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

  });

  // NOT USED
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


