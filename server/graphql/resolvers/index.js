const itemsResolvers = require('./items')
const userResolvers = require('./users')
const bidResolvers = require('./bid')

module.exports = {
    Query: {
        ...itemsResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...itemsResolvers.Mutation,
        ...bidResolvers.Mutation
    },
    Subscription: {
        ...bidResolvers.Subscription
    }
}