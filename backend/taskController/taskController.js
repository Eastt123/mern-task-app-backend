const Task = require("../model/taskModel");

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

const getTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findById({_id:id});
        if(!task){
           return res.status(404).json(`No Task with id ${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

const DeleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete({_id:id});
        if(!task){
            return res.status(404).json(`No Task with id ${id}`)
         }
        res.status(200).json("Task deleted")
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id:id}, req.body, 
            {new:true,
            runValidators:true
            });
        if(!task){
            return res.status(404).json(`No Task with id ${id}`)
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {
    createTask,
    getTasks,
    getTask,
    DeleteTask,
    updateTask
}