const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add a task"]
    },
    completed:{
        type:Boolean,
        require:true,
        default:false
    },
},
{
timestamps:true
}
);


const Task = mongoose.model("task", taskSchema);

module.exports = Task;

