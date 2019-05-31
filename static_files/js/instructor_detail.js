var selectedFile;
const database = firebase.database();

$(document).ready(() =>{
    

    //instructor_start.html scripts
    $('#instructorDetailSubmit').click(()=>{
        // get session name
        const username = localStorage.getItem("keyName");
        console.log("Name:" + username);

		const experience = $('#experienceInput').val();
		const about = $('#aboutInput').val();
        const price = $('#priceInput').val();
        const availability = $('#availabilityInput').val();
		
		
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
                    alert("An error occured when adding " + username + " to the database: " + error);
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

$("#profileInput").on("change", function(event){
    selectedFile = event.target.files[0];
    console.log('file input event listener reached')
});

function uploadFile(){
    var fileName = selectedFile.name;
    var storageRef = firebase.storage().ref('/ProfilePics/' + fileName);
    
    var uploadTask = storageRef.put(selectedFile);

    console.log(fileName);
    
        // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
    }, function(error) {
        // Handle unsuccessful uploads
        console.log("UPLOAD FAILED SAD");
        console.log(error);
    }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //var downloadURL = uploadTask.snapshot.downloadURL;
        console.log('File available at', downloadURL);
        const username = localStorage.getItem("keyName");
            database.ref('users/'+username).update({
                prof: downloadURL,
            });
        });

    });
    
}

