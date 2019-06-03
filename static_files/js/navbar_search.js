// Takes the searchbar in navbar input and redirects to results.js while saving the required term.
// Used in the navbar on all pages.

$(document).ready(() =>{

    $('#searchbar').click(()=>{
		const userName = $('#searchbarInput').val();
        searchbarSearch(userName);
        console.log(localStorage.getItem("searchName"));
        console.log(localStorage.getItem("searchNear"));
        window.location.href = 'results.html';
    });

    //Search for instructors based on name
    function searchbarSearch(userName){
        localStorage.setItem("searchName", userName);
        localStorage.setItem("searchNear", "");
    }

});