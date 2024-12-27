import { RequestHandler } from "express";
import { jwt, keysecret } from "../../jwt/jwtjson";

import { JsonWebTokenError } from 'jsonwebtoken';

import { MildawareValidationSchema } from "../../mildwaare/mil";
import { Estrutura, UpdateOrderCliente } from '../../database/estrutura';
import * as yup from  'yup';
import { orderClienteID, userID } from '../../interfacessolid/interfacesolid';
import { createOrder, prisma } from '../../database/databasefuc';



 export const queryparamsID = MildawareValidationSchema({
    query: yup.object().shape({
        idhash: yup.string().required().max(300)
    }),
    body:yup.object().shape({
        id: yup.number().required().max(18),
        email: yup.number().required().max(60),
        newdescricao:  yup.string().required().max(300)
    }),
   
}); //validate values, case of brute force data email or description or id...



export  const verificationexitence: RequestHandler= async(req , res , next , ) =>{
    const idOrder =   req.query;
    const reqdata:userID =  JSON.parse(JSON.stringify(req.body));
    try{
      const verificationauthtoKEN = await jwt.verify( idOrder , keysecret);
      if(verificationauthtoKEN.id == reqdata.id){
        next();
      }
    }catch(e) {
     console.log(e)
    }
  } //verificar se o id e compativel com o token, caso nao seja fudeu







export const UpdateValues: RequestHandler= async(req , res , next) =>{
    const reqdata:userID =  JSON.parse(JSON.stringify(req.body));
    const Estrutra_udpate =   new UpdateOrderCliente(reqdata , reqdata.descricao ); //arrumar alguma maneira de atualizar os dois
    const result = Estrutra_udpate.udpatedata()
    //using estrutura de data.
    try{
      const searchUser_and_Update = await prisma.cadastro.update({
        where:{
            id: result.id
        },
        data:{
         descricao: result.descricao
        },
        select:{
            descricao: true
        },

      });
      res.json({
        update: true ,     dataUpdate: `seu dados atualizados sao ${searchUser_and_Update.descricao}`
      })
    }catch(e){
     const error_descrition_failed = e 
     res.json({
        update: false , dataUpdate: `suas informações nao foram atualizados pois ${error_descrition_failed}`
     })
    }

}//aero fuction of update data of order client. The  next fuction sample information data order client.





