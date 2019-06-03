Jonathan Fong

write about stuff that you did

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
-server.js  
-index.js  
-instructor_location.js  
-instructor_prof.js  
-instructor_start.js  
-result_prof.js  
-result.js

HTML

-**index.html**
Home page. Users can search for an instructor by name and/or location with the search bars. If no name or location is specified, all users will be displayed on the results page. If only a name is specified, all users with that name (case-sensitive) will be displayed. If only a location is specified, all users within a certain distance of that location will be displayed. If both a name and location is specified, all users with that name within a certain distance of that location will be displayed. Users can also create an instructor profile by clicking sign up, or log in to an existing one by clicking log in.  

-**results.html**  
Displays search results in the form of a list of instructors, based on the search parameters from index.html  

-**result_prof.html**  
Displays the profile information of a certain instructor, selected from results.html. The profile displays the user's name, userid, contact info, description, experience, availability, price, and location. It also includes a profile picture, and example piece from their portoflio. 

-**instructor_start.html**   
First page of instructor sign-up process. Instructors list their first and last name, a username, password, email, and phone number. All input fields check for valid input (names can't have numbers, email must have @ symbol, phone number can't have letters), and the username field checks to see if the username already exits. 

-**instructor_detail.html**  
Instructors specify their years of experience, description, pricing, and choose a day of availability from the dropdown. Users can also add a profile picture and an mp3 file for their portfolio.  

-**Google_Maps_API.html**  
Allows user to search for and set their location by address  

-**instructor_prof.html**  
Displays the final instructor profile, based on provided information from the sign-up process. Users can go back to edit their information or location with the links at the bottom. 

-**login.html**  
Allows previous users to sign in to their account with the username and password that they signed in with. Once logged-in, they will be able to edit their profile. 




Google Slide:
https://docs.google.com/presentation/d/19qkqr9KgLgoOT-4hVIg-7JmEIejg93v5AoVEwmE4_N4/edit?usp=sharing


Demo Video:
https://www.youtube.com/watch?v=tAXO2eeNFt4