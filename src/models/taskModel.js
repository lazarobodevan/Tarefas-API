const connection = require('../modules/db');
const getTasks = async () =>{
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) =>{

    const {name, description, position} = task;

    const [createdTask] = await connection.execute("INSERT INTO tasks (name,description,position,status) VALUES (?,?,?,?);", [name, description,position,"PENDENTE"]);

    return createdTask;
}

const updateTask = async (id, task) =>{
    const {name, description, position, status} = task;

    const [updatedTask] = await connection.execute(
            'UPDATE tasks SET name = ?, description = ?, position = ?, status = ? WHERE id = ?',
            [name, description, position, status, id]
            );
}

const deleteTask = async (id) =>{
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}