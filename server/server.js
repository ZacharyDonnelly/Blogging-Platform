import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";

import { schema } from "./schema";

const app = express();

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

const resolvers = {
  hello: () => "Hello world!",
  age: () => 1122334,
  oldEnough: () => false
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen({ port: 3006 }, () =>
  console.log("Now browse to http://localhost:3006" + server.graphqlPath)
);
