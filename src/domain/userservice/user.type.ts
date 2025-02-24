import { Type, Static } from "@sinclair/typebox";

const UserRequestSchema=Type.Object({
    sName: Type.String(),
    sEmail: Type.String(),
    sAge: Type.Number(),
    sPassword:Type.String()
});

const UserResponseSchema=Type.Object({
    data: Type.Object({
        msg: Type.String(),
        status: Type.Number(),
    }),
});


const UserLoginSchema=Type.Object({
    sEmail:Type.String(),
    sPassword:Type.String()
})

type UserRequestSchema = Static<typeof UserRequestSchema>;
type UserResponseSchema = Static<typeof UserResponseSchema>;
type UserLoginSchema=Static<typeof UserLoginSchema>

type StudentAction ='register' | 'login' | 'profile'


export { UserRequestSchema, UserResponseSchema,UserLoginSchema,StudentAction};
