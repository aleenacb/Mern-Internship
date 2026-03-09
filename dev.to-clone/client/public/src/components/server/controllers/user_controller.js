const usertable = require("../models/user_models")

const registeruser = async(req, res)=> {
    try{
        const{name, email, password, phone} = req.body
        const userdetails = new usertable({
            name,
            email,
            password,
            phone
        })
        await userdetails.save();
        res.status(201).json(
            {message:"User added successfully",udata:userdetails}
        )
    } catch(error) {
        console.log(error)
        res.status(500).json({message:"server error", error})
    }
}
const getUser = async(req, res)=> {
    try {
        const getallUsers = await usertable.find()
        console.log(getallUsers)
        res.status((200).json({message:"User fetched", allusers:getallUsers}))
    } catch (error) {
        console.log(error)
        res.status((500).json({message:"server error",error}))
    }
}

const getuserbyid=async(req, res)=> {
    try {
        const uid = req.params.id
        const userbyid = await usertable.findById
        console.log(userbyid)
        res.status(200).json({message:"user found",byid:userbyid})
    } catch (error) {
        console.log(error)
        res.status((500).json({message:"server error",error}))
    }
}
const deleteuser = async(req, res)=>{
    try {
        const d_id = req.params.id
        const deleteuser = await usertable.findByIdAndDelete(d_id)
        console.log(deleteuser)
        res.status(200).json({message:"user deleted", d_user:deleteuser})
    } catch (error) {
    console.log(error)
    res.status((500).json({message:"server error",error}))
    }
}

const updateuser = async(req,res)=>{
    try {
    //    const u_id = req.params.id 
        const {id} = req.params
        const body = req.body
        const updateuser = await usertable.findByIdAndUpdate(id, body,{new:true})
        console.log(updateuser)
        res.status(201).json({message:"user updated", updatedata:updateuser})
    } catch (error) {
        console.log(error)
        res.status((500).json({message:"server error", error}))
    }
}
// module.exports = registeruser
// module.exports = getUser

// or 
module.exports = {registeruser, getUser, getuserbyid, deleteuser, updateuser}
