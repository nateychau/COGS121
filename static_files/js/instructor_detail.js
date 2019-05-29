$(document).ready(() =>{
    const database = firebase.database();

    //instructor_start.html scripts
    $('#instructorDetailSubmit').click(()=>{
        // get session name
        const username = localStorage.getItem("keyName");
        console.log("Name:" + username);

		const experience = $('#experienceInput').val();
		const about = $('#aboutInput').val();
        const price = $('#priceInput').val();
        const availability = $('#availabilityInput').val();
		const fileLink = $('#profileInput').val();
		const phone = $('#portfolioInput').val();
		
		var inval = false;	// invalid input somewhere
		if (experience == null || experience == "") {
			$('#experienceInput').addClass("invalidInput");
			inval = true;
		}
		if (about == null || about == "") {
			$('#aboutInput').addClass("invalidInput");
			inval = true;
		}
		if (price == null || price == "") {
			$('#priceInput').addClass("invalidInput");
			inval = true;
        }
        if (availability == null || availability == "") {
			$('#availabilityInput').addClass("invalidInput");
			inval = true;
        }
        console.log("invalid input:" + inval);
		if (!inval) {
			database.ref('users/'+username).update({
				experience: experience,
				about: about,
				price: price,
				availability: availability,
                // Add database for picture and portfolio someone plz
                
			}, (error)=> {
                if(error) {
                    console.log("Error:" +  error);
                    // write failed
                    alert("An error occured when adding " + name + " to the database: " + error);
                }
                else {
                    // data saved successfully
                    snackbarActivate(username + " added to the database");
                    window.location.href = "Google_Maps_API.html";
                }
            });
            // Starts a "session" to remember the person in next few pages (idk if needed)
            // database.ref('sessions/'+username).set({
            //     name: name,
            // });
		}
    });

});

function verify() {
    var original = $("#passwordInput").val();
    var check = $("#passwordVerifyInput").val();
    if (original != check) {
        $('#passwordVerifyInput').addClass("invalidInput");
        return false;
    }
    else {
        $('#passwordVerifyInput').removeClass("invalidInput");
        $('#passwordVerifyInput').css("background-color: #fff");
        return true;
    }
}