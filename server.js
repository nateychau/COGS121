// server.js hosts the server

const express = require('express');
const app = express();

app.use(express.static('static_files'));


//Firebase 
{/* <script src ='https://www.gstatic.com/firebasejs/5.0.2/firebase.js'></script>
<script>
    const firebaseConfig = {
        apiKey: "AIzaSyBEWM30zYSTgag6ZnD02X7D4hXHcbhNtKA",
        authDomain: "cogs121-4f067.firebaseapp.com",
        databaseURL: "https://cogs121-4f067.firebaseio.com",
        projectId: "cogs121-4f067",
        storageBucket: "cogs121-4f067.appspot.com",
        messagingSenderId: "1020553409574",
        appId: "1:1020553409574:web:41f68203fa4f06d9"
};
firebase.initializeApp(firebaseConfig);
    </script> */}
// fake database stuff

// const fakeDatabase = {
//     'Eric': {location: 'San Diego', experience: 'none'},
//     'Joseph': {location: 'Anaheim', experience: '-4 years'},
//     'Mel': {location: 'Los Angeles', experience: '6 years'}
// };

// app.get('/users', (req, res) => {
//     const allUsernames = Object.keys(fakeDatabase);
//     console.log('allUsernames is:', allUsernames);
//     res.send(allUsernames);
// });

// app.get('/users/:userid', (req, res) => {
//     const nameToLookup = req.params.userid;
//     const val = fakeDatabase[nameToLookup];
//     console.log(nameToLookup);
//     if (val){
//         res.send(val);
//     } else{
//         res.send({});
//     };
// });

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
});