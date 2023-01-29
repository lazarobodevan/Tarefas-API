const express = require('express');
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Rodando com express na porta ${port}`);
})

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Ola</h1>")
})