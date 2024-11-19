const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    icon : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Skills' , skillsSchema)