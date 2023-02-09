const taskModel = require('../models/taskModel');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

const getTasks = async (req, res) =>{
    const tasks = await taskModel.getTasks();
	res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(tasks)
}

const createTask = async (req, res) =>{
    const createdTask = await taskModel.createTask(req.body);
	res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(201).json(createdTask);
}

const deleteTask = async(req, res) =>{
    const {id} = req.params;
    const deletedTask = await taskModel.deleteTask(id);
	res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(204).json();
}

const updateTask = async(req, res) =>{
    const {id} = req.params;
    await taskModel.updateTask(id,req.body);
    return res.status(204).json();
}

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
}