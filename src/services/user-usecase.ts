import { FastifyReply } from "fastify"
import { StudentAction, UserLoginSchema, UserRequestSchema } from "../domain/userservice/user.type"
import { userFuncs } from "./user"

//user usecase file to handle the request and response
export const userUsecase=async(req: UserRequestSchema | UserLoginSchema,res:FastifyReply,action:StudentAction,)=>{

    try {
        const response=await userFuncs(req,action)
        console.log('response',response)
        return res.send(response)
      
    } catch (error) {
        console.log(error)
    }



}