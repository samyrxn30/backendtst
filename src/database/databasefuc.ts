import {  PrismaClient } from '@prisma/client';
import {  orderClienteID, Regra} from '../interfacessolid/interfacesolid';
import { Response } from 'express';
import { createToken, keysecret, ValidateID } from '../jwt/jwtjson';
export const prisma = new PrismaClient();
type Create_and_pedidos<T> = (clientedata: T, res?: Response) => Promise<string>;
export const createUser: Create_and_pedidos<Regra> = async (clientedata, res) => {
  try {
    const user = await prisma.cliente.create({
      data: {
        email: clientedata.email,
        nome: clientedata.nome,
        idade: clientedata.idade,
      },
    });

    return `Usuário ${user.nome} criado com sucesso!`;
  } catch (e) {
    const error = JSON.stringify(e);
    res?.status(500).json({ error: error });
    return error;
  }
}; //create user end point createuser


export const createOrder = async (orderCliente: orderClienteID) => {
  try {
    const email = await prisma.cliente.findUnique({
      where: {
        email: orderCliente.email,
      },
    });

    if (!email) {
      throw new Error('Usuário não encontrado');
    }

    const createisnerciotion = await prisma.cadastro.create({
      data: {
        descricao: orderCliente.descricao,
        Cliente_email: orderCliente.email,
      },
    });//create Order

    const tokenjwt =  await createToken(orderCliente) //criação do token pos create pedido
    return `Seu pedido foi retornado com sucesso e seu token  é ${tokenjwt}, seu id e ${createisnerciotion.id}`;
  } catch (e) {
    return `Erro: ${e}`;
  }
}; //create order  and  token acess system. 

// para depois a exclçusao e 
//update dos datas...
export  const buscarUser = async(email_cliente: orderClienteID) =>{
  try {
    const email = await prisma.cliente.findUnique({
      where: {
        email: email_cliente.email,
      },
    });

    if (!email) {
      throw new Error('Usuário não encontrado');
    }
  return email
  }catch(e){
    const error = e
    return `failed ${error}`
  }
}
