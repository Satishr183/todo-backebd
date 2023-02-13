const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    option : {
        type : String,
        enum : ["Open","In-Progress","Completed"]
    }
},{timestamps : true})

module.exports = mongoose.model('Todo', todoSchema)