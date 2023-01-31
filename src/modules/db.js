async function connect(){
    if(global.connection && global.connection.state != "disconnected")
        return global.connection
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@127.0.0.1:3306/mydb");
    console.log("Conectado ao MySQL!");

    global.connection  = connection;
    return connection;
}
connect();


async function selectTasks(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tarefas'); 
    return await rows;
}


module.exports = {selectTasks}