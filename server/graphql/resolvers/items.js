const Item = require('../../model/Item')
const checkAuth = require('../../../utils/check-auth')
const { AuthenticationError } = require('apollo-server')

function notification(){
    Notification.requestPermission().then(per => {
        new Notification('wowo')
    })
}

module.exports = {
    Query: {

        //  get all items 
         async getItems(){
            return await Item.find().sort({ createdAt: -1 })
        },

        // get specific item by it's category 
        async getItemByCategory(_, {category}){
            try {
                const categories = await Item.find({ category})
                if(categories) {
                    return categories
                } else {
                throw new Error('Item not found')
            } 
            } catch (err) {
              throw new Error(err)  
            }
        },
    },

    Mutation: {
        // cteate an item
        async createItem(_, {item: { name, category, startingBid, minBid, duration }}, context){
            const user = checkAuth(context);
            console.log(user)
            const newItem = new Item({
                name,
                category,
                startingBid,
                minBid,
                duration: new Date().toISOString(),
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            })
            
            const item = await newItem.save()
            return item;
        },
        async deleteItem(_, {itemId}, context){
            const user = checkAuth(context);

            try {
              const item = await Item.findById(itemId)  
              if(user.username === item.username) {
                await item.delete();
                return 'Item deleted successfully'
              } else {
                throw new AuthenticationError('Not allowed')
              }
            } catch (err) {
               throw new Error(err) 
            }
        }
    }
}