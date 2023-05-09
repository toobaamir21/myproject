const Student = require('../models/Student')
const Driver = require('../models/Driver')
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

let a = 4
const sinupdata = async(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // const {fname,lname,email,phone,pass,cpass}=req.body
    // if (!fname||!lname||!email||!phone||!pass||!cpass) {
    //      res.status(400);
    //      throw new Error("Please enter all the fields");
    // }
      try {
       
        if (a===4) {
          let stu = await Student.findOne({email:req.body.email})
          if (stu) {
              return res.status(500).send({email:"User already exists"})
          }
                 const salt = await bcrypt.genSalt(10);
                 const secPass = await bcrypt.hash(req.body.pass, salt);
          stu = await Student.create({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            phone:req.body.phone,
            pass:secPass
        })
        res.send(stu)
        console.log('saving to student db')
        } else {
          let dri = await Driver.findOne({email:req.body.email})
          if (dri) {
              return res.status(500).send({email:"User already exists"})
          }
                 const salt = await bcrypt.genSalt(10);
                 const secPass = await bcrypt.hash(req.body.pass, salt);
          dri = await Driver.create({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            phone:req.body.phone,
            pass:secPass,
          
        })
        res.send(dri)
        console.log('saving to driver db')
        }
        
      } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
      }
    };
    
    const authUser = async (req, res) => {
      const { email, pass } = req.body;
      const stu = await Student.findOne({ email });
      if (stu && (await stu.matchPassword(pass))) {
        res.json({
          _id: stu._id,
          email: stu.email,

          //token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid id or password");
      }
    };
    module.exports = {sinupdata,authUser};