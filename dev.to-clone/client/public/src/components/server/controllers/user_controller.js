const jwt = require("jsonwebtoken")
const SECRET_KEY = "product-crud"

const usertable = require("../models/user_models")

const registerUser = async (req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body
        const useremail = await usertable.findOne({email})
        if(useremail) {
            res.json({message:"email already exists"})
        }
        const userdetails = new usertable
        ({name,
        email,
        password,
        phone,
        address
        })
        await userdetails.save()
        res.status(201).json({message: "User registered successfully", udata: userdetails})
    } catch (error) {
        console.error("Error registering user:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const getUsers = async (req,res)=>{
    try {
        const getAllUsers = await usertable.find()
        res.status(200).json({message: "Users fetched successfully", alluser: getAllUsers})
    } catch (error) {
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const getUserById = async (req,res)=>{
    try {
        const uid = req.params.id
        const getUserById = await usertable.findById(uid)
        res.status(200).json({message: "User Fetched Successflly", byid: getUserById})
      } catch (error) {
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
} 

const deleteUser = async(req, res)=>{
    try{
        const duid = req.params.id
        const deleteUserById = await usertable.findByIdAndDelete(duid)
        console.log(deleteUserById)
        res.status(200).json({message:"User Deleted Successfully", dubyid : deleteUserById})
    }catch(error){
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const updateUser = async(req, res)=>{
    try{
        const {id} = req.params
        const body = req.body

        const updatedUser = await usertable.findByIdAndUpdate(id, body, {new:true})

        res.status(201).json({message:"User Updated Successfully", userupdate : updatedUser})
    }catch(error){
        console.error("Error updating users:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Received:", email, password);

        const userlogin = await usertable.findOne({ 
            email: email,
            password: Number(password)  
        });

        console.log("User found:", userlogin);

        if (!userlogin) {
            return res.json({ success: false, message: "Invalid details" });
        }

        const token = jwt.sign({ id: userlogin._id }, SECRET_KEY, { expiresIn: '1d' });
        return res.json({ 
            success: true, 
            message: "Login successful!", 
            token,
            user: userlogin
        });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getProfile = async (req, res) => {
    try {
        const user = await usertable.findById(req.userid)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

const updateProfile = async (req, res) => {
    try {
        const body = req.body
        const updatedUser = await usertable.findByIdAndUpdate(req.userid, body, { new: true })

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "Profile updated successfully", user: updatedUser })
    } catch (error) {
        console.error("Error updating profile:", error)
        res.status(500).json({ message: "Server error", error })
    }
}
module.exports = { registerUser, getUsers, getUserById, deleteUser, updateUser, Login, getProfile, updateProfile }
