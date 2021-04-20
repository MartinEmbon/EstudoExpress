const express = require("express");
const app = express()
const Usuario = require("./usuarios")

/*
let usuarios =[
  {nome:"Hendy", sobrenome:"Almeida"},
  {nome:"Martin", sobrenome:"Embon"}
]*/


app.get("/inicio",function(req,res){
    res.send("pagina principal")
})

app.get("/usuarios",function(req,res){
  res.json(Usuario);
})


app.listen (3000,function(){
  console.log("servidor rodando")  
})