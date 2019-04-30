const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
    'Eric': {location: 'San Diego', experience: 'none'},
    'Joseph': {location: 'Anaheim', experience: '-4 years'},
    'Mel': {location: 'Los Angeles', experience: '6 years'}
};

app.get('/users', (req, res) => {
    const allUsernames = Object.keys(fakeDatabase);
    console.log('allUsernames is:', allUsernames);
    res.send(allUsernames);
});

app.get('/users/:userid', (req, res) => {
    const nameToLookup = req.params.userid;
    const val = fakeDatabase[nameToLookup];
    console.log(nameToLookup);
    if (val){
        res.send(val);
    } else{
        res.send({});
    };
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
});