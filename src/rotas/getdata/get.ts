import { JsonWebTokenError } from 'jsonwebtoken';
import { NextFunction, RequestHandler, Response } from 'express';
import { MildawareValidationSchema } from "../../mildwaare/mil";
import { Estrutura } from '../../database/estrutura';
import * as yup from  'yup';
import { orderClienteID } from '../../interfacessolid/interfacesolid';
import { createOrder, prisma } from '../../database/databasefuc';
import { keysecret } from '../../jwt/jwtjson';
let secret = 'Samyrxn30';
const jwt = require('jsonwebtoken');
 export const queryparams = MildawareValidationSchema({
    
    body: yup.object().shape({
        email: yup.string().required().max(200)})
});
//validation do user..




interface email{
  email: string
}


export const ValueUser:RequestHandler = async (req , res , next ) => {
  const Useremail:email = JSON.parse(JSON.stringify(req.body))

  try {
    const DataUser_and_order = await prisma.cliente.findFirst({
      where: {
        email: Useremail.email,
      },
      select: {
        nome: true,
        idade: true,
        email: true,
        cadastro: true,
      },
    });

    

    res.json({ response: `true`, msg: `Usuário e ID ok, esses são seus dados: ${DataUser_and_order} , seus pedidos ${DataUser_and_order?.cadastro} , e seu email
      e ${DataUser_and_order?.email}
      
      `});
  } catch (e) {
    const error = e as Error;
    res.status(500).json(`Failed: ${error.message}`);
  }
};
