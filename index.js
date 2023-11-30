const express = require('express')
const cors=require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userController=require('./controllers/user')
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

main().catch(err => console.log(err));
async function main(err) {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    if(err){
        console.log('DB failed to connect')
    }
    else{
        console.log('DB conected succesfully')
    }
}

app.get('/', (req,res)=>{
    res.send('hello from backend')
})

app.post('/signup', userController.signup )
app.post('/signin', userController.signin )
app.post('/sendotp', userController.sendotp)
app.post('/submitotp', userController.submitotp)

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})