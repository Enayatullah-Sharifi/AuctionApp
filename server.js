const { ApolloServer } = require('apollo-server')
const { PubSub } = require('graphql-subscriptions')
require('dotenv').config()
const connectDB = require('./server/db/db')
connectDB();

const pubsub = new PubSub()





const typeDefs = require('./server/graphql/typeDefs')
const resolvers = require('./server/graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
})

const port = process.env.PORT || 8080;
server.listen(port, console.log(` Server running on port ${port}`))