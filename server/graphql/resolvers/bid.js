const { UserInputError } = require('apollo-server');
const checkAuth = require('../../../utils/check-auth')
const Item = require('../../model/Item')

module.exports = {
    Mutation: {
        async createBid(_, {itemId, body}, context) {
            const user = checkAuth(context);
          
            const item = await Item.findById(itemId)

            if(item) {
                item.bid.unshift ({
                    body,
                    username: user.username,
                    createdAt: new Date().toISOString()
                })
                await item.save()
                return item;
            } else throw new UserInputError('Item not found')
        }
    }
}