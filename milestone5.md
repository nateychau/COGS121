Free lance piano instructors can use our app to advertise themselves, and to get in contact with potential students. The instructor would create an account for themselves by signing-up and filling out all relevant information. They can specifically display there skills by adding media to their profile. This can be in the form of videos or mp3. Instructors can add videos of their own performances or student recitals, and mp3s of their own recordings. Instructors also specify their contact info, availability, pricing, and location. Students find instructors by searching on the home screen. They can search based on name (if they already know the name of an instructor they are looking for) or based on location if they just want to find instructors nearby. In future iterations, we will add sorting functionality, so that students can sort by distance, price, and availability. Once students find an instructor that they like, they can contact the instructor directly. 

UI improvements:
UI changes that have been made include a cleaned up and revamped home page with 2 search bars, and 2 testing buttons that will not be kept there in the final version. The search results lead to another page that displays the results of the specified search query. Within the instructor sign-up process, there are a number of significant improvements. The instructor sign-up process was split up from 2 pages into 3 pages. The first page contains information pertaining to contact and login information, the second page consists of more lesson-related items, as well as an option to add media and other links to showcase to potential students, and the third page is a slightly updated page to add Address. In all these pages, error/validity checking has been added with a visual cue whenever invalid or bad input has been received, which prevents going to the next page if the required information is not filled out or is invalid. The profile screen at the end of this process has been completely revamped and now displays pertinent information, a map of the address, and options to edit the information. Below are some of the screenshots of the updated UI.

UI screenshots:

index_html:
![index_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(692).png)

results.html:
![results_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(681).png)

instructor_start.html:
![instructor_start_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(684).png)

instructor_start.html with validity check:
![instructor_start_html_2](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(685).png)

instructor_detail.html:
![instructor_detail_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(686).png)

Google_Maps_API.html:
![Google_Maps_API_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(688).png)

Google_Maps_API.html with validity check and marker:
![Google_Maps_API_html_2](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(689).png)

instructor_prof.html:
![instructor_prof_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(690).png)

login.html:
![login_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(693).png)


Screenshots of data display:

results.html:
![results_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(681).png)

Google_Maps_API.html with validity check and marker:
![Google_Maps_API_html_2](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(689).png)

instructor_prof.html:
![instructor_prof_html](https://raw.githubusercontent.com/nateychau/COGS121/master/milestone%205%20screenshots/Screenshot%20(690).png)

Description of data display:

We use Firebase to store all of our data, including text, media, and location data. Data is inserted through the instructor sign-up pages. Text data is set in the first two pages (instructor_start.html and instructor_detail.html), and location is set on the third page (Google_Maps_API.html). For all insertion of data during the instructor sign-up process, there are basic validity checks in place, including checks for empty input, non-matching passwords (the instructor must verify their password by typing it twice), unique usernames in the database, etc. Furthermore, a key name is passed between pages of the instructor sign-up pages as the username through the use of localStorage in order to keep track of the data on separate pages updating the correct user's data.

Data is fetched and displayed on the search result's page (results_html). For searches by name, the app checks if the name exists in the database, and displays all instructors with the searched name and their information. For searches by location, the app sorts instructors by their distance from the searched location, and displays all of the instructors in the sorted order. For searches by both name and location, the app sorts all instructors with the searched name by distance, and displays all the instructors in the sorted order. If there are no search values specified, the app displays all instructors in an arbitrary order (sorted alphabetically in future iterations). 

Data on the instructor_prof.html page is fetched and displayed on the the page specific to the instructor, and is found at the end of the instructor_sign up page. It also pulls up the address of the lesson and finds the location of the address, displaying it on a map similarly to the Google_Maps_API.html page.

More data display ideas:

Another data display idea that would be cool to implement is for students to set their location, and then be able to look at a map with markers for where all nearby instructors are located (similar to Yelp maps). Also, as mentioned above, we would like to add sorting functionality, so that users can sort instructors by price, availability, and distance. We could implement a rating system too, and students would then be able to sort instructors by rating. 