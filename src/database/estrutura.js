"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderCliente = exports.Estrutura = void 0;
var Estrutura = /** @class */ (function () {
    function Estrutura(cadastros) {
        this.cadastros = cadastros;
    }
    Estrutura.prototype.armazenamnto = function () {
        var DTO = {
            nome: this.cadastros.nome,
            email: this.cadastros.email,
            idade: this.cadastros.idade
        };
        return DTO;
    };
    return Estrutura;
}());
exports.Estrutura = Estrutura;
var UpdateOrderCliente = /** @class */ (function () {
    function UpdateOrderCliente(order_cliente, update) {
        this.order_cliente = order_cliente;
        this.Update_order_descricao = update; // Corrigido: Atribuição correta
    }
    UpdateOrderCliente.prototype.udpatedata = function () {
        var order = this.order_cliente;
        order['descricao'] = this.Update_order_descricao;
        return order;
    };
    return UpdateOrderCliente;
}());
exports.UpdateOrderCliente = UpdateOrderCliente;
