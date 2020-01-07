import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Query {
    hello: String
    age: Int
    oldEnough: Boolean
}
`);
