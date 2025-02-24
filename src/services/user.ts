import { FastifyReply } from "fastify";
import { StudentAction, UserLoginSchema, UserRequestSchema } from "../domain/userservice/user.type";
import {studentLogin, studentregister} from './user.utils'


//sub file to hanlde the different api calls
export const userFuncs=async(req: UserRequestSchema | UserLoginSchema,action:StudentAction,)=>{
    console.log(req)

    if(action=='register'){
       return await studentregister(req)
    }else if(action=='login'){
       return await studentLogin(req)
    }
    

}
