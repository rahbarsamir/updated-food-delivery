const db = require('mongoose');
const jwt = require('jsonwebtoken')

const schema = db.Schema({
    fName: {
        type: String,
        required: true

    },
    lName: {
        type: String,
        required: true

    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true

    },
    order: [{

        foodName: {
            type: String
        },
        price: {
            type: Number
        },
        foodImg: {
            type: String
        },
        qty: {
            type: Number,
            default: 1
        },
        classname: {
            type: String
        }
    }],
    total: {
        type: Number
    }
})
module.exports = db.model('order', schema)