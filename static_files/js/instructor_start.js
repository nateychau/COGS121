// Takes in input from input boxes, checks for validity (if missing values) as well as 
// equivalent passwords, and goes to next step of instructor sign-up process. When the submit
// button is pressed, the function gets all data fields from the input boxes, checks if they're
// valid or not (i.e. empty). It then also checks if the username is unique in the database, and
// checks for a valid password (if passwords are identical). If any inputs are invalid, an
// invalid class will be added to the element which adds a red background to the input field to
// indicate its missing. Once error checking is done, the data will be added into the database,
// and a keyname will be saved to localStorage to maintain data across the signup process

$(document).ready(() =>{
    const database = firebase.database();

    //when submit button is pressed
    $('#instructorStartSubmit').click(()=>{
        const ref = database.ref();
        ref.once('value', function(snapshot){
            const firstname = $('#firstNameInput').val();
            const lastname = $('#lastNameInput').val();
            const username = $('#usernameInput').val();
            const password = $('#passwordInput').val();
            const passwordVerify = $('#passwordVerifyInput').val();
            const email = $('#emailInput').val();
            const phone = $('#phoneNumberInput').val();
            
            var inval = false;	// invalid input somewhere
            if (firstname == null || firstname == "") {
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
            if(snapshot.child('users/'+username).exists()){
                inval = true;
                $('#usernameInput').addClass("invalidInput");
                console.log(username + ' already exists');
                alert(username +' already exists')
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
                database.ref('users/'+username).set({
                    lastname: lastname,
                    firstname: firstname,
                    password: password,
                    email: email,
                    phone: phone,
                }, (error)=> {
                    if(error) {
                        console.log("Error:" +  error);
                        // write failed
                        alert("An error occured when adding " + username + " to the database: " + error);
                    }
                    else {
                        // data saved successfully
                        snackbarActivate(username + " added to the database");
                        window.location.href = "instructor_detail.html";
                    }
                });
                // Starts a "session" to remember the person in next few pages (idk if needed)
                // database.ref('sessions/'+username).set({
                //     name: name,
                // });

                // Save the name
                localStorage.setItem('keyName',username);
            }
            

        });
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