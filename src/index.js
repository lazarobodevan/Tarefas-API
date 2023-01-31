const dotEnv = require("dotenv");
const db = require("./modules/db");
require("./modules/express");
dotEnv.config();
(async()=>{
    const tasks = await db.selectTasks();
    console.log(tasks);
})();
    

