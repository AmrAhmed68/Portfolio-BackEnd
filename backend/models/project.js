const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    details :{
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true
    },
    github : {
        type : String,
        require : true
    },
    imageUrl : [{
        type : String,
        require : true
    }],
    video : {
        type : String,
        require : true
    },
    demo : {
        type : String,
    },
    Hedimage : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Project' , projectSchema)