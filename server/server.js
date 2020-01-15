import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import schema from "./schemas/gqlSchema";
import { MONGO_URI, JWT_SECRET } from "./config/settings";
import userSchema from "./schemas/users";

const app = express();
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

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
    const decoded = jwt.verify(bearer.replace(" ", ""), JWT_SECRET);
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

app.post("/verify", async ({ body }, res) => {
  try {
    const emailTaken = await userSchema.findOne({
      email: body.email
    });
    const displayTaken = await userSchema.findOne({
      display: body.display
    });
    if (emailTaken !== null || displayTaken !== null) {
      res.status(403);
      res.send("Username or Email taken");
      return;
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200);
  res.send("No Match");
});

app.post("/users", async ({ body }, res) => {
  bcrypt.hash(body.password, 10, async (err, hash) => {
    const user = new userSchema({ ...body, password: hash });
    await user.save();
  });

  res.status(200);
  res.send({ created: "success" });
});

app.post("/auth", async ({ body }, res) => {
  try {
    const { password: hashedPassword } = await userSchema.findOne({
      email: body.email
    });
    const doesMatch = await bcrypt.compare(body.password, hashedPassword);
    if (!doesMatch) {
      res.status(403);
      res.send({ error: "invalid password" });
      return;
    }
  } catch (err) {
    res.status(403);
    res.send({ error: "invalid email or password" });
  }
  res.send({
    token: jwt.sign({ email: body.email, issuer: "dis" }, JWT_SECRET),
    iat: ~~(new Date() / 1000)
  });
});

app.listen({ port: 3006 }, () =>
  console.log("Now browse to http://localhost:3006" + server.graphqlPath)
);
