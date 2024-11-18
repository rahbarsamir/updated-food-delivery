const db = require('mongoose');
const jwt = require('jsonwebtoken')

const schema = db.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
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
    rank:{
        type:String,
        require:true
    },
    password: {
        type: String,
        required: true

    },
    tokens: [{
        token: {
            type: String
        }
    }],
    


});

schema.methods.generate = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, "hellomynameisrahbarsamirandiamadevdevloperadmin");
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token
    } catch (error) {

    }
}
module.exports = db.model('admins', schema)