import { UserRequestSchema, UserResponseSchema } from "../domain/userservice/user.type";

export const userRegisterationSchema = {
    body: UserRequestSchema,  
    response: {
        200: UserResponseSchema, 
    },
};
