const { gql } = require('apollo-server')

module.exports = gql`

    type Item {
        id: ID,
        name: String
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String
        createdAt: String! 
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getItems: [Item]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
    }
`