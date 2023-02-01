const validateRequest = (req, res, next) =>{
    const {body} = req;
    const status = ["PENDENTE", "EM ANDAMENTO", "CONCLUIDO"]
    if(body.name == undefined || body.name == ""){
        return res.status(400).json({message: "O campo Nome é obrigatório."});
    }
    if(body.status == undefined || !status.some(elem => elem == body.status.toUpperCase())){
        //console.log(body.status);
        return res.status(400).json({message: "Campo Status inválido."});
    }

    next();
};

module.exports = {
    validateRequest
}