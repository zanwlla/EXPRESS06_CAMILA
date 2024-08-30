//APRIMORAR APRESENTAÇÃO DOS RESULTADOS

const express= require('express');
const mysql= require('mysql2');
const mysql_config = require('./mysql_config');
const functions = require('./mysql_config');

const app= express();
const cors = require('cors');
app.listen(3000,()=>{
    console.lo('Servidor no ar')
})

//my sql connection

const connection = mysql.createConnection(mysql_config)

//criar uma função que irá parametrizar as respostas da api
//para utilizar todos os endpoints vamos uma função para isso

//criando um roteamento

//consumindo um cors
app.use(cors());

app.get('/',(req,res)=>{
    //vamos estabelecer a conexão para executar a query
    //vamos consumir a functions criada
    connection.query('SELECT * FROM tasks',(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro:'+err.message))
        }else{
            res.json(functions.response('sucess','tasks listadas com sucesso',results))
        }
    })
})