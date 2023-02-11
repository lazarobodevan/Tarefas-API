const connection = require('../modules/db');

const getTasks = async () =>{
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) =>{

    let {name, description} = task;
	if(description == undefined)
		description= null;
	
	console.log(description)

    const [createdTask] = await connection.execute("INSERT INTO tasks (name,description,status) VALUES (?,?,?);", [name, description,"PENDENTE"]);

    return createdTask;
}

const updateTask = async (id, task) =>{
    const {name, description, status} = task;

    const [updatedTask] = await connection.execute(
            'UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?',
            [name, description, status, id]
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