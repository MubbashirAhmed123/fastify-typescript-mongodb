import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { userRegisterationSchema } from "../../services/user.verificationSchema";
import { UserLoginSchema, UserResSchema } from "../../domain/userservice/user.type";

const userIntegration: FastifyPluginAsync = async (fastify) => {
    fastify.post(
        "/",
        { schema: userRegisterationSchema },
        async (req, rep) => {
            rep.send({data:{msg:'users',status:201}});
        }
    ).post('/login',{
        schema:{
            body: UserLoginSchema, 
            response: {
                200: UserResSchema
            }
        }
    },(req:FastifyRequest,rep:FastifyReply)=>{
        rep.send({data:{msg:'Login successful',status:200}})
    })
    
};

export default userIntegration