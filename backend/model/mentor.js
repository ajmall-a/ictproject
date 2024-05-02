const mongoose=require('mongoose');
const mentorSchema=mongoose.Schema({
    name:String,
    email:String,
phoneNumber:Number,
password:String,
projectTopics:[{
    type: String
    }]
})
const mentorData=mongoose.model('mentor',mentorSchema);

module.exports=mentorData;