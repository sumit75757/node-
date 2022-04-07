const mongoos = require('mongoose');

const emailSchema = mongoos.Schema({

    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
module.exports = mongoos.model('email', emailSchema)