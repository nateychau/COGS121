$(document).ready(() =>{
    const database = firebase.database();

    //instructor_start.html scripts
    $('#instructorStartSubmit').click(()=>{
		const name = $('#firstNameInput').val();
		const lastname = $('#lastNameInput').val();
		const username = $('#usernameInput').val();
        const password = $('#passwordInput').val();
        const passwordVerify = $('#passwordVerifyInput').val();
		const email = $('#emailInput').val();
		const phone = $('#phoneNumberInput').val();
		
		var inval = false;	// invalid input somewhere
		if (name == null || name == "") {
			$('#firstNameInput').addClass("invalidInput");
			inval = true;
		}
		if (lastname == null || lastname == "") {
			$('#lastNameInput').addClass("invalidInput");
			inval = true;
		}
		if (username == null || username == "") {
			$('#usernameInput').addClass("invalidInput");
			inval = true;
        }
        if (password == null || password == "") {
			$('#passwordInput').addClass("invalidInput");
			inval = true;
        }
        if (passwordVerify == null || passwordVerify == "") {
			$('#passwordVerifyInput').addClass("invalidInput");
			inval = true;
        }
        // Check passwords match
        if (!verify()) {
			inval = true;
        }
		if (email == null || email == "") {
			$('#emailInput').addClass("invalidInput");
			inval = true;
		}
		if (phone == null || phone == "") {
			$('#phoneNumberInput').addClass("invalidInput");
			inval = true;
        }
        console.log("invalid input:" + inval);
		if (!inval) {
			database.ref('users/'+name).set({
				lastname: lastname,
				username: username,
				password: password,
				email: email,
				phone: phone,
			}, (error)=> {
                if(error) {
                    console.log("Error:" +  error);
                    // write failed
                    alert("An error occured when adding " + name + " to the database: " + error);
                }
                else {
                    // data saved successfully
                    snackbarActivate(name + " added to the database");
                    window.location.href = "instructor_detail.html";
                }
            });
            // Starts a "session" to remember the person in next few pages (idk if needed)
            // database.ref('sessions/'+username).set({
            //     name: name,
            // });

            // Save the name
            localStorage.setItem('keyName',name);
		}
    });

});

function verify() {
    var original = $("#passwordInput").val();
    var check = $("#passwordVerifyInput").val();
    if (original != check || check == null || check == "") {
        $('#passwordVerifyInput').addClass("invalidInput");
        return false;
    }
    else {
        $('#passwordVerifyInput').removeClass("invalidInput");
        $('#passwordVerifyInput').css("background-color: #fff");
        return true;
    }
}