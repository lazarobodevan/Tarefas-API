const express = require('express');
const taskController = require('./controllers/taskController');
const taksMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taksMiddleware.validateRequest ,taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',taksMiddleware.validateRequest , taskController.updateTask);

module.exports = router;