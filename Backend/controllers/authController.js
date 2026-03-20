const user = require("../models/SignUp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req,res) => { 
    try{
        const {email, first_name, last_name, password}= req.body;

        const existingUser = await user.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message: "user already exist"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const User = await user.create({
            email,
            first_name,
            last_name,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "Signup successful",
            data: User        
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

exports.login = async (req,res)=>{
    try{
        const {email, password} = req.body;

        const validUser = await user.findOne({email});

        if(!validUser){
            return res.status(400).json({
                success:false,
                message: "user does not exist"
            });
        }


        const match = await bcrypt.compare(password, validUser.password);

        if(!match){
            return res.status(400).json({
                success:false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            {id : validUser._id}, 
            "secretkey",
            {expiresIn: "1d"}
        );
        
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
    
};