const mongoose = require('mongoose')

const shoppingListSchema = new mongoose.Schema({
    grocery: {
        type: String,
    },
    purchased: {
        type: Boolean,
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    priority: {
        type: Boolean
    }
})

module.exports = mongoose.model('groceryList', shoppingListSchema)