const bcrypt = require("bcrypt")
const jwt= require(jsonwebtoken)
const { default: bcrypt } = require("bcryptjs");
const user = require("../models/users");


const register =async (requestAnimationFrame,res)=>{
    const {email,password, confirmpassword,firstname,lastname}=register.body
    try{

        const existing =await user.findone({email});
        if(existinguser)return res.status(404).json({message:"user already exists"})

            if( password !==confirmpassword)return res.status(400).json({message: "password miss match"})

            const hashedpassword =await bcrypt.hash(passward,12);

            await user.create({email,password:hashedpassword, name:'${fristname} ${lastname}'})

            const token =jwt.sign({email:XPathResult.email,id: reults._id}, 'test',{expairsin:"1h"});


} catch (error){


            res.status(500).json({message: "user created",results,token})

        }
    }

    module.exports = register