import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import userIntegration from "./api/userApis";
import User from "./models/User-model";
import connectToDB from "./config/db";
const fastify = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(userIntegration);
connectToDB()
const insertData = async () => {

    try {
        await User.deleteMany()
        const res = await User.insertMany([
            { sid: "U001", sName: "John Doe", sEmail: "johndoe@example.com", sAge: 25 },
            { sid: "U002", sName: "Jane Smith", sEmail: "janesmith@example.com", sAge: 30 },
            { sid: "U003", sName: "Alice Johnson", sEmail: "alicejohnson@example.com", sAge: 22 },
            { sid: "U004", sName: "Bob Williams", sEmail: "bobwilliams@example.com", sAge: 28 },
            { sid: "U005", sName: "Charlie Brown", sEmail: "charliebrown@example.com", sAge: 35 },
            { sid: "U006", sName: "David Miller", sEmail: "davidmiller@example.com", sAge: 40 },
            { sid: "U007", sName: "Emma Wilson", sEmail: "emmawilson@example.com", sAge: 27 },
            { sid: "U008", sName: "Frank Thomas", sEmail: "frankthomas@example.com", sAge: 32 },
            { sid: "U009", sName: "Grace Hall", sEmail: "gracehall@example.com", sAge: 26 },
            { sid: "U010", sName: "Henry Scott", sEmail: "henryscott@example.com", sAge: 29 },
            { sid: "U011", sName: "Ivy Lewis", sEmail: "ivylewis@example.com", sAge: 31 },
            { sid: "U012", sName: "Jack Walker", sEmail: "jackwalker@example.com", sAge: 24 },
            { sid: "U013", sName: "Katie Young", sEmail: "katieyoung@example.com", sAge: 33 },
            { sid: "U014", sName: "Liam King", sEmail: "liamking@example.com", sAge: 38 },
            { sid: "U015", sName: "Mia Allen", sEmail: "miaallen@example.com", sAge: 21 },
            { sid: "U016", sName: "Noah Adams", sEmail: "noahadams@example.com", sAge: 36 },
            { sid: "U017", sName: "Olivia Nelson", sEmail: "olivianelson@example.com", sAge: 23 },
            { sid: "U018", sName: "Paul Carter", sEmail: "paulcarter@example.com", sAge: 37 },
            { sid: "U019", sName: "Quinn Baker", sEmail: "quinnbaker@example.com", sAge: 34 },
            { sid: "U020", sName: "Ryan Davis", sEmail: "ryandavis@example.com", sAge: 39 }
        ])
        console.log('inserted....')
    } catch (error) {
        console.log(error)

    }

}

// insertData()



// const fetchData = async () => {
//     try {
//         const userWithNameAndAge = await User.find({ $and: [{ sName: 'John Doe' }, { sAge: { $gt: 20 } }] }).explain('executionStats')
     
//         console.log(userWithNameAndAge)
//     } catch (error) {
//         console.log(error)

//     }

//     let indexes = await User.collection.indexes()
//     console.log(indexes)


    
// }
// const aggregatePractice=async()=>{
//     const eg1=await User.aggregate([
//         {$match:{sAge:{$gte:30}}},
//         {$sort:{sAge:1,sName:1}},
//         // {$project:{sName:1,sAge:1}},
//         // {$count:'sName'}

//     ])

//     console.log(eg1)
// }
// aggregatePractice()


// fetchData()





fastify.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});

