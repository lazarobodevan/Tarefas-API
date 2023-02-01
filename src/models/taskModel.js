const connection = require('../modules/db');
const getTasks = async () =>{
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) =>{
    console.log(task);
    const {name, description, position} = task;

    const [createdTask] = await connection.execute("INSERT INTO tasks (name,description,position,status) VALUES (?,?,?,?);", [name, description,position,"PENDENTE"]);

    return createdTask;
}

module.exports = {
    getTasks,
    createTask
}