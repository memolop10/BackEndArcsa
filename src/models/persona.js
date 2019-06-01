const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    name:{
        required:true,
        type:String,
        trim:true,
        maxlength:20,
        minlength:1,
    },

    age:{
        required:true,
        type:String,
        trim:true,
        maxlength:2,
    },

    sexo:{
        type:String,
        trim:true,
        maxlength:1,
    },

    codigo:{
        type:String,
        trim:true,
        maxlength:10,
    }

    
})

module.exports = {
    schema,
    model:mongoose.model('persona',schema)    
}