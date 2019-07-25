// Continues with the instructor-sign up process, with additional information relating more to the
// work involving with the lesson, such as experience, price, availability, as well as a profile
// picture and sample of the instructor's playing as an audio clip upload. It also performs
// missing error checking, although profile picture and audio clips are not mandatory. 
// The functions uploadFile and uploadFile2 are used to upload the picture and audio clip to the 
// database. These functions utilize firebase.storage instead of realtime database to store these 
// files. The user will also receive a snackbar notification of progress and completion during file upload.

var selectedFile;
var audioFile;
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

$("#profileInput").on("change", function(event){
    if (event.target.files[0]) {
        console.log('file input event listener reached');
        selectedFile = event.target.files[0];
        $('#uploadButton').removeAttr("disabled");
        $('#uploadButton').attr("enabled","");
    }
    
});

$("#portfolioInput").on("change", function(event){
    if (event.target.files[0]) {
        console.log('file input event listener reached');
        audioFile = event.target.files[0];
        $('#uploadButton2').removeAttr("disabled");
        $('#uploadButton2').attr("enabled","");
    }
    
});

function uploadFile(){
    var fileName = selectedFile.name;
    var storageRef = firebase.storage().ref('/ProfilePics/' + fileName);
    
    var uploadTask = storageRef.put(selectedFile);

    console.log(fileName);
    snackbarActivate1("Uploading file... Please wait: ");
    
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
            snackbarActivate1("Upload is paused: "+progress.toFixed(2)+"%");
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        case firebase.storage.TaskState.RESUME:
            console.log('Upload is resuming');
            snackbarActivate1("Upload resuming... ");
            break;
        }
        snackbarActivate1("Uploading file... Please wait: "+progress.toFixed(2)+"%");
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
        snackbarActivateFinish("Upload complete! File has been saved and stored.");

    });  
}


function uploadFile2(){
    var fileName = audioFile.name;
    var storageRef = firebase.storage().ref('/Audio/' + fileName);
    
    var uploadTask = storageRef.put(audioFile);

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
            snackbarActivate1("Upload is paused: "+progress.toFixed(2)+"%");
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        case firebase.storage.TaskState.RESUME:
            console.log('Upload is resuming');
            snackbarActivate1("Upload resuming... ");
            break;
        }
        snackbarActivate1("Uploading file... Please wait: "+progress.toFixed(2)+"%");
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
                port: downloadURL,
                audioid: username + "audio"
            });
        });
        snackbarActivateFinish("Upload complete! File has been saved and stored.");
        

    }); 
}
// snackbar function
function snackbarActivate1(text) {
    // Fill the snackbar with the text parameter
    $('#snackbar').text(text);

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
}
function snackbarActivateFinish(text) {
    // Fill the snackbar with the text parameter
    $('#snackbar').text(text);

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "hide";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ 
        x.className = x.className.replace("hide", "");
    }, 3000);
}