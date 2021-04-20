const express = require("express");
const app = express()

let usuarios =[
  {nome:"Hendy", sobrenome:"Almeida"},
  {nome:"Martin", sobrenome:"Embon"}
]


app.get("/inicio",function(req,res){
    res.send("pagina principal")
})

app.get("/usuarios",function(req,res){
  res.json(usuarios);
})


app.listen (3000,function(){
  console.log("servidor rodando")  
})