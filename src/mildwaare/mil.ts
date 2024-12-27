import { Schema, ValidationError } from 'yup';

import { Request, Response, RequestHandler } from 'express';
type decison = 'query' | 'body'   | 'params';
type Model = Record<decison , Schema<any>>;
type SchemarRequestHandler = (schema: Partial<Model>) => RequestHandler;
export const MildawareValidationSchema:SchemarRequestHandler = (Schema) => {
    return async(req , res , next) =>{
      const errorpath: Record<string , Record<string , string>> ={}
      for(const [key,schema ] of Object.entries(Schema)){
        try{
           await schema.validate(req[key as decison],   { abortEarly: false })
        }
      catch(e){
        const yuperror = e as ValidationError;
        const error:Record<string , string >  ={}
        yuperror.inner.forEach(fail =>{
            if(fail.path){
                error   [fail.path] = fail.message  
            }
        errorpath   [key] = error
        })
      }
      }

    if(Object.entries(errorpath).length == 0){
       return  next()
    }
    else{
       res.json({
        path: errorpath.path , error: errorpath.message
       })
    }
    }
}