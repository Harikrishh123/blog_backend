
const mongoose = require('mongoose')

const mongUrl = "mongodb://localhost:27017/blog"

const connectToMo = () => {
    mongoose.connect(mongUrl).then(console.log("mongoose is connected"))
}

module.exports = connectToMo ;