const axios = require('axios');

exports.homeRoute =  (req, res) => {
    axios.get('http://localhost:5000/api/users')
    .then(function (response) {
        res.render('index', {users: response.data });
    })
    .catch(err => console.log(err))
}

exports.addUser = (req, res) => {
    res.render('add_user');
}

exports.updateUser = (req, res) => {
    axios.get('http://localhost:5000/api/users', {params: {id: req.query.id }})
    .then(function(response) {
        console.log(response);
        res.render('update_user', {user: response.data});
    })
    .catch(err => {
        res.send(err);
    })
    
}