import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { userRegisterationSchema } from "../../services/user.verificationSchema";
import { UserLoginSchema, UserResponseSchema,StudentAction, UserRequestSchema } from "../../domain/userservice/user.type";
import { userUsecase } from "../../services/user-usecase";

const userIntegration: FastifyPluginAsync = async (fastify) => {
    
    fastify.post(
        "/register",
        { schema: userRegisterationSchema },
        async (req, res) => {
            console.log(req.body)
            let action:'register'='register'
            await userUsecase(req.body as UserRequestSchema,res,action)
        }
    ).post('/login',{
        schema:{
            body: UserLoginSchema, 
            response: {
                200: UserResponseSchema
            }
        }
    },async(req,res)=>{
        let action:'login'='login'
        await userUsecase(req.body as UserLoginSchema,res,action)
    })
    

};

export default userIntegration