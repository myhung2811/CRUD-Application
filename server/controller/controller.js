const UserDB = require('../model/model');

exports.createUser = (req, res) => {
    if(!req.body){
        res.status(404).send({
            message: 'Not  found user'
        })
    }

    const newUser = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    newUser.save(newUser)
    .then(data => res.status(200).redirect('/'))
    .catch(err => res.status(500).send({ err}))
}

exports.findAndGetUser = (req, res) => {
    if(req.query.id){
        let id = req.query.id;
        UserDB.findById(id)
        .then(data => {
            if(!data) res.status(404).send({ message: "Error" });
            else res.status(200).send(data);
        })
        .catch(err => res.status(500).send({ err }));
    }else {
        UserDB.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send({ err }));
    }
    
}

exports.updateUser = (req, res) => {
    if(!req.body){
        res.status(404).send({
            message: "Not found id"
        })
    }

    console.log(req.params.id);

    const id = req.params.id;

    UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if(!data) res.status(404).send({ message: 'Cannot Update User with this id' });
        else res.send(data);
    })
    .catch(err =>  res.status(500).send({ err }));
}

exports.deleteUser = (req, res) => {
    if(!req.body){
        res.status(404).send({
            message: 'Cannot found id'
        })
    }

    const id = req.params.id;
    UserDB.findByIdAndDelete(id)
    .then(data => {
        if(!data) res.status(404).send({ message: 'Cannot delete user with this id' })
        else res.status(200).send({ message: 'User deleted successfully' });
    })
    .catch(err => res.status(500).send({ err }));

}