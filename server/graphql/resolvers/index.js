const itemsResolvers = require('./items')
const userResolvers = require('./users')
const bidResolbers = require('./bid')

module.exports = {
    Query: {
        ...itemsResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...itemsResolvers.Mutation,
        ...bidResolbers.Mutation
    }
}