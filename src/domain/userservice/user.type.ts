import { Type, Static } from "@sinclair/typebox";

const UserReqSchema = Type.Object({
    name: Type.String(),
    email: Type.String(),
    phoneNumber: Type.Number(),
    password:Type.String()
});

const UserResSchema = Type.Object({
    data: Type.Object({
        msg: Type.String(),
        status: Type.Number(),
    }),
});


const UserLoginSchema=Type.Object({
    email:Type.String(),
    password:Type.String()
})

type UserReqType = Static<typeof UserReqSchema>;
type UserResType = Static<typeof UserResSchema>;
type UserLoginSchema=Static<typeof UserLoginSchema>

export { UserReqSchema, UserResSchema, UserReqType, UserResType ,UserLoginSchema};
