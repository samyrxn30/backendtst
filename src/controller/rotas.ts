import { RequestHandler } from "express"
import { conection_bd, searchUser, validation} from "../rotas/post/post"
import { createPEDIDO, dataorder } from "../rotas/createorder"
import { queryparams, ValueUser} from "../rotas/getdata/get"
import { queryparamsID, UpdateValues,  verificationexitence } from "../rotas/put/putorder"
export const getstart:RequestHandler = async(req , res , next) =>{
    res.send('ola mundo ')
}
export const postreateuser ={
validation,
conection_bd,
searchUser
}
export const put = {
queryparamsID,
verificationexitence,
UpdateValues

}
export const postcreatepedido = {
dataorder,
createPEDIDO
}

export const getInfoUser ={
 queryparams,
 ValueUser
}

const deletes = {

}
