import { RequestHandler } from "express";
import { MildawareValidationSchema } from "../mildwaare/mil";
import * as yup from  'yup';
import { orderClienteID } from "../interfacessolid/interfacesolid";
import { createOrder } from "../database/databasefuc";
export const dataorder = MildawareValidationSchema({
    body: yup.object().shape({
        email: yup.string().required().max(50),
        descricao: yup.string().required().max(150),
    })
});
//insercion and create order..
export const createPEDIDO: RequestHandler = async (req, res) => {

      const jsonorder: orderClienteID = req.body;
      const result = await createOrder(jsonorder);
      res.status(201).send({ success: true, message: 'Pedido criado com sucesso', data: result });
   
  };
