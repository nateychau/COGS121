$(document).ready(() =>{
    const database = firebase.database();

    function validate() {
        const fname = $('#firstNameInput').val();
        const lname = $('#lastNameInput').val();
    
        if (fname != null && lname != null) { 
            database.ref('instructors/' + fname + ' ' + lname).set({
                address: null,
                exp: null,
                about: null,
                price: null,
                availability: null,
                picture: null,
            });
            window.location = "Google_Maps_API.html"
        }
        else {
            // Display error msg
            window.alert("Invalid or missing first and/or last name. Please enter your first and last name");
        }
    };

});