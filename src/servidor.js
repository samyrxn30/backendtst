"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.port = void 0;
var express = require("express");
var rotas_1 = require("./controller/rotas");
var SwaggerUI = require("swagger-ui-express");
var SwaggerDocs = require('./swagger/swagger.json');
exports.port = 3333;
exports.server = express();
exports.server.use(express.json());
exports.server.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerDocs));
//swagger use documentation of api.
exports.server.post('/createuser', rotas_1.postreateuser.validation, rotas_1.postreateuser.conection_bd, rotas_1.postreateuser.searchUser); //create user ok// swargger ok
exports.server.post('/createorder', rotas_1.postcreatepedido.dataorder, rotas_1.postcreatepedido.createPEDIDO); // create order ok  //swargger ok 
exports.server.put('/updatedata', rotas_1.put.queryparamsID, rotas_1.put.verificationexitence, rotas_1.put.UpdateValues); //pudate values from the  orders
exports.server.post('/etc', rotas_1.getInfoUser.queryparams, rotas_1.getInfoUser.ValueUser); //acess data user ok  //swargger ok 
exports.server.get('/get', function (req, res) {
    res.send("ola mundo ");
}); // rota de teste 
exports.server.listen(exports.port, function () {
    console.log("servidor rodando http://localhost:".concat(exports.port));
});
