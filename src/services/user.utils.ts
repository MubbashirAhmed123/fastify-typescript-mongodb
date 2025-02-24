import { FastifyReply } from "fastify";
import { UserLoginSchema, UserRequestSchema } from "../domain/userservice/user.type";
import User from "../models/User-model";

//student register api
export const studentregister = async (req: UserRequestSchema | UserLoginSchema) => {
    try {
        const { sEmail } = req
        console.log(req)
        const isStudent = await User.findOne({ sEmail })
        console.log('isStudent', isStudent)
        if (isStudent) {
            return { data: { status: 400, msg: "student already have an account please login." } }

        }
        const newStudent = new User(req);
        await newStudent.save();
        console.log(newStudent)
        return { data: { status: 201, msg: "student account has been created successfully." } }

    } catch (err) {

        return { data: { status: 201, msg: "something went wrong." } }

    }
}

//student login api
export const studentLogin = async (req: UserRequestSchema | UserLoginSchema) => {
    try {
        const { sEmail, sPassword } = req
        const isStudent = await User.findOne({ sEmail })
        if (!isStudent) {
            return { data: { status: 201, msg: "student does not exist." } }
        }
        if (sPassword !== isStudent.sPassword) {
            return { data: { status: 201, msg: "invalid credentials." } }
        }

        return { data: { status: 201, msg: "login successfully." } }


    } catch (error) {
        return { data: { status: 201, msg: "domething went wrong." } }

    }

}


