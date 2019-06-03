// Redirects the user to homepage after displaying snackbar message that they've been logged in. 
// When the login-button has been clicked, will show the snackbar to the user and redirect after 3
// seconds.

$(document).ready(function() {
    $('#login-button').click(function(event) {
        event.preventDefault();
        snackbarActivate("You have been logged in. Redirecting to homepage...");
    });


    function snackbarActivate(text) {
        // Fill the snackbar with the text parameter
        $('#snackbar').text(text);
    
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ 
            x.className = x.className.replace("show", ""); 
            window.location = "index.html"; // Go to homepage
        }, 3000);
    }

    // Custom function to make the computer wait...
    // function sleep(milliseconds) {
    //     var start = new Date().getTime();
    //     for (var i = 0; i < 1e7; i++) {
    //         if ((new Date().getTime() - start) > milliseconds){
    //             break;
    //         }
    //     }
    // }
});