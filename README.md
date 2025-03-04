# Fastify #
![Alt text](https://www.luisllamas.es/images/20616/javascript-fastify.webp)

Fastify is Node Js framework used to build server side applications. It provide different feartures like api schema diffreent hooks and handler functions etc.

### It provide different features like: 
1: Super fast it handles more request per second than express.js.
2: Easily extend functionality with plugins.
3: Provide Schema based Validations.

### Fastify Plugins
Fastify has a powerful plugin system that allows you to extend its functionality in a modular way.

### Types of Plugins in Fastify
Built-in Plugins – Provided by Fastify (e.g., logging, parsing, validation).
Third-party Plugins – Community-made plugins for common tasks.
Custom Plugins – Your own reusable logic.

### there are different plugins
fastify-cors	Enable CORS for APIs
fastify-jwt	JWT authentication
fastify-static	Serve static files
fastify-mongodb	Connect to MongoDB
fastify-swagger	Generate API documentation etc..

## Using TypeScript with Fastify
Fastify has first-class support for TypeScript, making it easier to build type-safe APIs with better developer experience.

### Install Dependencies
### `npm install fastify @types/node typescript tsx -D`


## TypeBox – Schema Validation & Type Safety for Fastify
TypeBox is a library that allows you to define JSON Schema with TypeScript types, making it perfect for Fastify’s schema-based validation.
TypeBox provides utilities like Type.Object(), Type.String(), Type.Number(), etc.

### Why Use TypeBox?
Strong Type Safety – Works with TypeScript.
JSON Schema Support – Generates schema for Fastify automatically.
Runtime Validation – Ensures data correctness.
Works with Fastify – Used for input validation in APIs.

### installation
### `npm install @sinclair/typebox`


## Fastify Http Proxy
Fastify Proxy allows you to use a reverse proxy. It forwards API requests from the local server to an external upstream server.
### Syntax:
fastify.register(require("fastify-proxy"), {
  upstream: url,
  prefix: string
});



## Available Scripts

To clone the repo, you can run:
### `git clone https://github.com/MubbashirAhmed123/fastify-typescript-mongodb`

To Install dependencies, you can run:
### `npm install`

In the project directory, you can run:
### `npm run dev`




