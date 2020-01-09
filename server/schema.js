import { buildSchema } from "graphql";

const schema = buildSchema(`
type Query {
    hello: String
    age: Int
    oldEnough: Boolean
}
`);

export default schema;
