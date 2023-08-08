const Userroute = require('express').Router();
//const User = require('../Model/User');
const {auth} = require('../firebase/firebase')
const {createUserWithEmailAndPassword, signInWithEmailAndPassword}= require("firebase/auth");


// add new user
Userroute.post('/signup', async (req, res)=>{
    console.log(req.body.email, req.body.password)
    try {
        console.log(req.body.email, req.body.password)
        createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("done");
              res.json("logged in")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorCode);
              console.log(errorMessage);
              res.json(errorMessage)
            });

        
        // console.log(req.body);
        // const newUser = new User({
        //         userName: req.body.userName,
        //         date:req.body.date,
        //         email:req.body.email
        //     })    
          
        // await newUser.save()
        // res.status(200).json(newUser);
        // console.log(newUser);
    
    } catch (error) {
        console.log(error); 
    }

})


// find user with id 
Userroute.post('/login', async (req, res)=>{
    console.log(req.body.email, req.body.password)
    try {
        console.log(req.body.email, req.body.password)
        signInWithEmailAndPassword(auth, req.body.email, req.body.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("done");
              res.json("signed in")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorCode);
              console.log(errorMessage);
              res.json(errorMessage)
            });

        
        // console.log(req.body);
        // const newUser = new User({
        //         userName: req.body.userName,
        //         date:req.body.date,
        //         email:req.body.email
        //     })    
          
        // await newUser.save()
        // res.status(200).json(newUser);
        // console.log(newUser);
    
    } catch (error) {
        console.log(error); 
    }


})


// Update User
Userroute.put('/put', async (req, res)=>{
        
    try {
        const User = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Update_successfully");
    } catch (error) {
        res.json(error)
    }
})


// delete user
Userroute.delete('/delete/:id', async (req,res)=>{
    console.log(req.params.id);
  
    try {
        const deleteItem = await User.deleteOne({_id:req.params.id});
        res.status(200).json('User_deleted');
    } catch (error) {
        res.json(error)
    }
})


module.exports = Userroute;