const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        required: true
    },
    subTask: {
        type: 'string',
        required: true
    }

})

// id: , title: , status:, subTask:

const User = mongoose.model('USER', userSchema)

module.exports = User;