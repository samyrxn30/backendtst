import express = require('express');
import {  getInfoUser, postcreatepedido, postreateuser, put } from './controller/rotas';
import { ValueUser } from './rotas/getdata/get';
import * as  SwaggerUI from 'swagger-ui-express';
const SwaggerDocs = require('./swagger/swagger.json');

export const port = 3333;
export const server = express();
server.use(express.json());

server.use('/api-docs', SwaggerUI.serve , SwaggerUI.setup(SwaggerDocs))
//swagger use documentation of api.



server.post('/createuser' , postreateuser.validation , postreateuser.conection_bd ,  postreateuser.searchUser); //create user ok// swargger ok

server.post('/createorder', postcreatepedido.dataorder , postcreatepedido.createPEDIDO); // create order ok  //swargger ok 

server.put('/updatedata', put.queryparamsID , put.verificationexitence , put.UpdateValues) //pudate values from the  orders

server.post('/etc', getInfoUser.queryparams , getInfoUser.ValueUser) //acess data user ok  //swargger ok 
server.get('/api/get' , (req , res )=>{
 res.send("ola mundo ")
}) // rota de teste 
server.listen(port , ()=>{
console.log(`servidor rodando http://localhost:${port}`)
});
