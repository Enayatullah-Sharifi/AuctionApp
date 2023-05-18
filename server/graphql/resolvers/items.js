const Item = require('../../model/Item')
module.exports = {
    Query: {
         async getItems(){
            return await Item.find()
        }
    }
}