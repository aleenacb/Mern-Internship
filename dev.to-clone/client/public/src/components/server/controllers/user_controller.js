const usertable = require("../Models/User_model")

const registeruser = async(req, res)=> {
    try{
        const{uname, uemail, upassword, uphone} = req.body
        const userdetails = new usertable({
            name: uname,
            email:uemail,
            password:upassword,
            phone:uphone
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
module.exports = registeruser
