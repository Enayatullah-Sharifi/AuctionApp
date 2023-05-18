const itemsResolvers = require('./items')
const userResolvers = require('./users')

module.exports = {
    Query: {
        ...itemsResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation
    }
}