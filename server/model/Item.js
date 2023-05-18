const { model, Schema } = require('mongoose')

const itemSchema = new Schema({
    name: String,
    // startingBid: Number,
    // minBid: Number,
    // duration: Date,
    // createdAt: Date,
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // }
})

module.exports = model('Item', itemSchema)