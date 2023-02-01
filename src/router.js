const express = require('express');
const taskController = require('./controllers/taskController');
const taksMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taksMiddleware.validateName ,taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',
    taksMiddleware.validateName, 
    taksMiddleware.validateStatus , 
    taskController.updateTask
);

module.exports = router;