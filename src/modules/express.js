const express = require('express');
const db = require('./db');
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Rodando com express na porta ${port}`);
})


app.get("/", (req, res)=>{
    (async ()=> {
        const tasks = await db.selectTasks();
        res.status(200).send(tasks);
    })();
        
})
