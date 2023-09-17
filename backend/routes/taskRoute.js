const express = require("express");
const Task = require("../model/taskModel");
const {createTask, getTasks, getTask, DeleteTask, updateTask} = require("../taskController/taskController");

const router = express.Router();

router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(DeleteTask).put(updateTask)

module.exports = router;