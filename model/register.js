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
    email: {
        type: String,
        required: true,
        unique: true

    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true

    },
    comfirmPassword: {
        type: String,
        required: true

    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    cart: [{

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
        classname:{
            type:String
        }
    }],
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
        classname:{
            type:String
        }
    }],
    total:{
        type:Number
    },
    lat:{
        type:String
    },
    lng:{
        type:String
    }


});

schema.methods.generate = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, "hellomynameisrahbarsamirandiamadevdevloper");
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (error) {

    }
}
module.exports = db.model('Register', schema)