const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.ONLINE_MONGO_URI);
        console.log(`Connected to mongodb on port ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;