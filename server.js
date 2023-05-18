const { ApolloServer, gql } = require('apollo-server')
require('dotenv').config()
const connectDB = require('./server/db/db')

connectDB();

const typeDefs = require('./server/graphql/typeDefs')
const resolvers = require('./server/graphql/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

const port = process.env.PORT || 8080;
server.listen(port, console.log(`Server running on port ${port}`))