const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

// Rota padrão estatus 200 sempre responde o status 200 fala que esta tudo ok.
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express.js!');
});
app.get('/:cor', (req, res) => {
    const cores = ['azul','amarelo','vermelho','roxo','verde'];
    if(cores.includes(req)){
        res.send(`cor ${req.params.cor}`);
        return;


    }
    res.status(400).send(`${req.params.cor} não é uma cor válida!`)
});

app.post('/cor',(req,res) => {
    const cores = ['azul','amarelo','vermelho','roxo','verde'];
    if(cores.includes(req.body.cor)){
        req.json({cor: req.body.cor});
        return;
    }
    res.status(400).json({error:`${req.body.cor}não é uma cor válida!`})
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});