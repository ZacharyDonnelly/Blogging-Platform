import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import schema from "./schema";

import settings from "./settings";

import UserSchema from "./schemas/users";

const app = express();

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
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

const validateAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (typeof authHeader === "undefined" && !authHeader.includes("Bearer")) {
    res.status(403);
    res.send({ error: "invalid creds" });
    return;
  }

  const bearer = authHeader.split("Bearer")[1];

  try {
    const decoded = jwt.verify(bearer.replace(" ", ""), "changeME");
  } catch (err) {
    res.status(405);
    res.send({ error: "invalid creds" });

    return;
  }

  next();
};

app.get("/thing", validateAuth, (req, res) => {
  res.send("Working!!");
});

app.post("/users", async ({ body }, res) => {
  bcrypt.hash(body.password, 10, async (err, hash) => {
    const user = new UserSchema({ ...body, password: hash });
    await user.save();
  });

  res.status(200);
});

app.post("/auth", async ({ body }, res) => {
  const { password: hashedPassword } = await UserSchema.findOne({
    email: body.email
  });

  const doesMatch = await bcrypt.compare(body.password, hashedPassword);
  if (!doesMatch) {
    res.status(403);
    res.send({ error: "invalid password" });
    return;
  }

  res.send({
    token: jwt.sign({ email: body.email, issuer: "dis" }, "changeME"),
    iat: ~~(new Date() / 1000)
  });
});

app.listen({ port: 3006 }, () =>
  console.log("Now browse to http://localhost:3006" + server.graphqlPath)
);
