const { trusted } = require('mongoose');
var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) =>{
// validate  request
if(req.body){
    res.status(400).send({message : "Content can not be empty!"});
    return
}
// new user
const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    gender : req.body.gender,
    status : req.body.status
})
// save user in the database
user
.save(user)
.then(data=>{
    res.send(data)
})
.catch(err =>{
    res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation"
    });
});
}


// retrieve and return all users / single user
exports.find = (req, res)=>{
 Userdb.find()
 .then(user =>{
     res.send(user)
 }).catch(err =>{
     res.statsu(500).send({message :"Error occured while getting user information "});
 });
}

// update a new id user 
exports.update = (req, res)=>{

}

// delete a user with id
exports.delete = (req, res)=>{

}