import { RequestHandler } from "express";
import { prisma } from "../database/databasefuc";
import { ID, orderClienteID, userID } from "../interfacessolid/interfacesolid";

export const jwt = require('jsonwebtoken');
export const keysecret = 'samyrxn30'

export const ValidateID = async(UserID: number , secret: string) =>{
    const createjwt = await  jwt.sign({ id: UserID }, secret , {
        expiresIn: '24d'
    });
    return createjwt
}





export const createToken = async(user: orderClienteID) => {
    const searchID =  await prisma.cadastro.findFirst({
      where:{
        Cliente_email: user.email
      }, select:{
        id: true
      }
    });
    
  
    
    if (!searchID || typeof searchID.id === 'undefined' || searchID.id === null) { 
      console.log('ID não encontrado'); 
    } 
    else { 
      const token =  await ValidateID(searchID.id, 'qwjlhakjshasjh');
        return `seu token de update e ${token} e seu id e ${searchID.id}`
      }
  
    
    }





  

  


















    //usado para put e delete de pedidos
    /*export const ValidateQuery:RequestHandler= async( req , res , next ) => {
       const token = req.query;
        const validation = jwt.verify(token , keysecret);
       if(!validation){
        throw new Error('failed token')
       }
       next()
    }
       */