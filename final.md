Jonathan Fong

-Storyboarding and paper prototyping
-Did all implementation with Google Maps API
-Created instructor_location.js, instructor_prof.js, navbar_search.js, updated all js files throughout the quarter
-Did snackbar implementation, helped with pulling/fetching data from firebase
-implemented all location-based functionality (including results.js location-search/sort)
-implemented localStorage for persistent data throughout instructor sign-up
-Many UI updates throughout the project

Joseph Wang

write about stuff that you did

Nathan Chau

-Drew storyboards and paper prototypes  
-Created HTML skeleton pages  
-Added bootstrap navbar  
-Created and set up firebase  
-Added inserting, fetching, and rendering functionality for firebase text data (insert through sign-up pages, fetch and rendering on result.html and result_prof.html)  
-Made minor UI updates throughout the quarter

Source Code Files: ADD A DESCRIPTION FOR EACH FILE  
Javascript:  
-server.js: hosts the server
-index.js: implements homepage functionality for site, including preparing search queries for results
-instructor_location.js: Used when inputting addresses in during sign up process. Utilizes Google Maps API to display a map and create a marker once address has been inputted. Also have some button animation/changes
-instructor_prof.js: Displays the profile of the instructor. Fetches all data from firebase related to the instructor profile and displays a map of the lesson location.
-instructor_start.js: Takes in input from input boxes, checks for validity (if missing values) as well as equivalent passwords, and goes to next step of instructor sign-up process.
-result_prof.js: Displays details of the specific instructor fetched from database when the instructor is clicked on from results page after search. Also shows the address and map of the lesson location.
-result.js: Takes a snapshot of all instructors of the database, and displays the data needed. Does error checking and filtering of users dependent on search terms (name and/or location).
-navbar_search.js: Takes the searchbar in navbar input and redirects to results.js while saving the required term.
-login.js: Redirects the user to homepage after displaying snackbar message that they've been logged in.

HTML
-Google_Maps_API.html  
-index.html  
-instructor_detail.html  
-instructor_location.html  
-instructor_prof.html  
-instructor_start.html  
-login.html  
-result_prof.html  
-results.html


Google Slide:
CREATE SINGLE GOOGLE SLIDE


Demo Video:
https://www.youtube.com/watch?v=tAXO2eeNFt4