// eslint-disable-next-line no-undef
const { buildSchema } = require("graphql");

export const schema = buildSchema(`
type Query {
    hello: String
    age: Int
    oldEnough: Boolean
}
`);
