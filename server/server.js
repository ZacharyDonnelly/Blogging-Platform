import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";
import bcrypt from "bcrypt";
import { schema } from "./schema";
import settings from "./settings";
import jwt from "jsonwebtoken";

import UserSchema from "./schemas/users";

const app = express();

// // // eslint-disable-next-line no-undef
// // const MongoClient = require("mongodb").MongoClient;

// const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose.connect(settings.uri, { useNewUrlParser: true });

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
app.post("/user", async ({ body }, res) => {
  bcrypt.hash(body.password, 10, async (err, hash) => {
    const user = new UserSchema({ ...body, password: hash });
    await user.save();
  });

  res.send({
    token: jwt.sign({ email: body.email, issuer: "dis" }, "replace later", {
      algorithm: "RS256"
    }),
    iat: ~~(new Date() / 1000)
  });
});

app.post("/auth", async ({ body: { email, pasword } }) => {
  const user = await new UserSchema().findOne({ email });
  console.log("sdfsdf", user);
});

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen({ port: 3006 }, () =>
  console.log("Now browse to http://localhost:3006" + server.graphqlPath)
);
