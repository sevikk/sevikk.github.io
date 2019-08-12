const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {     
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {             
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {      
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }      
      const token = jwt.sign(
        { 
          email: fetchedUser.email,
          name: fetchedUser.name,
          userId: fetchedUser._id 
        },
        'secret_this',
        { expiresIn: "1h" }
      );
      
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        name: fetchedUser.name,
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}

exports.changePassword = (req, res, next) => {

}

exports.updateUser = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");  
  const userDataUpdate = {
    name: req.body.name,
    email: req.body.email,
    imagePath: url + "/images/" + req.body.image,
  }  
  User.updateOne({ _id: req.params.id}, userDataUpdate)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!", result: userDataUpdate });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate post!"
      });
    });
}
