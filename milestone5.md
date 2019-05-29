Free lance piano instructors can use our app to advertise themselves, and to get in contact with potential students. The instructor would create an account for themselves by signing-up and filling out all relevant information. They can specifically display there skills by adding media to their profile. This can be in the form of videos or mp3. Instructors can add videos of their own performances or student recitals, and mp3s of their own recordings. Instructors also specify their contact info, availability, pricing, and location. Students find instructors by searching on the home screen. They can search based on name (if they already know the name of an instructor they are looking for) or based on location if they just want to find instructors nearby. In future iterations, we will add sorting functionality, so that students can sort by distance, price, and availability. Once students find an instructor that they like, they can contact the instructor directly. 

UI screenshots:


UI improvements: 


Screenshots of data display:


Description of data display:

    We use Firebase to store all of our data, including text, media, and location data. Data is inserted through the instructor sign-up pages. Text data is set in the first two pages (instructor_start.html and instructor_detail.html), and location is set on the third page (Google_Maps_API.html). Data is fetched and displayed on the search result's page (results_html). For searches by name, the app checks if the name exists in the database, and displays all instructors with the searched name and their information. For searches by location, the app sorts instructors by their distance from the searched location, and displays all of the instructors in the sorted order. For searches by both name and location, the app sorts all instructors with the searched name by distance, and displays all the instructors in the sorted order. If there are no search values specified, the app displays all instructors in an arbitrary order (sorted alphabetically in future iterations). 

More data display ideas:

    Another data display idea that would be cool to implement is for students to set their location, and then be able to look at a map with markers for where all nearby instructors are located (similar to Yelp maps). Also, as mentioned above, we would like to add sorting functionality, so that users can sort instructors by price, availability, and distance. We could implement a rating system too, and students would then be able to sort instructors by rating. 