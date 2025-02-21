import { UserReqSchema, UserResSchema } from "../domain/userservice/user.type";

export const userRegisterationSchema = {
    body: UserReqSchema,  
    response: {
        200: UserResSchema, 
    },
};
