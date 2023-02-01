const taskModel = require('../models/taskModel');

const getTasks = async (req, res) =>{
    const tasks = await taskModel.getTasks();
    return res.status(200).json(tasks)
}

const createTask = async (req, res) =>{
    const createdTask = await taskModel.createTask(req.body);
    return res.status(201).json(createdTask);
}

module.exports = {
    getTasks,
    createTask
}