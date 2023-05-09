const express = require('express')
const router = express.Router()

const {sinupdata, authUser} = require('../controller/controller')
const {body} = require('express-validator')
// let a = 5

  router.post('/',[
    body('fname').isLength({min:3}),
    body('lname').isLength({min:3}),
    body('email').isEmail(),
    body('pass').isLength({min:5})

],sinupdata)
router.post("/login", authUser);

 

module.exports = router