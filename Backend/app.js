const DBURI ="mongodb+srv://Mizna:2007@cluster0.l3rnr.mongodb.net/my_app_database"
const app = express()
const PORT = 5174
import express from "express"; 
import mongoose from "mongoose"; 
import bcrypt from "bcrypt";
import cors from "cors"; 
// import postModel from "./Models/postSchema.js";

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//  mongodb configuration 
mongoose.connect(DBURI),
mongoose.connection.on("connected", ()=> console.log("MonoDB Connected"))

mongoose.connection.on("error",(err) => console.log("MongoDB Error", err))

// Signup route

app.post('/register' , async(req,res)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.json({
            message: "Please enter all fields",
            status : false
        });
        return;
    }

    const existingUser = await userModel.findOne({email});
    if(existingUser){
        res.json({
            message: "Email already exists",
            status : false
        });
        return;
    }

    // Hash the Password

    const hashedPassword = await bcrypt.hash(password,10)
    console.log("hashpassword", hashedPassword)

    
    // Create the user in the db

    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword})
        res.json({
            message: "User registered successfully",
            status : true
        });
    
})

// Login route

app.post('/login', async(req,res)=>{
    const {email, password} = req.body
    if(!email ||!password){
        res.json({
            message: "Please enter all fields",
            status : false
        });
        return;
    }
      // Check if user exists
      const user = await userModel.findOne({email});
      if(!user){
        res.json({
          message: "User not found",
          status : false
        });
        return;
      }
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        res.json({
          message: "Invalid password",
          status : false
        });
        return;
      }
       // Login successful
       res.json({
        message: "Login successful",
        status : true
      });
    })
     

         

         
         









app.listen(PORT, () => console.log('Server running'));