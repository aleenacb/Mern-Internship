const userschema = new mongoose.schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number},
    address:{type:String},
})
module.exports = mongoose.model("User",userschema)
