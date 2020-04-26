import { buildSchema } from "graphql";

const schema = buildSchema(`
type Query {
    allAccounts(limit: Int!, offset: Int!): [Account!]
    checkExists(email: String!, display: String!): String
}

type Account {
    display: String!
    email: String!
    id: String!
}

type checkExists {
    email: String!
    display: String!
}
`);

export default schema;
