const mongoose=require('mongoose');
const projectSchema=mongoose.Schema({
    topic:String,
    description:String,
image:String,
mentor:String,
submissions:[{
    batch:String,
    Team:[String],
    comments:String,
    marks:Number,
    Status:{
        type:String,
        default:"Pending"
    }

    }]
})
const projectData=mongoose.model('project',projectSchema);

module.exports=projectData;