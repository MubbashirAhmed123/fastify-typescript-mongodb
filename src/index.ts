import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import userIntegration from "./api/userApis";
import User from "./models/User-model";
import connectToDB from "./config/db";
const fastify = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

// fastify.register(userIntegration);
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



// fastify proxy 


// fastify.get('/api/posts',(req,res)=>{
//     res.status(200).send({msg:"hello world"})
// })
// fastify.addHook('onRequest',(req,res,done)=>{
//     console.log('REQUEST URL',req.url,req.ip)
//     done()
// })

fastify.register(require("@fastify/http-proxy"), {
  prefix: "/api",
  upstream: "http://127.0.0.1:4000/",

  async preHandler(req: FastifyRequest, res: FastifyReply) {
    console.log('incomming IP', req.ip);
    let generatedIps = new Set()

    for (let i = 0; i < 3; i++) {
      const ipArr = req.ip.split('.')
      let lastInd = ipArr.length - 1
      let lastNum = parseInt(ipArr[lastInd])
      const randomNumber = Math.floor(Math.random() * 10)

      let newLastNum = lastNum + randomNumber

      ipArr[lastInd] = newLastNum.toString()

      const newIp = ipArr.join('.')
      console.log(newIp)

      if (!generatedIps.has(newIp)) {
        generatedIps.add(newIp)
      }
    }



    console.log(generatedIps)
  },




});

// fastify.register(require("@fastify/http-proxy"), {
//     upstream: "https://jsonplaceholder.typicode.com",
//     prefix: "/api",

//     async preHandler(req: FastifyRequest, res: FastifyReply) {
//       console.log("Incoming IP:", req.ip);
//     },

//     replyOptions: {
//       onResponse: async (request: FastifyRequest, reply: FastifyReply, res: any) => {
//         reply.header("Content-Encoding", null);
//         reply.header("Content-Type", "application/json");
//         reply.status(200).send({ "response ip": request.ip });
//       },
//     },
//   });







fastify.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});

