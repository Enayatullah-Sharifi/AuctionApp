const { model, Schema } = require('mongoose')

const itemSchema = new Schema({
    name: String,
    category: String,
    startingBid: Number,
    minBid: Number,
    duration: Date,
    createdAt: Date,
    bid: [
        {
            body: Number,
            username: String,
            createdAt: String
        }
    ],
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Item', itemSchema)