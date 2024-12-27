import { json } from "express";
import {orderClienteID, Regra, userID } from "../interfacessolid/interfacesolid";
import { string } from "yup";

export class Estrutura{
   cadastros: Regra;
   constructor(cadastros: Regra){
    this.cadastros = cadastros;
   }
   armazenamnto(){
    const DTO = {
        nome: this.cadastros.nome,
        email: this.cadastros.email,
        idade: this.cadastros.idade
    }
    return DTO
   }
    }

   

   export  class UpdateOrderCliente {
        order_cliente: userID;
        Update_order_descricao: string;
        
        constructor(order_cliente: userID, update: string ) {
          this.order_cliente = order_cliente; 
          this.Update_order_descricao = update// Corrigido: Atribuição correta
        }


     udpatedata(){

        const order = this.order_cliente;
        order['descricao'] = this.Update_order_descricao
        return order;
     }
      }
  