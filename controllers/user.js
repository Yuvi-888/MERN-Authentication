const userModel = require('../models/user')

module.exports.signup = (req, res) => {
  console.log(req.body);
  const newUser = new userModel({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send({ message: "signup successful" });
    })
    .catch((error) => {
      res.send({ message: "signup failed" });
    });
}

module.exports.signin = (req, res) => {
    console.log(req.body.email);
    userModel.findOne({email:req.body.email})
    .then((result)=>{
        console.log(result)
        if(result.password!==req.body.password){
            res.send({message:'password wrong'})
        }
        else{
        res.send({message:'user found', email: result.email, token:'OG1'})
        }
    })
    .catch((error)=>{
        res.send({message:'user not found'})
    })
  }

  module.exports.sendotp=(req,res)=>{
    console.log(req.body)

    const otp='5678'

    userModel.findOne({email:req.body.email})
    .then(
      res.send({message:'otp sent'})
    )
    .catch((error)=>{
      res.send({message:'user not found'})
    }
    )
  }

  module.exports.submitotp=(req,res)=>{
    console.log(req.body)

    const otp='5678'

    userModel.findOne({otp:req.body.otp})
    .then(
      res.send({message:'password updated'})
    )
    .catch((error)=>{
      res.send({message:'user not found'})
    }
    )
  }
