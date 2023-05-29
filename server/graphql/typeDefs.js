const { gql } = require('apollo-server')

module.exports = gql`

    type Item {
        id: ID!,
        name: String!,
        category: String!,
        startingBid: Int!,
        minBid: Int!,
        createdAt: String!,
        duration: String!,
        username: String!
        bid: [Bids]!
    }
    type Bids {
        id: ID!
        body: Int!,
        username: String!,
        createdAt: String!
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
    input ItemInput {
        name: String!,
        category: String!,
        startingBid: Int!,
        minBid: Int!
        duration: String
    }
    type Query {
        getItems: [Item]
        getItemByCategory(category: String): [Item!]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createItem(item: ItemInput!): Item!
        deleteItem(itemId: ID): String!

        createBid(itemId: String!, body: Int!): Item!
    }

    type Subscription {
        bid: Bids
    }
`