
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
		if (name == null || name == "") {
			$('#deleteNameBox').addClass("invalidInput");
		}
		else {
			database.ref('users/'+ name).remove();
			$('#deleteNameBox').val("");
			snackbarActivate(name + " deleted from the database");
		}
    });

    $('#insertButton').click(()=>{
		const name = $('#insertNameBox').val();
		const location = $('#insertLocationBox').val();
		const experience = $('#insertExperienceBox').val();

		var inval = false;	// invalid input somewhere
		if (name == null || name == "") {
			$('#insertNameBox').addClass("invalidInput");
			inval = true;
		}
		if (location == null || location == "") {
			$('#insertLocationBox').addClass("invalidInput");
			inval = true;
		}
		if (experience == null || experience == "") {
			$('#insertExperienceBox').addClass("invalidInput");
			inval = true;
		}
		if (!inval) {
			database.ref('users/'+name).set({
			location: location,
			experience: experience,
			}, (error)=> {
			if(error) {
				console.log("Error:" +  error);
				// write failed
				snackbarActivate("An error occured when adding " + name + " to the database: " + error);
			}
			else {
				// data saved successfully
				snackbarActivate(name + " added to the database");
			}
			});

		}
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

	// instructor_start.html scripts moved to dedicated js file

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