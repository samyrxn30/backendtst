//ETAPAS : PRIMEIRO VALIDAÇÃO DOS DADOS, DEPOIS ESTRUTURA DE DADOS, E INSERÇÃO NO BANCO DE DADOS ATRAVES DO ORM E DEPOIS A CRIAÇÃO DO TOKEN JWT...
import * as yup from  'yup';
import { MildawareValidationSchema } from "../../mildwaare/mil";
import { orderClienteID , Regra } from '../../interfacessolid/interfacesolid';
import { Estrutura } from '../../database/estrutura';
import { JsonWebTokenError } from 'jsonwebtoken';
import { createUser } from '../../database/databasefuc';
import { RequestHandler, Response } from 'express';

export  const validation = MildawareValidationSchema({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        idade: yup.number().required().min(2),
        email: yup.string().required().min(15)
    })
}); //validação...


export const searchUser = async(req: Request ) => {
    const values1:Regra =    JSON.parse(JSON.stringify(req.body));
    const   result = new  Estrutura(values1);
    return console.log(result.armazenamnto())
}
export  const conection_bd:RequestHandler  = async(req , res , next) =>{
    
    try{
        const values1:Regra =    JSON.parse(JSON.stringify(req.body));
        const   result = new  Estrutura(values1);
        const createUser_instance =  await createUser(result.armazenamnto())
         res.json(createUser_instance);
  
    }catch(e){
        const error = e;
        res.status(201).json(error);
    
    }
}