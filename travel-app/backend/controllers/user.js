const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const nodemailer = require("nodemailer");

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
          message: "Can not find mentioned user"
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
        image: fetchedUser.image
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}

exports.forgotPassword = (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(!user) {
      res.status(401),json({
        message: "No account with that email address exists."
      })
      return true;
    }
    bcrypt.hash('123', 10).then(hash => {
      const currentHash = hash.replace('/', '')
      user.resetPasswordToken = currentHash;
      user.save();
      var smtpTransport = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: 'vsevolod.kuzz@gmail.com',
          pass: 'zfxgiggcsmgtazys'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'test travel app',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          req.headers.origin + '/reset-password/' + currentHash + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err, info) {
        res.status(200).json({
          message: `An e-mail has been sent to ${user.email} with further instructions.`
        })
      });
    })        
  })
}

exports.updateUser = (req, res, next) => {
  let imagePath = req.body.image;  
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  // const userDataUpdate = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   imagePath: imagePath,
  // }
  User.findOne({ _id: req.params.id}, (err, user) => {
      user.image = imagePath;
      user.name = req.body.name;
      user.email = req.body.email;
      user.save().then(result => {
        if (result) {
          const token = jwt.sign(
            { 
              email: user.email,
              name: user.name,
              userId: user._id 
            },
            'secret_this',
            { expiresIn: "1h" }
          );          
          res.status(200).json({
            message: "Update successful!", 
            result: {
              token: token,
              expiresIn: 3600,
              userId: user._id,
              name: user.name,
              email: user.email,
              imagePath: user.image,
              edited: true
            } 
          });
        } else {
          res.status(401).json({ message: "Not authorized!" });
        }
      });
    })
}

exports.resetPassword = (req, res, next) => {
  User.findOne({resetPasswordToken: req.body.token}, (err, user) => {    
    if (!user) {
      res.status(401),json({
        message: "No account with that email address exists."
      })
      return true;
    }
    const token = jwt.sign(
      { 
        email: user.email,
        name: user.name,
        userId: user._id 
      },
      'secret_this',
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: user._id,
      name: user.name,
      email: user.email,
      image: user.image
    });
  })
}
